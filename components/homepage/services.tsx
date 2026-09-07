import { ArrowRight, Check, Layers3, PenTool } from "lucide-react";
import { homepageServices, projectEmail } from "@/content/homepage";
import styles from "./homepage.module.css";

export function HomeServices() {
  return (
    <section className={`${styles.section} ${styles.services}`} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2>Ways to work together</h2>
        </div>
        <div className={styles.serviceGrid}>
          {homepageServices.map((service) => {
            const Icon = service.type === "partner" ? Layers3 : PenTool;
            return (
              <article className={styles.serviceCard} key={service.type} data-service={service.type}>
                <div className={styles.serviceTopline}>
                  <span className={styles.serviceIcon}>
                    <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className={styles.serviceLabel}>{service.label}</span>
                </div>
                <h3>{service.title}</h3>
                <div className={styles.serviceIntro}>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <p className={styles.serviceFit}>{service.bestFor}</p>
                </div>
                <div className={styles.serviceDetails}>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>
                        <Check size={15} strokeWidth={1.6} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className={styles.serviceCta}
                  href={projectEmail(service.subject)}
                >
                  {service.action}
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
