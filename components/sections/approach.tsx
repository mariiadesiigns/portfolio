import { Container } from "@/components/layout/container";

export function ApproachSection() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--soft)] py-18 md:py-24">
      <Container className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <h2 className="font-serif text-3xl leading-tight md:text-5xl">
          Every strong brand starts with a clear story
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-[color:var(--muted)]">
          <p>
            Many brands start with visuals. But without meaning behind them,
            design becomes decoration.
          </p>
          <p>I work differently. Before building the visual identity, we define:</p>
          <ul className="grid gap-2 text-[color:var(--ink)]">
            <li>the story behind the brand</li>
            <li>the values it stands for</li>
            <li>the audience it speaks to</li>
          </ul>
          <p>From there, the visual language becomes intentional.</p>
        </div>
      </Container>
    </section>
  );
}
