import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactHomeSection() {
  return (
    <section id="contact" className="py-18 md:py-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl">Contact</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Tell me what you are building and where you need support. I&apos;ll
            reply with the next best step.
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Typical response time: 1-2 business days.
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Email: hello@mariia.desiigns
          </p>
        </div>
        <Card className="p-6 md:p-8">
          <ContactForm />
        </Card>
      </Container>
    </section>
  );
}
