import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

const sq = evidence.scorequant;

/**
 * The research loop as a workflow: six stations on one track, each a written
 * procedure that leaves a file, and a claim that fails goes around again.
 */
export default function ResearchLoop() {
  return (
    <Slide
      label="The research loop"
      notes={`Two minutes. Same idea as slide 4, pointed at mathematics: every step is a written procedure, every step leaves a file, and a person reads files rather than chat. Read: a dated search per claim, with the rule that a gap in the search is not novelty. State: one file per claim with what it depends on, ${sq.claims.value} of them now. Derive and implement: proof prose in chapters and the library. Run the numbers: ${sq.ledgerRows.value} ledger entries, each naming its claim and the program that produced it, under the header "nothing in this file is a proof". Try to break it: a counterexample search, ${sq.counterexamples.value} exact fixtures pinned by tests, and independent audits, ${sq.audits.value} so far, each by a fresh session that never saw the derivation; several passed a claim only after narrowing it. Check formally: Lean 4, partial, the stated mathematics and not the code. A claim that fails goes around again. The manuscript is a draft, ${sq.manuscript.value}, and says so. The point is not that a model can be trusted to do mathematics; it is that a very small team can run the whole loop, because the checking is built in.`}
    >
      <SlideHeader kicker="ScoreQuant · workflow" title="The same loop, pointed at mathematics" />
      <div className="loop">
        <div className="loop__track" aria-hidden="true" />
        <span className="loop__arrow loop__arrow--top" aria-hidden="true" />
        <span className="loop__arrow loop__arrow--bottom" aria-hidden="true" />
        <span className="loop__return">a claim that fails goes around again</span>
        <div className="loop__station" style={{ gridColumn: 1, gridRow: 1 }}>
          <strong>Read</strong>
          <span>a dated search of prior work per claim; a gap in the search is not novelty</span>
          <em>{sq.literatureAudits.value} literature audits</em>
        </div>
        <div className="loop__station" style={{ gridColumn: 2, gridRow: 1 }}>
          <strong>State</strong>
          <span>one file per claim, with what it depends on and its current status</span>
          <em>
            {sq.claims.value} claims · {sq.claimsProved.value} proved · {sq.claimsOpen.value} open
          </em>
        </div>
        <div className="loop__station" style={{ gridColumn: 3, gridRow: 1 }}>
          <strong>Derive and implement</strong>
          <span>proof prose in chapters; the library that computes what the prose claims</span>
          <em>library {sq.libraryVersion.value}</em>
        </div>
        <div className="loop__station loop__station--bottom" style={{ gridColumn: 3, gridRow: 2 }}>
          <strong>Run the numbers</strong>
          <span>every result names its claim and the program that produced it</span>
          <em>{sq.ledgerRows.value} ledger entries · none of them a proof</em>
        </div>
        <div className="loop__station loop__station--bottom" style={{ gridColumn: 2, gridRow: 2 }}>
          <strong>Try to break it</strong>
          <span>
            a counterexample search; then a fresh session that never saw the derivation audits the
            claim
          </span>
          <em>
            {sq.counterexamples.value} counterexamples · {sq.audits.value} independent audits
          </em>
        </div>
        <div className="loop__station loop__station--bottom" style={{ gridColumn: 1, gridRow: 2 }}>
          <strong>Check formally</strong>
          <span>Lean 4 checks the stated mathematics, not the code; partial, and marked so</span>
          <em>manuscript {sq.manuscript.value}</em>
        </div>
      </div>
      <p className="loop__rule">
        Every step is a written procedure that leaves a file. The stronger the model, the more the
        checking matters.
      </p>
    </Slide>
  );
}
