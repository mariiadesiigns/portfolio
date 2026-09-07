import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--paper)] py-18 md:py-24">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Building something with a feeling to protect?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[color:var(--muted)] md:text-base">
            Tell me what you are making, what feels important, and where the
            brand needs to go next. We can shape the visual side from there.
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
