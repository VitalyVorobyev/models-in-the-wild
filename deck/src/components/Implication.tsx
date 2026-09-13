import Slide from "./Slide";

interface ImplicationProps {
  notes: string;
  /** `01`–`05`, matching the project number. */
  number: string;
  /** The one sentence the section leaves behind. */
  statement: string;
  /** One concrete line on what that looks like inside a company. */
  possibleNow: string;
}

/**
 * The accent beat that closes every project section: one statement and one
 * line of what it would look like here. Five of these in a row is the point —
 * the audience learns that accent means "what this could mean for us". The
 * final department map shows the five together.
 */
export default function Implication({ notes, number, statement, possibleNow }: ImplicationProps) {
  return (
    <Slide label={`Implication ${number}`} theme="accent" align="between" notes={notes}>
      <div className="kicker kicker--accent">Implication {number}</div>
      <h2 className="statement" style={{ color: "var(--accent-fg)", maxWidth: "1600px" }}>
        {statement}
      </h2>
      <p className="subtitle" style={{ color: "var(--accent-muted)", maxWidth: "1500px" }}>
        {possibleNow}
      </p>
    </Slide>
  );
}
