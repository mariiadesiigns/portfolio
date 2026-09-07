// Edit homepage copy, placeholder testimonials, and destinations here.
export const homepageContact = {
  email: "hey@mariia.io",
  subject: "Let’s create something together",
  // Add your Cal.com booking URL to enable a secondary booking button.
  bookingUrl: "",
  behance: "https://www.behance.net/mariiia",
  instagram: "https://www.instagram.com/mariia.desiigns/",
  linkedin: "https://www.linkedin.com/in/mariia-baranska/",
};

export const featuredSlides = [
  {
    image: "/homepage/showcase/lumi-lifestyle-4k.png",
    background: "#d6d2cb",
    title: "Lumi Wallet lifestyle",
    alt: "Lumi Wallet identity displayed on a tablet and phone in a warm wood interior",
  },
  {
    image: "/homepage/showcase/dreamers-social.webp",
    background: "#d8edff",
    title: "Dreamers social",
    alt: "Dreamers social media identity on a phone",
  },
  {
    image: "/homepage/showcase/beautech-website.webp",
    background: "#e2e3e3",
    title: "BeauTech website",
    alt: "BeauTech aircraft engine leasing website on a laptop",
  },
  {
    image: "/homepage/showcase/lumi-identity.webp",
    background: "#343534",
    title: "Lumi Wallet",
    alt: "Lumi Wallet stationery with orange and yellow brand details",
  },
  {
    image: "/homepage/showcase/beautech-stationery.webp",
    background: "#232424",
    title: "BeauTech stationery",
    alt: "BeauTech engine solutions booklet and business cards",
  },
  {
    image: "/homepage/showcase/dreamers-event.webp",
    background: "#080f14",
    title: "Dreamers event",
    alt: "Dreamers visual identity on an event screen",
  },
  {
    image: "/homepage/showcase/lyra-campaign.webp",
    background: "#303b3e",
    title: "Lyra campaign",
    alt: "Lyra jewellery campaign on a station billboard",
  },
];

export const homepageProjects = [
  {
    title: "BeauTech",
    category: "Design Partner",
    description: "Brand direction · Website · Campaigns",
    image: "/homepage/beautech-preview.webp",
    href: "/beautech",
    status: "View case study",
  },
  {
    title: "Dreamers",
    category: "Brand Identity",
    description: "Brand strategy · Visual identity",
    image: "/homepage/dreamers-preview.webp",
    href: "/dreamers",
    status: "View case study",
  },
];

export const homepageServices = [
  {
    title: "Your design partner",
    label: "Subscription based",
    type: "partner",
    description:
      "One creative partner for your whole brand. From a full rebrand or a new website to the everyday design that keeps your brand feeling right across all touchpoints.",
    bestFor: "Best for teams and founders who want big changes.",
    includes: [
      "Brand identities & complete rebrands",
      "Web design & digital experiences",
      "Creative direction for launches & big projects",
      "Campaigns, social media & print",
      "Animation & video editing",
      "Ongoing design support & brand rollout",
    ],
    action: "Let’s work together",
    subject: "An ongoing design partnership",
  },
  {
    title: "Brand identity",
    label: "A focused project",
    type: "identity",
    description:
      "A distinctive visual world, built around what makes you different. Everything your brand needs to show up with clarity and confidence.",
    bestFor: "Best for brands ready to launch or define a new direction.",
    includes: [
      "Brand discovery & visual strategy",
      "Logo & visual identity system",
      "Colour, typography & art direction",
      "Brand applications across key touchpoints",
      "Practical guidelines & ready-to-use files",
    ],
    action: "Build your brand",
    subject: "A brand identity project",
  },
] as const;

// Editable facts for the portrait section.
export const homepageAbout = {
  worldwide: "Working worldwide",
  partner: {
    title: "A creative partner",
    text: "Working closely with founders and teams.",
  },
  experience: { years: "3", label: "years of experience" },
};

// Client testimonials condensed from supplied feedback.
export const homepageTestimonials = [
  {
    quote:
      "From brand guidelines to presentations and marketing materials, Mariia has made BeauTech feel consistent and instantly recognisable. She understands the brief quickly and is someone we can truly rely on. A pleasure to work with.",
    name: "Ashvin Sivajothi",
    role: "Director Global Communications and Marketing, BeauTech",
    initials: "AS",
    photo: "/homepage/testimonials/ashvin-sivajothi.png",
  },
  {
    quote:
      "From Google Ads creatives and social visuals to 30-page reports, Mariia just gets it. I can come with a concept instead of a huge brief—she thinks about business goals and user experience, not just the design. Working together is super easy.",
    name: "Dariana Lysenko",
    role: "Leading marketing, GetGenAI",
    initials: "DL",
    photo: "/homepage/testimonials/dariana-lysenko.jpeg",
  },
  {
    quote:
      "Mariia designed the Scatto website, and working together felt smooth from start to finish. Communication was clear, and she really took the time to understand the details. I’d absolutely recommend her.",
    name: "Andrew De Felice Murrie",
    role: "Founder, Eitodos Digital Marketing Agency",
    initials: "AM",
    photo: "/homepage/testimonials/andrew-de-felice-murrie.jpg",
  },
  {
    quote:
      "Mariia redesigned my LinkedIn banner and featured section as part of my personal brand design. She works fast and pays great attention to detail. She went beyond my expectations and kept communication smooth and effective.",
    name: "Beatrice Vladut",
    role: "Founder, Founder Growth & B Branded",
    initials: "BV",
    photo: "/homepage/testimonials/beatrice-vladut.png",
  },
];

export function projectEmail(subject = homepageContact.subject) {
  return `mailto:${homepageContact.email}?subject=${encodeURIComponent(subject)}`;
}
