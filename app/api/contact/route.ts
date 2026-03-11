import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Integration point:
  // Replace this with Resend/Formspree/email provider logic.
  console.log("New inquiry", parsed.data);

  return NextResponse.json({ success: true });
}
