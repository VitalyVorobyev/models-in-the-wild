import ExternalLink from "./ExternalLink";
import Slide from "./Slide";

interface SectionOpenerProps {
  label: string;
  notes: string;
  kicker: string;
  title: string;
  subtitle: string;
  /** Cyan project URL in the bottom band. */
  link?: { href: string; label: string };
  /** Dashed chip in the bottom band — used to state access ("local only"). */
  note?: string;
}

/**
 * The dark project openers (slides 8, 11, 16, 20, 24). The bottom band covers
 * all three variants: link only, chip only, or both across the width.
 * Slide 1 is deliberately not built from this — it carries the logo and a
 * different footer, and forcing it in here would cost more than it saves.
 */
export default function SectionOpener({
  label,
  notes,
  kicker,
  title,
  subtitle,
  link,
  note,
}: SectionOpenerProps) {
  return (
    <Slide label={label} notes={notes} theme="dark" align="between">
      <div className="kicker kicker--dark">{kicker}</div>

      <div className="opener__block">
        <h2 className="display">{title}</h2>
        <p className="subtitle" style={{ color: "var(--dark-muted)" }}>
          {subtitle}
        </p>
      </div>

      {link && note ? (
        <div className="opener__foot">
          <ExternalLink href={link.href} className="mono-link">
            {link.label} ↗
          </ExternalLink>
          <span className="chip">{note}</span>
        </div>
      ) : link ? (
        <ExternalLink href={link.href} className="mono-link">
          {link.label} ↗
        </ExternalLink>
      ) : note ? (
        <span className="chip chip--start">{note}</span>
      ) : null}
    </Slide>
  );
}
