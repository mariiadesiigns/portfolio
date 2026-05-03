import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { testimonials, trustLogos } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-[color:var(--line)] py-24 md:py-32">
      <Container>
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl font-serif text-3xl font-bold leading-tight md:text-4xl">
            Brands I&apos;ve helped look the part — and stay consistent.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:pb-1">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col justify-between p-7">
              <div>
                <span
                  className="block font-serif text-4xl font-bold leading-none text-[color:var(--accent)] opacity-30 select-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]">
                  {item.quote}
                </p>
              </div>
              <div className="mt-7 border-t border-[color:var(--line)] pt-5">
                <p className="text-sm font-semibold text-[color:var(--ink)]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-[color:var(--muted)]">
                  {item.role}, {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
