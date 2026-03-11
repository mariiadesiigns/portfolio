import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected branding projects for founders, startups, and intentional businesses."
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="Work"
        description="A selection of brand identity projects built for founders and growing businesses. Each engagement starts with story, strategy, and purpose."
      />
      <section className="py-14 md:py-18">
        <Container>
          <WorkGrid />
        </Container>
      </section>
    </>
  );
}
