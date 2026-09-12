import { Fragment } from "react";
import { Cell, HairlineTable } from "../components/HairlineTable";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";

const ROWS = [
  ["Problem intent", "Implementation details"],
  ["Safety and constraints", "Architecture proposals"],
  ["Evidence standard", "Visual design"],
  ["Acceptance criteria", "Proactive improvements"],
] as const;

export default function RigidVsFlexible() {
  return (
    <Slide
      label="Rigid vs Flexible"
      notes="Keep intent, invariants and evidence strict. Give agents freedom in implementation and exploration. Stronger models should reduce micromanagement, not increase it. The phrase at the bottom comes back in the last project: freedom to explore, obligation to verify."
    >
      <SlideHeader kicker="Control where it matters" title="Rigid vs Flexible" />

      <HairlineTable template="minmax(0, 1fr) minmax(0, 1fr)">
        <Cell variant="left">
          <span className="card__label" style={{ color: "var(--accent)" }}>
            Rigid
          </span>
        </Cell>
        <Cell variant="right">
          <span className="card__label">Flexible</span>
        </Cell>

        {ROWS.map(([rigid, flexible]) => (
          <Fragment key={rigid}>
            <Cell variant="left">
              <span style={{ color: "var(--ink)" }}>{rigid}</span>
            </Cell>
            <Cell variant="right">{flexible}</Cell>
          </Fragment>
        ))}
      </HairlineTable>

      <p className="note" style={{ marginTop: "72px", maxWidth: "1300px" }}>
        Freedom to explore. Obligation to verify.
      </p>
    </Slide>
  );
}
