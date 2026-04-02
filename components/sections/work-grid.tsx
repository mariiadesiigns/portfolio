"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

const filters = ["All", "Founder", "Business"] as const;

export function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3" aria-label="Project filters">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={active === filter ? "primary" : "outline"}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="block">
            <Card className="group overflow-hidden">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} brand project`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--muted)]">
                  {project.category} / {project.client}
                </p>
                <h3 className="font-serif text-2xl">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.summary}
                </p>
                <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--muted)]">
                  {project.services.join(" • ")}
                </p>
                <p className="pt-1 text-xs uppercase tracking-[0.1em] text-[color:var(--muted)]">
                  View case study
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
