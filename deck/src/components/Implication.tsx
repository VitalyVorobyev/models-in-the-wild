import Slide from "./Slide";

interface ImplicationProps {
  label: string;
  notes: string;
  /** `01`–`05`, matching the project number. */
  number: string;
  /** The one sentence the section leaves behind. */
  statement: string;
  today: string;
  possibleNow: string;
}

/**
 * The accent beat that closes every project section (slides 10, 15, 19, 23,
 * 27): one statement, then a Today / Possible now band. Five of these in a row
 * is the point — the audience learns that accent means "what this could mean
 * for us", and the sentence changes each time.
 */
export default function Implication({
  label,
  notes,
  number,
  statement,
  today,
  possibleNow,
}: ImplicationProps) {
  return (
    <Slide label={label} theme="accent" align="between" notes={notes}>
      <div className="kicker kicker--accent">Company implication {number}</div>

      <h2 className="statement" style={{ color: "var(--accent-fg)", maxWidth: "1600px" }}>
        {statement}
      </h2>

      <div className="split split--wide-gap implication__band">
        <p>
          <span className="card__label implication__label">Today</span>
          {today}
        </p>
        <p>
          <span className="card__label implication__label">Possible now</span>
          {possibleNow}
        </p>
      </div>
    </Slide>
  );
}
