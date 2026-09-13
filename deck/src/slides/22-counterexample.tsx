import { Diagram } from "../components/Diagram";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { projectEvidence } from "../content/evidence";
export default function Page() {
  return (
    <Slide
      label="An assumption the audit exposed"
      notes="2.5 minutes. Exact fixture CE-D-UNMERGED-DUPLICATES-001, audited August 26, 2026. Scores 1,1,-1; weights 1/4,1/4,1/2; three singleton cells. Stability is vacuous because no nonempty-preserving move exists, yet the two coincident centroids tie. Vertical separation on the slide is for visibility only: the two atoms have exactly the same score. Merging excludes this counterexample; it is not itself the proof. The narrowed theorem also requires positive weights, positive-definite retained information, no additional relocation constraints and exact zero tolerance. Audit supplies full derivation. Freedom phrase appears only here."
      className="editorial"
    >
      <SlideHeader kicker="Discover" title="An assumption the audit exposed" />
      <div className="counterexample">
        <Diagram
          title="Coincident score atoms assigned to different singleton cells break strict nearest-centroid assignment"
          height={460}
        >
          <path d="M130 240 H1530" stroke="currentColor" strokeWidth="3" />
          <circle cx="430" cy="240" r="25" fill="var(--dark)" />
          <circle cx="1200" cy="213" r="25" fill="none" stroke="var(--dark)" strokeWidth="4" />
          <circle cx="1200" cy="267" r="25" fill="none" stroke="var(--link)" strokeWidth="4" />
          <path d="M1200 180 V300" stroke="var(--muted)" strokeDasharray="5 5" />
          <text x="430" y="330" textAnchor="middle">
            score {projectEvidence.counterexample.scores[2]?.[0]}
          </text>
          <text x="1200" y="350" textAnchor="middle">
            score {projectEvidence.counterexample.scores[0]?.[0]} · coincident atoms
          </text>
          <text x="430" y="160" textAnchor="middle">
            weight {projectEvidence.counterexample.weights[2]}
          </text>
          <text x="1200" y="110" textAnchor="middle">
            weights {projectEvidence.counterexample.weights[0]} +{" "}
            {projectEvidence.counterexample.weights[1]}
          </text>
          <text x="820" y="425" textAnchor="middle">
            Separate singleton cells → no admissible move → tied centroids
          </text>
        </Diagram>
        <p className="caption">
          Narrowed scope: merge duplicates · nonempty-cell feasibility · positive-definite
          information · exact zero-gain tolerance
        </p>
      </div>
      <p className="takeaway">Freedom to explore. Obligation to verify.</p>
    </Slide>
  );
}
