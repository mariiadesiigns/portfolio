import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Honest notes on brand design and studio life, straight to your inbox.",
};

export default function NewsletterPage() {
  return (
    <Container>
      <div className="max-w-md py-16">
        <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
          Design thinking,<br />delivered.
        </h1>

        <p className="mt-5 text-base leading-relaxed text-[color:var(--muted)]">
          Once or twice a month — honest notes on branding, process, and
          building a design studio. No trends, no fluff.
        </p>

        <div className="mt-10">
          <NewsletterForm />
        </div>
      </div>
    </Container>
  );
}
