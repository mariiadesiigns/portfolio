// Laptop opens at 111% with the origin slightly left of centre so heroes bleed.
// Tablet and phone keep the same origin language but a tighter zoom so the
// clusters still read as one composition instead of floating off-frame.
export const defaultCanvasOrigin = { x: 0.48, y: 0.5 };
export const defaultCanvasZoom = 1.11;

export function getDefaultView(width: number, height: number) {
  const phone = width <= 600;
  const short = height <= 520 && width > 500;
  const smallTablet = width > 600 && width <= 900;
  const tablet = width > 900 && width <= 1200;
  const origin = phone ? { x: 0.5, y: 0.44 } : short ? { x: 0.5, y: 0.5 } : defaultCanvasOrigin;
  const zoom = phone ? 0.9 : short ? 0.72 : smallTablet ? 1 : tablet ? 1.05 : defaultCanvasZoom;
  return { x: width * origin.x, y: height * origin.y, zoom };
}
