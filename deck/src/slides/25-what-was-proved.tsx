import { Arrow, Cells, Dots, H, mostContested, pct, Seeds, W } from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

const sq = evidence.scorequant;
const move = mostContested();

/**
 * The two results the section stands on, stated in words: the exchange step
 * and where it stops, and that where it stops is a Voronoi partition.
 */
export default function WhatWasProved() {
  return (
    <Slide
      label="What was proved"
      notes={`Ninety seconds; the mathematics in two sentences, the qualifications in the notes. Left: the optimizer works one move at a time. Take one observation out of its cell and put it in another; the change in the determinant of the information has a closed form, so every candidate move is priced exactly, with no re-fit. Accept only moves that gain: the objective rises strictly, it cannot cycle, and since there are finitely many labelings it stops, at a partition no single move can improve. Right: the main result. Such a stable partition is a Voronoi partition of score space: every observation is strictly nearest to the centre of its own cell, in the metric given by the inverse information. A D-optimal partition is stable, so it is one too. The consequence is practical: labels found on a sample turn into a rule for observations never seen, nearest centre. The converse is false, and the repository holds the counterexample: not every Voronoi partition is stable. Conditions, so that nobody quotes this loosely: distinct score points, exactly K non-empty cells, non-singular information, exact zero gain tolerance. Both theorems are machine-checked in Lean 4 and were audited by a session that never saw the derivation; the audit passed the main theorem only after its assumptions were made explicit. Claim ids: ${sq.exchangeTheorem.value}; ${sq.mainTheorem.value}.`}
    >
      <SlideHeader kicker="ScoreQuant · the results" title="What was proved" />
      <div className="proved">
        <div className="proved__col">
          <div className="pfig">
            <Cells />
            <Dots colorBy="cell" />
            <Seeds />
            <span
              className="pfig__dot pfig__dot--ring"
              style={{ left: pct(move.p.x, W), top: pct(move.p.y, H) }}
            />
            <Arrow
              x1={move.p.x}
              y1={move.p.y}
              x2={move.seed.x}
              y2={move.seed.y}
              shorten={12}
              className="pfig__pull--accent"
            />
            <span className="pfig__formula">Δ log det I, in closed form</span>
          </div>
          <strong>One move at a time</strong>
          <p>
            Move one observation to another cell; the change in det I is exact, so every move is
            priced. Accept only gains: the objective rises, never cycles, and stops at a partition
            no single move can improve.
          </p>
          <em>{sq.exchangeTheorem.value}</em>
        </div>
        <div className="proved__col">
          <div className="pfig">
            <Cells />
            <Dots colorBy="cell" />
            <Seeds />
            <span className="pfig__formula">q(s) = argmin (s − μ)ᵀ I⁻¹ (s − μ)</span>
          </div>
          <strong>Where it stops is a Voronoi partition</strong>
          <p>
            Every observation is strictly nearest to the centre of its own cell, in the metric set
            by I⁻¹. Every D-optimal partition is one. So labels found on a sample become a rule for
            new observations: nearest centre.
          </p>
          <em>{sq.mainTheorem.value}</em>
        </div>
      </div>
      <p className="proved__rule">
        The converse fails: not every Voronoi partition is stable. Both results machine-checked in
        Lean 4 and audited by a session that never saw the derivation.
      </p>
    </Slide>
  );
}
