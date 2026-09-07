import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { mainServices } from "@/content/services";

export function ServicesPreviewSection() {
  return (
    <section className="py-18 md:py-24" id="services">
      <Container>
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.9fr] md:items-end">
          <h2 className="font-serif text-3xl md:text-5xl">Ways to work</h2>
          <p className="max-w-xl text-sm leading-relaxed text-[color:var(--muted)] md:justify-self-end md:text-base">
            Quiet, useful design support for the moments when a brand needs a
            clear visual world, or someone close to keep the visual side moving.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {mainServices.map((service) => (
            <Card key={service.title} className="p-6">
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                For: {service.bestFor.join(", ")}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">
                {service.result}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
