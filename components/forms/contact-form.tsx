"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      lookingFor: "",
      budgetRange: "$2k - $5k",
      timeline: "1-2 months"
    }
  });

  const onSubmit = async (values: ContactValues) => {
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? (
            <p className="text-xs text-[color:var(--danger)]">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...register("company")}
            aria-invalid={!!errors.company}
          />
          {errors.company ? (
            <p className="text-xs text-[color:var(--danger)]">{errors.company.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lookingFor">What are you looking for</Label>
        <Textarea
          id="lookingFor"
          {...register("lookingFor")}
          aria-invalid={!!errors.lookingFor}
          placeholder="Tell me about your brand, goals, and what support you need."
        />
        {errors.lookingFor ? (
          <p className="text-xs text-[color:var(--danger)]">
            {errors.lookingFor.message}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Budget range</Label>
          <Select id="budgetRange" {...register("budgetRange")}> 
            <option>Under $2k</option>
            <option>$2k - $5k</option>
            <option>$5k - $10k</option>
            <option>$10k+</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select id="timeline" {...register("timeline")}>
            <option>ASAP</option>
            <option>1-2 months</option>
            <option>3+ months</option>
            <option>Flexible</option>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending..." : "Send Inquiry"}
        </Button>
        {state === "success" ? (
          <p className="text-sm text-[color:var(--accent)]">
            Thank you. I&apos;ll reply within 1-2 business days.
          </p>
        ) : null}
        {state === "error" ? (
          <p className="text-sm text-[color:var(--danger)]">
            Something went wrong. Please email hello@mirakoval.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
