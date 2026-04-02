export type ProjectType = "Founder" | "Business";

export type Project = {
  slug: string;
  title: string;
  category: ProjectType;
  client: string;
  summary: string;
  image: string;
  services: string[];
};

export type CaseStudySection = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  heroTitle: string;
  heroSummary: string;
  company: CaseStudySection;
  problem: CaseStudySection;
  impact: CaseStudySection;
  approach: CaseStudySection;
  design: CaseStudySection & { deliverables: string[] };
  outcome: CaseStudySection & { results: string[] };
};

export type Service = {
  title: string;
  bestFor: string[];
  includes: string[];
  result: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
