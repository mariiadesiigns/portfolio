import { Container } from "@/components/layout/container";

const pillars = [
  {
    num: "01",
    label: "Brand Story",
    text: "The narrative behind the brand — where it came from, where it's going, and why it exists."
  },
  {
    num: "02",
    label: "Core Values",
    text: "The principles that shape every decision, message, and design choice you make."
  },
  {
    num: "03",
    label: "Target Audience",
    text: "The specific people the brand exists to serve and the language that speaks to them."
  }
];

export function ApproachSection() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--soft)] py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
              The Approach
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Every strong brand starts with a clear story
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
              Many brands start with visuals. But without meaning behind them,
              design becomes decoration. I work differently.
            </p>
          </div>

          <div className="flex flex-col">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.num}
                className={`flex gap-6 py-7 ${i < pillars.length - 1 ? "border-b border-[color:var(--line)]" : ""}`}
              >
                <span className="mt-0.5 font-serif text-xs font-bold text-[color:var(--accent)]">
                  {pillar.num}
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--ink)]">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
            <p className="mt-7 text-sm text-[color:var(--muted)]">
              From there, the visual language becomes intentional.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
