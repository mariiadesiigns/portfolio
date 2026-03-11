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
