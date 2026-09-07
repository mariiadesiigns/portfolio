import { FeaturedShowcase } from "@/components/homepage/featured-showcase";
import { HomeSelectedWork } from "@/components/homepage/selected-work";
import { ScrollManifesto } from "@/components/homepage/scroll-manifesto";
import { HomeServices } from "@/components/homepage/services";
import { HomeAbout } from "@/components/homepage/about";
import { HomeTestimonials } from "@/components/homepage/testimonials";
import { HomePlayground } from "@/components/homepage/playground";
import { HomeContact } from "@/components/homepage/contact";
import styles from "@/components/homepage/homepage.module.css";

export default function HomePage() {
  return (
    <div id="homepage" className={styles.homepage}>
      <section className={styles.hero} id="intro">
        <p className={styles.heroEyebrow}>Brand designer & Creative Partner</p>
        <h1>
          <span className={styles.heroLine}>Design that speaks for</span>
          <span className={styles.heroLine}>
            your brand <span className={styles.heroAccent}>before you do.</span>
          </span>
        </h1>
        <a href="#contact" className={styles.availability}>
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
