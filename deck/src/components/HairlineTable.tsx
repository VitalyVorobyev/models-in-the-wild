import type { ReactNode } from "react";

/**
 * Slides 6 and 20 present rows as hairline rules rather than card boxes: a
 * strong top border, a hairline under every cell, no vertical chrome except
 * slide 6's single divider. Column padding is supplied by the cell modifiers
 * in components.css, because the two tables space their columns differently.
 */
export function HairlineTable({ template, children }: { template: string; children: ReactNode }) {
  return (
    <div className="table" style={{ gridTemplateColumns: template }}>
      {children}
    </div>
  );
}

export function Cell({ variant, children }: { variant: string; children: ReactNode }) {
  return <div className={`table__cell table__cell--${variant}`}>{children}</div>;
}
