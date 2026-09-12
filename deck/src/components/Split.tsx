import type { ReactNode } from "react";

interface SplitProps {
  /** "even" = 50/50 (slides 5, 8, 22); "demo" = 5/7 (slide 10). */
  variant?: "even" | "demo";
  align?: "start" | "center";
  gap?: "wide" | "default";
  /** Stretch to the remaining slide height, as the handoff's full-slide grids do. */
  fill?: boolean;
  left: ReactNode;
  right: ReactNode;
}

export default function Split({
  variant = "even",
  align = "start",
  gap = "default",
  fill = false,
  left,
  right,
}: SplitProps) {
  const classes = [
    "split",
    variant === "demo" ? "split--demo" : "",
    align === "center" ? "split--center" : "",
    gap === "wide" ? "split--wide-gap" : "",
    fill ? "split--fill" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {left}
      {right}
    </div>
  );
}
