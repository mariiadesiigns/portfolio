"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterValues } from "@/lib/validation/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterForm() {
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

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="space-y-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--soft)] px-8 py-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[color:var(--accent)]" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--accent)]">
            You&apos;re in
          </p>
        </div>
        <p className="font-serif text-2xl font-bold tracking-tight">
          Welcome to the list.
        </p>
        <p className="text-sm leading-relaxed text-[color:var(--muted)]">
          Expect real talk on branding, design process, and building a studio — straight
          to your inbox, no fluff.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Ada"
            {...register("firstName")}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-xs text-[color:var(--danger)]">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="ada@studio.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-[color:var(--danger)]">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-1">
        <Button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
        {state === "error" && (
          <p className="text-sm text-[color:var(--danger)]">
            Something went wrong — please try again.
          </p>
        )}
      </div>

      <p className="text-xs text-[color:var(--muted)]">
        No spam. Unsubscribe any time.
      </p>
    </form>
  );
}
