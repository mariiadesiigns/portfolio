import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";

const principles = [
  "Feeling before polish",
  "Clear systems, not overworked design",
  "Brand materials people can actually use"
];

export function AboutHomeSection() {
  return (
    <section id="about" className="border-y border-[color:var(--line)] py-18 md:py-24">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-6 text-base leading-relaxed text-[color:var(--muted)]">
          <h2 className="text-3xl text-[color:var(--ink)] md:text-5xl">
            A little about the way I see design
          </h2>
          <p>
            I care about the feeling of a brand, but also about whether people
            can actually use it. A good identity should make decisions easier.
            It should give the team a shared direction.
          </p>
          <p>
            My background is in editorial and visual design, where small choices
            carry a lot of meaning: a crop, a typeface, a rhythm, a quiet detail
            that makes something feel more considered.
          </p>
          <p>
            I bring that care into brand identities, art direction, and the
            materials a brand needs to show up clearly without feeling
            overworked.
          </p>
        </article>
        <Card className="h-fit p-6">
          <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
            Principles
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            {principles.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
