import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "northline-founder-brand",
    title: "Northline",
    category: "Founder",
    client: "Executive Coach",
    summary:
      "A personal brand identity designed around authority, trust, and editorial clarity for thought-leadership content.",
    image: "/work-1.svg",
    services: ["Strategy", "Visual Identity", "Social Templates"]
  },
  {
    slug: "kindred-labs",
    title: "Kindred Labs",
    category: "Business",
    client: "HealthTech Startup",
    summary:
      "A scalable visual language for a growing product team, balancing warmth with clinical precision.",
    image: "/work-2.svg",
    services: ["Brand Story", "Identity System", "Guidelines"]
  },
  {
    slug: "alba-studio",
    title: "Alba Studio",
    category: "Founder",
    client: "Creator & Educator",
    summary:
      "A story-led personal identity focused on consistency across digital products, newsletter, and workshops.",
    image: "/work-3.svg",
    services: ["Positioning", "Typography System", "Templates"]
  },
  {
    slug: "vertex-finance",
    title: "Vertex",
    category: "Business",
    client: "Fintech Company",
    summary:
      "A rebrand built for long-term growth with a sharper narrative and a modular identity system.",
    image: "/work-4.svg",
    services: ["Rebranding", "Graphic Language", "Brand Assets"]
  }
];
