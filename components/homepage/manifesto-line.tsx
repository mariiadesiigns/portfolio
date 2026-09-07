import { useId } from "react";
import styles from "./homepage.module.css";

// Vector 4, exported from Desktop 13. Scroll progress draws the original path.
export function ManifestoLine() {
  const gradientId = useId();
  return (
    <svg className={styles.manifestoLine} viewBox="0 0 588.135 495.262" fill="none" aria-hidden="true">
      <path
        data-manifesto-line
        d="M577.761 2.49842C371.761 9.83175 -31.2386 36.5984 4.76136 84.9984C49.7614 145.498 425.761 9.83258 454.261 84.9984C479.546 151.684 199.761 146.998 224.761 217.498C249.761 287.998 530.261 110.498 564.261 194.998C598.261 279.498 427.261 268.498 412.761 288.498C398.261 308.498 630.761 270.998 577.761 347.498C524.761 423.998 112.261 238.498 95.7613 297.498C79.2613 356.498 336.261 342.998 379.761 387.498C423.261 431.998 130.761 350.498 128.761 400.998C126.761 451.498 236.761 409.498 257.761 432.498C274.561 450.898 177.095 475.498 139.761 492.998"
        pathLength="1"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeMiterlimit="4.13936"
        strokeDasharray="1 1"
      />
      <defs>
        <linearGradient id={gradientId} x1="100.761" y1="493.498" x2="420.847" y2="-88.2411" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.06" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
      </defs>
    </svg>
  );
}
