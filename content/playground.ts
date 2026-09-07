export type PlaygroundPrint = {
  id: string;
  src: string;
  alt: string;
};

export const playgroundIntro = {
  title: "Playground",
  description: "More work, side projects & random explorations",
};

export const playgroundPrints: PlaygroundPrint[] = [
  {
    id: "bvj-cards",
    src: "/playground/bvj-cards.png",
    alt: "BVJ Engine Holdings business cards over an airplane wing at dusk",
  },
  {
    id: "bvj-welcome",
    src: "/playground/bvj-welcome.jpg",
    alt: "BVJ welcome box with orange geometric tape",
  },
  {
    id: "lyra-campaign",
    src: "/playground/lyra-campaign.jpg",
    alt: "Lyra jewellery campaign on a station lightbox",
  },
  {
    id: "lyra-packaging",
    src: "/playground/bloom-menu.jpg",
    alt: "Bloom Cafe menu on a dusty-pink card over wildflowers",
  },
  {
    id: "bloom-menu",
    src: "/playground/lyra-packaging.jpg",
    alt: "Lyra slate-blue jewellery boxes with a burgundy star mark",
  },
  {
    id: "bloom-identity",
    src: "/playground/bloom-identity.jpg",
    alt: "Bloom Cafe wordmark over a pink lily",
  },
];
