import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { mainServices } from "@/content/services";

export function ServicesPreviewSection() {
  return (
    <section className="py-18 md:py-24" id="services">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-5xl">Services</h2>
          <Link href="/services" className="text-sm hover:text-[color:var(--accent)]">
            View details
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {mainServices.map((service) => (
            <Card key={service.title} className="p-6">
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Best for: {service.bestFor.join(", ")}
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
