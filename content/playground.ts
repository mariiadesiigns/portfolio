export type PlaygroundPrint = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const playgroundIntro = {
  title: "Playground",
  description: "More work, side projects & random explorations",
  invitation: "Drag things around, draw your own lines,\nand be creative;)",
};

export const playgroundPrints: PlaygroundPrint[] = [
  {
    id: "bvj-cards",
    src: "/playground/bvj-cards-full.png",
    width: 1620,
    height: 2025,
    alt: "BVJ Engine Holdings business cards over an airplane wing at dusk"
  },
  {
    id: "bvj-welcome",
    src: "/playground/bvj-welcome.jpg",
    width: 853,
    height: 1024,
    alt: "BVJ welcome box with orange geometric tape",
  },
  {
    id: "lyra-campaign",
    src: "/playground/lyra-campaign.jpg",
    width: 853,
    height: 1024,
    alt: "Lyra jewellery campaign on a station lightbox",
  },
  {
    id: "bloom-menu",
    src: "/playground/bloom-menu.jpg",
    width: 853,
    height: 1024,
    alt: "Bloom Cafe menu on a dusty-pink card over wildflowers",
  },
  {
    id: "lyra-packaging",
    src: "/playground/lyra-packaging-full.png",
    width: 1620,
    height: 2025,
    alt: "Lyra slate-blue jewellery boxes with a burgundy star mark"
  },
  {
    id: "bloom-identity",
    src: "/playground/bloom-identity-full.png",
    width: 2160,
    height: 2700,
    alt: "Bloom Cafe wordmark over a pink lily"
  },
  {
    id: "bvj-logo-photo",
    src: "/playground/bvj-logo-photo.png",
    width: 1770,
    height: 1287,
    alt: "BVJ symbol over an airplane taking off at sunset",
  },
  {
    id: "bvj-logo",
    src: "/playground/bvj-logo.png",
    width: 1770,
    height: 1287,
    alt: "BVJ Engine Holdings logo in orange and white",
  },
  {
    id: "bvj-magazine",
    src: "/playground/bvj-magazine.png",
    width: 3021,
    height: 1757,
    alt: "BVJ aviation magazine editorial spread",
  },
  {
    id: "lumi-graph",
    src: "/playground/lumi-graph.png",
    width: 2880,
    height: 1620,
    alt: "Lumi Wallet orange and yellow graphics with a Bitcoin portfolio card",
  },
  {
    id: "lumi-phone",
    src: "/playground/lumi-phone.png",
    width: 2880,
    height: 1620,
    alt: "Lumi Wallet mobile portfolio interface",
  },
  {
    id: "lumi-app-icon",
    src: "/playground/lumi-app-icon.png",
    width: 2880,
    height: 1620,
    alt: "Lumi Wallet app icon on an iPhone home screen",
  },
  {
    id: "lumi-lifestyle",
    src: "/playground/lumi-lifestyle.jpg",
    width: 1024,
    height: 682,
    alt: "Woman with a Lumi Wallet tablet, phone and laptop",
  },
  {
    id: "lyra-cards",
    src: "/playground/lyra-cards-full.png",
    width: 1620,
    height: 2025,
    alt: "Lyra burgundy business cards and star seal on blue paper"
  },
  {
    id: "bloom-flowers",
    src: "/playground/bloom-flowers-full.png",
    width: 2160,
    height: 2700,
    alt: "Bloom Cafe pink identity card above a florist display"
  },
  {
    id: "ulis-launch",
    src: "/playground/ulis-launch-full.png",
    width: 1620,
    height: 2025,
    alt: "ULIS cabin launch announcement and forest campaign"
  },
  {
    id: "ulis-results",
    src: "/playground/ulis-results-full.png",
    width: 1620,
    height: 2025,
    alt: "ULIS cabin occupancy and hospitality campaign designs"
  },
  {
    id: "lyra-portrait",
    src: "/playground/lyra-portrait-full.png",
    width: 1620,
    height: 2025,
    alt: "Lyra jewellery portrait with a blue ocean study"
  },
  {
    id: "ulis-stories",
    src: "/playground/ulis-stories-full.png",
    width: 1620,
    height: 2025,
    alt: "ULIS investment story designs over deep green foliage"
  },
  {
    id: "ulis-forest",
    src: "/playground/ulis-forest-full.png",
    width: 1620,
    height: 2025,
    alt: "ULIS Investments identity over a sunlit mountain forest"
  },
];

export type PlaygroundMark = {
  id: string;
  kind: "note";
  text: string;
};

export const playgroundMarks: PlaygroundMark[] = [
  { id: "note-bvj", kind: "note", text: "BVJ Engine Holdings identity, a BeauTech × Jalux collaboration" },
  { id: "note-ulis", kind: "note", text: "ULIS Investments identity, full case study coming soon" },
  { id: "note-lyra", kind: "note", text: "Lyra, a minimalist jewellery brand concept" },
  { id: "note-bloom", kind: "note", text: "Bloom café, a bold concept pairing flowers with coffee" },
  { id: "note-lumi", kind: "note", text: "Lumi\nA concept for a crypto wallet app." },
];
