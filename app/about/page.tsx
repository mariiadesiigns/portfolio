import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mira Koval, a brand and graphic designer creating story-led identities."
};

const principles = [
  "Strategy before style",
  "Clarity over trend",
  "Systems that scale with your business"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        description="I help founders and modern brands articulate who they are and express it through intentional design."
      />
      <section className="py-14 md:py-18">
        <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <article className="space-y-6 text-base leading-relaxed text-[color:var(--muted)]">
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

          <div className="space-y-5">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
                Principles
              </p>
              <ul className="mt-4 grid gap-2 text-sm">
                {principles.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
                Short timeline
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                2019: Independent design practice
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                2022: Shifted fully into brand identity systems
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                2026: Partnering with founders and teams globally
              </p>
            </Card>
          </div>
        </Container>
      </section>
      <section className="pb-18">
        <Container>
          <Card className="flex flex-col gap-5 bg-[color:var(--soft)] p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="font-serif text-3xl">Let&apos;s build your brand story.</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                If your brand has outgrown your current visuals, I can help you
                realign strategy and design.
              </p>
            </div>
            <Link href="/contact">
              <Button>Contact me</Button>
            </Link>
          </Card>
        </Container>
      </section>
    </>
  );
}
