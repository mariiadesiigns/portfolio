import { playgroundMarks, playgroundPrints } from "@/content/playground";
import type { CanvasObject } from "./use-playground";

export function createInitialObjects(): CanvasObject[] {
  return [
    ...playgroundPrints.map(print => ({ id: print.id, kind: "image" as const, x: 0, y: 0 })),
    ...playgroundMarks.map(mark => ({
      id: mark.id,
      kind: "note" as const,
      x: 0,
      y: 0,
      text: mark.text,
    })),
    { id: "intro", kind: "intro" as const, x: 0, y: 0 },
  ];
}
