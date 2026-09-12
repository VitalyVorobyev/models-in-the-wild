import type { CSSProperties, ReactNode } from "react";

interface GridProps {
  cols: number;
  gap?: number;
  /** Stretch the grid to fill the remaining slide height. */
  fill?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Grid({ cols, gap = 24, fill = false, style, children }: GridProps) {
  const vars = { "--cols": cols, "--grid-gap": `${gap}px`, ...style } as CSSProperties;

  return (
    <div className={`grid${fill ? " grid--fill" : ""}`} style={vars}>
      {children}
    </div>
  );
}
