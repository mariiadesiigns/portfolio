import { FeaturedShowcase } from "@/components/homepage/featured-showcase";
import { HomeSelectedWork } from "@/components/homepage/selected-work";
import { ScrollManifesto } from "@/components/homepage/scroll-manifesto";
import { HomeServices } from "@/components/homepage/services";
import { HomeAbout } from "@/components/homepage/about";
import { HomeTestimonials } from "@/components/homepage/testimonials";
import { HomePlayground } from "@/components/homepage/playground";
import { HomeContact } from "@/components/homepage/contact";
import {
  homeAvailability,
  homeHero,
  homeHeroEyebrow,
  homeHeroTitle,
  homePage,
} from "@/components/homepage/classes";

export default function HomePage() {
  return (
    <div id="homepage" data-homepage className={homePage}>
      <section className={homeHero} id="intro">
        <p className={homeHeroEyebrow}>Brand designer & Creative Partner</p>
        <h1 className={homeHeroTitle}>
          <span className="block whitespace-nowrap">Design that speaks for</span>
          <span className="block whitespace-nowrap">
            your brand <span className="text-inherit">before you do.</span>
          </span>
        </h1>
        <a href="#contact" className={homeAvailability}>
          <i />
          Available for work
        </a>
      </section>
      <FeaturedShowcase />
      <HomeSelectedWork />
      <ScrollManifesto />
      <HomeServices />
      <HomeAbout />
      <HomeTestimonials />
      <HomePlayground />
      <HomeContact />
    </div>
  );
}
