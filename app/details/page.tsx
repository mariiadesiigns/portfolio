import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { AboutHomeSection } from "@/components/sections/about-home";

export const metadata: Metadata = {
  title: "Services & About",
  description:
    "Services and brand story details for working with mariia.desiigns."
};

export default function DetailsPage() {
  return (
    <>
      <PageHero
        title="Details"
        description="Explore services and learn more about my approach."
      />
      <ServicesPreviewSection />
      <AboutHomeSection />
    </>
  );
}
