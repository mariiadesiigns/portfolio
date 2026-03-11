import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-[color:var(--ink)] py-18 text-[color:var(--paper)] md:py-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Building something intentional?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[color:var(--paper)]/80 md:text-base">
            Let&apos;s shape a brand identity that tells the right story and supports
            where your business is going next.
          </p>
        </div>
        <Link href="/contact">
          <Button className="bg-[color:var(--paper)] text-[color:var(--ink)] hover:bg-[color:var(--paper)]/90">
            Book an Inquiry
          </Button>
        </Link>
      </Container>
    </section>
  );
}
