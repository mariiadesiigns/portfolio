import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a branding inquiry with project goals, budget range, and timeline."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Tell me what you are building and where you need support. I&apos;ll reply with the next best step."
      />
      <section className="py-14 md:py-18">
        <Container className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4 text-sm text-[color:var(--muted)]">
            <p>
              Best for founders, experts, and growing teams ready to invest in an
              intentional brand identity.
            </p>
            <p>Typical response time: 1-2 business days.</p>
            <p>Email: hello@mirakoval.com</p>
          </div>
          <Card className="p-6 md:p-8">
            <ContactForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
