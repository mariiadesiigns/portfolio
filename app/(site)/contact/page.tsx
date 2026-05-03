import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactHomeSection } from "@/components/sections/contact-home";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send your branding inquiry to mariia.desiigns."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Tell me what you are building and where you need support."
      />
      <ContactHomeSection />
    </>
  );
}
