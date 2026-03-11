import type { Service } from "@/types";

export const mainServices: Service[] = [
  {
    title: "Brand Identity for Founders",
    bestFor: ["Coaches", "Experts", "Creators building a personal brand"],
    includes: [
      "Brand strategy foundation",
      "Visual identity",
      "Logo and typography system",
      "Brand elements",
      "Social media templates",
      "Brand guidelines"
    ],
    result: "A personal brand that feels clear, intentional and recognizable."
  },
  {
    title: "Brand Identity for Businesses",
    bestFor: ["Startups", "Modern companies", "Brands building long-term positioning"],
    includes: [
      "Brand story and positioning",
      "Visual identity system",
      "Typography and graphic language",
      "Brand assets",
      "Guidelines"
    ],
    result: "A scalable brand identity that supports growth."
  }
];

export const addOns = [
  "Art Direction",
  "Rebranding",
  "Social Media Design",
  "Email Design",
  "Merch Development"
];

export const processSteps = [
  {
    title: "Story and Strategy",
    body: "We clarify what your brand stands for, what it needs to communicate, and the people it is speaking to."
  },
  {
    title: "Identity Design",
    body: "I translate your positioning into a visual system with typography, logo direction, color, and brand language."
  },
  {
    title: "Rollout and Support",
    body: "You leave with clear guidelines and practical assets for launch, content, and everyday brand consistency."
  }
];
