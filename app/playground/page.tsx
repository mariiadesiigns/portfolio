import type { Metadata } from "next";
import { PlaygroundField } from "@/components/playground/playground-field";
import { playgroundIntro } from "@/content/playground";

export const metadata: Metadata = {
  title: "Playground",
  description: playgroundIntro.description,
};

export default function PlaygroundPage() {
  return <PlaygroundField />;
}
