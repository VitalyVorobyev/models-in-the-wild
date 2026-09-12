import ExternalLink from "../components/ExternalLink";
import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Split from "../components/Split";
import { evidence, MEASURED } from "../content/evidence";
import { project } from "../content/projects";

const RADAR = project("03");
const { radar } = evidence;

/** Read top-down; the digest is the payoff, so the last step is inverted. */
const STEPS = [
  ["arXiv cs.CV, every morning", `${radar.abstractsPerDay.value} abstracts`],
  ["Deterministic keyword scoring, positive and negative", `${radar.tracks.value} tracks`],
  ["Candidate queue", `≤ ${radar.candidateCap.value}`],
  ["Claude curates: ring, reason, action", "the shortlist"],
  ["Digest: Use · Prototype · Evaluate · Watch", "the rest is Ignore"],
] as const;

export default function CvTechRadarFunnel() {
  return (
    <Slide
      label="The Daily Funnel"
      notes="The day's intake is up; four clicks narrow it. The funnel closing is the argument, so let it close. Use deterministic machinery to reduce the search space; spend the frontier model where semantic judgment is worth paying for. Keyword tracks with positive and negative terms score about a hundred abstracts a day down to a queue of at most 25. Claude reads that queue and writes an explicit decision per item — ring, reason, action, uncertainty — which is applied to SQLite in one transaction. The loop is run by hand each morning, not on a schedule. Sources today are arXiv and manual entries; RSS is planned. Open the site here."
    >
      <Split
        variant="demo"
        fill
        left={
          <div className="col" style={{ height: "100%" }}>
            <SlideHeader kicker="CV Tech Radar · agentic workflow" title="The Daily Funnel" />
            <div className="funnel">
              {STEPS.map(([label, count], index) => (
                <div
                  className={`funnel__step${index > 0 ? " fragment" : ""}${
                    index === STEPS.length - 1 ? " funnel__step--out" : ""
                  }`}
                  key={label}
                >
                  <span className="funnel__label">{label}</span>
                  <span className="funnel__count">{count}</span>
                </div>
              ))}
            </div>
            <p className="evidence-line" style={{ marginTop: "var(--gap-title)" }}>
              since {radar.since.value} · {radar.decisions.value} decisions · {radar.use.value} Use
              · {radar.ignore.value} Ignore · measured {MEASURED}
            </p>
            <ExternalLink href={RADAR.link?.href ?? "#"} className="button">
              <span>Open the radar</span>
              <span>↗</span>
            </ExternalLink>
          </div>
        }
        right={
          <div style={{ minHeight: 0 }}>
            <ImageSlot id="radar-digest" placeholder="Daily digest screenshot" rounded />
          </div>
        }
      />
    </Slide>
  );
}
