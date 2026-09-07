import { ArrowRight, Check, Layers3, PenTool } from "lucide-react";
import { homepageServices, projectEmail } from "@/content/homepage";
import {
  homeContainer,
  homeSection,
  homeSectionHeading,
  homeSectionTitle,
  serviceCard,
  serviceCta,
  serviceDescription,
  serviceDetails,
  serviceFit,
  serviceGrid,
  serviceIcon,
  serviceLabel,
  serviceTopline,
} from "./classes";

export function HomeServices() {
  return (
    <section className={homeSection} id="services">
      <div className={homeContainer}>
        <div className={homeSectionHeading}>
          <h2 className={homeSectionTitle}>Ways to work together</h2>
        </div>
        <div className={serviceGrid}>
          {homepageServices.map((service) => {
            const Icon = service.type === "partner" ? Layers3 : PenTool;
            return (
              <article className={serviceCard} key={service.type} data-service={service.type}>
                <div className={serviceTopline}>
                  <span className={serviceIcon}>
                    <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className={serviceLabel}>{service.label}</span>
                </div>
                <h3>{service.title}</h3>
                <div>
                  <p className={serviceDescription}>{service.description}</p>
                  <p className={serviceFit}>{service.bestFor}</p>
                </div>
                <div className={serviceDetails}>
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
                  className={serviceCta}
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
