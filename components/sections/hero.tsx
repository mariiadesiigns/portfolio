import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-b border-[color:var(--line)] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,0,0,0.03),transparent_42%)]" />
      <Container className="relative grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-end">
        <div className="reveal max-w-3xl">
          <p className="text-sm uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Brand & Graphic Designer
          </p>
          <h1 className="mt-8 max-w-2xl text-3xl leading-[1.2] md:text-5xl">
            Design with feeling.
            <br />
            Visual identities and art direction for brands that want to feel more like themselves.
          </h1>
        </div>
        <div className="reveal max-w-md space-y-9 md:justify-self-end md:pb-5">
          <p className="text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
            I&apos;m Mariia, a brand designer. I work closely with founders and
            teams to shape identities, campaigns, and everyday brand materials
            with care, structure, and a strong sense of feeling.
          </p>
          <div className="flex flex-wrap gap-4">
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
