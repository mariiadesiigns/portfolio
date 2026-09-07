import { Container } from "@/components/layout/container";

const pillars = [
  {
    num: "01",
    label: "What is already there",
    text: "The idea, the people, the mood, the small details, and the parts of the brand that should not get lost."
  },
  {
    num: "02",
    label: "A visual direction",
    text: "I turn those details into a language of type, color, image, layout, and art direction that feels natural to the brand."
  },
  {
    num: "03",
    label: "Everyday use",
    text: "The identity becomes something the team can actually use for launches, content, decks, packaging, and daily decisions."
  }
];

export function ApproachSection() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--soft)] py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--accent)]">
              How it usually unfolds
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Before it looks beautiful, it needs to feel true.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
              I like to begin with what is already there: the idea, the people,
              the mood, the small details. Then I turn it into a visual
              direction that feels natural and useful.
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
              A good identity should make decisions easier, not add more noise.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
