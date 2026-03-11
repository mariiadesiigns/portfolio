import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)] py-20 md:py-30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(197,168,132,0.18),transparent_40%)]" />
      <Container className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Brand & Graphic Designer
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            I build story-led brand identities for founders and the brands they build.
          </h1>
        </div>
        <div className="reveal space-y-7 md:pb-3">
          <p className="text-base leading-relaxed text-[color:var(--muted)]">
            For people building something meaningful and ready for a brand that
            feels clear, intentional, and unmistakably theirs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work">
              <Button>View Work</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Start a Project</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
