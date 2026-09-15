export type ResizeCorner = "nw" | "ne" | "sw" | "se";
export type ImageBounds = { x: number; y: number; width: number; height: number };

export function resizeImage(bounds: ImageBounds, corner: ResizeCorner, dx: number, dy: number): ImageBounds {
  const ratio = bounds.height / bounds.width;
  const fromLeft = corner.endsWith("w");
  const fromTop = corner.startsWith("n");
  const widthChange = ((fromLeft ? -dx : dx) + (fromTop ? -dy : dy) * ratio) / (1 + ratio * ratio);
  const minWidth = 24 / Math.min(1, ratio);
  const maxWidth = 3000 / Math.max(1, ratio);
  const width = Math.max(minWidth, Math.min(maxWidth, bounds.width + widthChange));
  const height = width * ratio;
  return {
    x: bounds.x + (fromLeft ? bounds.width - width : 0),
    y: bounds.y + (fromTop ? bounds.height - height : 0),
    width,
    height,
  };
}
