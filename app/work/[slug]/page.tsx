import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { caseStudies } from "@/content/case-studies";
import { projects } from "@/content/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const caseStudy = caseStudies[slug];

  if (!project || !caseStudy) {
    return { title: "Case Study" };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const caseStudy = caseStudies[slug];

  if (!project || !caseStudy) {
    notFound();
  }

  const sections = [
    caseStudy.company,
    caseStudy.problem,
    caseStudy.impact,
    caseStudy.approach
  ];

  return (
    <>
      <section className="border-b border-[color:var(--line)] py-18 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
              Case Study / {project.title}
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">
              {caseStudy.heroTitle}
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[color:var(--muted)] md:justify-self-end">
            {caseStudy.heroSummary}
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container className="space-y-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-4 border-b border-[color:var(--line)] pb-8 md:grid-cols-[0.38fr_1fr]"
            >
              <h2 className="text-lg">{section.title}</h2>
              <p className="max-w-3xl text-base leading-relaxed text-[color:var(--muted)]">
                {section.body}
              </p>
            </article>
          ))}

          <article className="grid gap-4 border-b border-[color:var(--line)] pb-8 md:grid-cols-[0.38fr_1fr]">
            <h2 className="text-lg">{caseStudy.design.title}</h2>
            <div className="space-y-5">
              <p className="max-w-3xl text-base leading-relaxed text-[color:var(--muted)]">
                {caseStudy.design.body}
              </p>
              <ul className="grid gap-2 text-sm text-[color:var(--ink)]">
                {caseStudy.design.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="grid gap-4 md:grid-cols-[0.38fr_1fr]">
            <h2 className="text-lg">{caseStudy.outcome.title}</h2>
            <div className="space-y-5">
              <p className="max-w-3xl text-base leading-relaxed text-[color:var(--muted)]">
                {caseStudy.outcome.body}
              </p>
              <ul className="grid gap-2 text-sm text-[color:var(--ink)]">
                {caseStudy.outcome.results.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
