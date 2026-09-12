/*
 * Ported from vitavision/src/components/shared/VitavisionLogo.tsx.
 *
 * Static only: the original's animated variant is the sole reason that file
 * pulls in framer-motion, and the deck has no other need for it. Geometry was
 * extracted there from vitavision-logo_v2_opt.svg.
 */

const V_OUTER =
  "m102.8 113.4 15.6-27.6h34.7l-40 71s-.6 1.3-3.3 4.7c-1.6 2-4.3 3-7 3q-4.2 0-7-2.9c-1.6-1.7-4-6.2-4-6.2L52.4 85.8H87z";
const V_INNER = "m102.6 112.3 28.2-15.1-28 49.5-28-49.5Z";

interface VitavisionLogoProps {
  /** "full" renders all elements; "mark" thickens strokes for small sizes. */
  variant?: "full" | "mark";
  className?: string;
}

export default function VitavisionLogo({ variant = "mark", className }: VitavisionLogoProps) {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: variant === "mark" ? 5.4 : 4.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 107.9 82.9"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      aria-hidden="true"
      className={className}
    >
      <g transform="translate(-48.8 -83.7)">
        <path d={V_OUTER} {...strokeProps} />
        <path d={V_INNER} {...strokeProps} />
        {/* Halo punches the slide background back through the mark. */}
        <circle cx={102.7} cy={112} r={11.8} fill="var(--dark)" />
        <circle cx={102.6} cy={112} r={8.1} fill="var(--brand)" />
      </g>
    </svg>
  );
}
