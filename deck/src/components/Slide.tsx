import type { ReactNode } from "react";
import Notes from "./Notes";

type Theme = "paper" | "dark" | "accent";
type Align = "top" | "between" | "center";

interface SlideProps {
  /** Mirrors the handoff's data-label; surfaces in Reveal's slide index. */
  label: string;
  notes: string;
  theme?: Theme;
  align?: Align;
  className?: string;
  children: ReactNode;
}

const ALIGN: Record<Align, string> = {
  top: "",
  between: " slide--between",
  center: " slide--center",
};

export default function Slide({
  label,
  notes,
  theme = "paper",
  align = "top",
  className,
  children,
}: SlideProps) {
  const classes = `slide slide--${theme}${ALIGN[align]}${className ? ` ${className}` : ""}`;

  // Reveal controls the <section> (it sets `display` on the active slide and
  // would override the shell's flex column). Layout therefore lives on an inner
  // element that Reveal never touches.
  return (
    <section data-label={label}>
      <div className={classes}>{children}</div>
      <Notes>{notes}</Notes>
    </section>
  );
}
