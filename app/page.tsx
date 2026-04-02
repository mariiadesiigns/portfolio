import { HeroSection } from "@/components/sections/hero";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { ApproachSection } from "@/components/sections/approach";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { AboutHomeSection } from "@/components/sections/about-home";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <ApproachSection />
      <ServicesPreviewSection />
      <AboutHomeSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
