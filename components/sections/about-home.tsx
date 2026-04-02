import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";

const principles = [
  "Strategy before style",
  "Clarity over trend",
  "Systems that scale with your business"
];

export function AboutHomeSection() {
  return (
    <section id="about" className="border-y border-[color:var(--line)] py-18 md:py-24">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-6 text-base leading-relaxed text-[color:var(--muted)]">
          <h2 className="text-3xl text-[color:var(--ink)] md:text-5xl">About</h2>
          <p>
            I started in editorial and visual design, where every detail had to
            support a narrative. That mindset still shapes how I build brands
            today.
          </p>
          <p>
            I believe branding is not decoration. It is the structure that helps
            people understand what you stand for, why you matter, and why they
            should trust you.
          </p>
          <p>
            I do this work because I care about helping thoughtful founders show
            up with clarity. When the story is clear, confidence follows, and
            growth becomes more intentional.
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
