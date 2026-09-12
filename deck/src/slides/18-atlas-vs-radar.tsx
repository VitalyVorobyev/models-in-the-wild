import { Fragment } from "react";
import { Cell, HairlineTable } from "../components/HairlineTable";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const ROWS = [
  ["Input", "Papers I choose to read", "Everything cs.CV publishes today"],
  ["Time", "Grows for years", "Resets every morning"],
  ["Output", "Connected pages and narratives", "A ranked digest, most of it Ignore"],
  [
    "Question",
    "What do we know, and how does it connect?",
    "What arrived that deserves attention?",
  ],
  ["Agent's job", "Maintain relationships", "Judge a deterministic shortlist"],
] as const;

export default function AtlasVsRadar() {
  return (
    <Slide
      label="Atlas vs Radar"
      notes="Two projects that look alike from a distance and are opposite in kind. The Atlas accumulates: chosen papers, years of growth, connected knowledge. The Radar filters: the whole stream, every day, most of it discarded. Both need an agent, but for different jobs — maintaining relationships versus judging a shortlist. A company needs both kinds."
    >
      <SlideHeader kicker="Two shapes of knowledge work" title="Atlas vs Radar" />

      <HairlineTable template="260px minmax(0, 1fr) minmax(0, 1fr)">
        <Cell variant="head">
          <span className="card__label" />
        </Cell>
        <Cell variant="head">
          <span className="card__label" style={{ color: "var(--accent)" }}>
            Atlas · accumulate
          </span>
        </Cell>
        <Cell variant="head">
          <span className="card__label" style={{ color: "var(--accent)" }}>
            Radar · filter
          </span>
        </Cell>

        {ROWS.map(([row, atlas, radar]) => (
          <Fragment key={row}>
            <Cell variant="num">{row}</Cell>
            <Cell variant="left">
              <span style={{ color: "var(--ink)" }}>{atlas}</span>
            </Cell>
            <Cell variant="right">
              <span style={{ color: "var(--ink)" }}>{radar}</span>
            </Cell>
          </Fragment>
        ))}
      </HairlineTable>
    </Slide>
  );
}
