import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { projects } from "@/content/projects";

export function SelectedWorkSection() {
  return (
    <section className="py-18 md:py-24" id="work">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-5xl">Selected Work</h2>
          <Link href="/work" className="text-sm hover:text-[color:var(--accent)]">
            See all projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="block">
              <Card className="group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
                    {project.category} / {project.client}
                  </p>
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                    {project.summary}
                  </p>
                  <p className="pt-1 text-xs uppercase tracking-[0.1em] text-[color:var(--muted)]">
                    View case study
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
