import { Container } from "@/components/layout/container";

export function PageHero({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-[color:var(--line)] py-18 md:py-24">
      <Container>
        <h1 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base text-[color:var(--muted)] md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
