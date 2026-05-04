"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterValues } from "@/lib/validation/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm({ centered = false }: { centered?: boolean }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", firstName: "" },
  });

  const onSubmit = async (values: NewsletterValues) => {
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) { setState("error"); return; }
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--soft)] px-6 py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
          You&apos;re in ✓
        </p>
        <p className="mt-2 text-lg font-bold">See you in your inbox.</p>
        <p className="mt-1 text-sm text-[color:var(--muted)]">
          First issue coming soon — real prompts, real mistakes, zero hype.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
        <div className="flex flex-col gap-1">
          <Input
            id="firstName"
            placeholder="First name"
            className="h-11 min-w-0 sm:w-36"
            {...register("firstName")}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-xs text-[color:var(--danger)]">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="h-11 min-w-0 sm:w-56"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-[color:var(--danger)]">{errors.email.message}</p>
          )}
        </div>

        <Button type="submit" disabled={state === "loading"} className="h-11 shrink-0">
          {state === "loading" ? "…" : "Join free"}
        </Button>
      </div>

      {state === "error" && (
        <p className="mt-2 text-sm text-[color:var(--danger)]">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
