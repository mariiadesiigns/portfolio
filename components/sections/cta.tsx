import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--paper)] py-18 md:py-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Building something intentional?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[color:var(--muted)] md:text-base">
            Let&apos;s shape a brand identity that tells the right story and supports
            where your business is going next.
          </p>
        </div>
        <Link href="/contact">
          <Button>
            Book an Inquiry
          </Button>
        </Link>
      </Container>
    </section>
  );
}
