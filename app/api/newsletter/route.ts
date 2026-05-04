import { NextResponse } from "next/server";
import { LumailRateLimitError } from "lumail";
import { getLumail } from "@/lib/lumail";
import { newsletterSchema } from "@/lib/validation/newsletter";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = newsletterSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { email, firstName } = parsed.data;

  try {
    const { subscriber } = await getLumail().subscribers.create({
      email,
      name: firstName,
      tags: ["newsletter"],
      fields: { signupDate: new Date().toISOString() },
      triggerWorkflows: true,
    });

    console.log("Subscriber created:", subscriber);
  } catch (error: unknown) {
    if (error instanceof LumailRateLimitError) {
      return NextResponse.json(
        { error: "Too many requests, please try again shortly." },
        { status: 429 }
      );
    }
    throw error;
  }

  return NextResponse.json({ success: true });
}
