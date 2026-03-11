import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addOns, mainServices, processSteps } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity services for founders and businesses, plus strategic brand design add-ons."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="I design intentional brand identities that connect your story, positioning, and visual presence."
      />
      <section className="py-14 md:py-18">
        <Container className="space-y-14">
          <div className="grid gap-6 md:grid-cols-2">
            {mainServices.map((service) => (
              <Card key={service.title} className="p-6">
                <h2 className="font-serif text-3xl">{service.title}</h2>
                <p className="mt-4 text-sm text-[color:var(--muted)]">
                  Best for: {service.bestFor.join(", ")}
                </p>
                <ul className="mt-5 grid gap-2 text-sm">
                  {service.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-[color:var(--line)] pt-4 text-sm text-[color:var(--muted)]">
                  {service.result}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-5 border-t border-[color:var(--line)] pt-10">
            <h2 className="font-serif text-3xl">Add-ons</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {addOns.map((item) => (
                <Card key={item} className="p-4 text-sm">
                  {item}
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-5 border-t border-[color:var(--line)] pt-10">
            <h2 className="font-serif text-3xl">Process</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={step.title} className="p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{step.body}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-[color:var(--ink)] p-7 text-[color:var(--paper)] md:p-10">
            <h2 className="font-serif text-4xl">Ready to shape your brand?</h2>
            <p className="mt-3 max-w-xl text-sm text-[color:var(--paper)]/85">
              Share your direction, timeline, and goals. I&apos;ll recommend the best
              path based on your stage.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button className="bg-[color:var(--paper)] text-[color:var(--ink)] hover:bg-[color:var(--paper)]/90">
                Start an inquiry
              </Button>
            </Link>
          </Card>
        </Container>
      </section>
    </>
  );
}
