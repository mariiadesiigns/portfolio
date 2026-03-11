import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { testimonials, trustLogos } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-[color:var(--line)] py-18 md:py-24">
      <Container>
        <p className="mb-8 max-w-2xl font-serif text-3xl md:text-4xl">
          Trusted by companies and founders who care about clarity.
        </p>
        <div className="mb-10 flex flex-wrap gap-x-7 gap-y-3 text-sm uppercase tracking-[0.12em] text-[color:var(--muted)]">
          {trustLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-5">
              <p className="text-sm leading-relaxed">"{item.quote}"</p>
              <p className="mt-5 text-xs uppercase tracking-[0.1em] text-[color:var(--muted)]">
                {item.name} / {item.role}, {item.company}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
