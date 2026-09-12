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
  /** Dashed chip marking a project whose story is not yet written. */
  placeholder?: string;
}

/**
 * The dark project openers (slides 7, 12, 14, 16, 18). The bottom band covers
 * all three handoff variants: link only, chip only, or both across the width.
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
  placeholder,
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

      {link && placeholder ? (
        <div className="opener__foot">
          <ExternalLink href={link.href} className="mono-link">
            {link.label} ↗
          </ExternalLink>
          <span className="chip">{placeholder}</span>
        </div>
      ) : link ? (
        <ExternalLink href={link.href} className="mono-link">
          {link.label} ↗
        </ExternalLink>
      ) : placeholder ? (
        <span className="chip chip--start">{placeholder}</span>
      ) : null}
    </Slide>
  );
}
