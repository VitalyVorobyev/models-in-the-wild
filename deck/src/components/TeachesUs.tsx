import Grid from "./Grid";
import Slide from "./Slide";
import SlideHeader from "./SlideHeader";

const NOTES = "PLACEHOLDER — fill from docs/projects/project-template.md once discussed.";

/** The questions come from docs/projects/project-template.md. */
const PROMPTS = [
  ["Why agents mattered", "What would not have been worth building manually?"],
  ["Interesting moment", "A surprising decision, failure, redesign or agent interaction."],
  ["Company implication", "What capability could this unlock across teams?"],
] as const;

/**
 * Slides 13, 15, 17 and 19 are the same slide four times over, differing only
 * in the kicker. They stay unfilled on purpose: CLAUDE.md forbids inventing the
 * remaining project stories, so these hold the shape of the answer until
 * Vitaly supplies it.
 */
export default function TeachesUs({ label, kicker }: { label: string; kicker: string }) {
  return (
    <Slide label={label} notes={NOTES}>
      <SlideHeader kicker={kicker} title="What It Teaches Us" />

      <Grid cols={3} fill style={{ marginTop: "var(--gap-title)" }}>
        {PROMPTS.map(([heading, question]) => (
          <div className="card card--dashed" key={heading}>
            <span className="card__label">{heading}</span>
            <p className="card__note">{question}</p>
          </div>
        ))}
      </Grid>

      <span
        className="kicker"
        style={{ marginTop: "var(--gap-title)", textTransform: "none", letterSpacing: "0.06em" }}
      >
        PLACEHOLDER · do not fill from guesswork
      </span>
    </Slide>
  );
}
