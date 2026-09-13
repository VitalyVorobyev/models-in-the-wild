import {
  Arrow,
  Cells,
  Centroids,
  Dots,
  mostContested,
  px,
  py,
  sBox,
} from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Tex from "../components/Tex";
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
      notes={`Ninety seconds; the mathematics in two sentences, the qualifications in the notes. Left: the optimizer works one move at a time. Take one event out of its cell and put it in another; the change in the determinant of the information has a closed form, so every candidate move is priced exactly, with no re-fit. Accept only moves that gain: the objective rises strictly, it cannot cycle, and since there are finitely many labelings it stops, at a partition no single move can improve. Right: the main result. Such a stable partition is a Voronoi partition of score space: every event is strictly nearest to the mean score of its own cell, in the metric given by the inverse information. A D-optimal partition is stable, so it is one too. The consequence is practical: labels found on a sample turn into a rule for events never seen, nearest centre. Conditions, so that nobody quotes this loosely: distinct score points, exactly K non-empty cells, non-singular information, exact zero gain tolerance. Both theorems are machine-checked in Lean 4 and were audited by a session that never saw the derivation; the audit passed the main theorem only after its assumptions were made explicit. Claim ids: ${sq.exchangeTheorem.value}; ${sq.mainTheorem.value}.`}
    >
      <SlideHeader kicker="ScoreQuant · the results" title="What was proved" />
      <div className="proved">
        <div className="proved__col">
          <div className="pfig">
            <Cells />
            <Dots space="s" colorBy="cell" />
            <Centroids />
            <span
              className="pfig__dot pfig__dot--ring"
              style={{ left: px(move.p[0] ?? 0, sBox), top: py(move.p[1] ?? 0, sBox) }}
            />
            <Arrow
              from={[move.p[0] ?? 0, move.p[1] ?? 0]}
              to={[move.centre[0] ?? 0, move.centre[1] ?? 0]}
              box={sBox}
              shorten={2.5}
              aspect={0.5}
              className="pfig__pull--accent"
            />
          </div>
          <div className="problem__line">
            <Tex>{String.raw`\Delta \log\det I\ \text{ for one move, in closed form}`}</Tex>
          </div>
          <strong>One move at a time</strong>
          <p>
            Move one event to another cell; the change in det I is exact, so every move is priced.
            Accept only gains: the objective rises, never cycles, and stops at a partition no single
            move can improve.
          </p>
          <em>{sq.exchangeTheorem.value}</em>
        </div>
        <div className="proved__col">
          <div className="pfig">
            <Cells />
            <Dots space="s" colorBy="cell" />
            <Centroids />
            <span className="pfig__tag" style={{ left: "3%", top: "6%" }}>
              × the mean score of a cell, μ
            </span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`q(s)=\arg\min_b\ (s-\mu_b)^{\mathsf T} I^{-1}(s-\mu_b)`}</Tex>
          </div>
          <strong>Where it stops is a Voronoi partition</strong>
          <p>
            Every event is strictly nearest to the mean score of its own cell, in the metric set by
            I⁻¹. Every D-optimal partition is one. So labels found on a sample become a rule for new
            events: nearest centre.
          </p>
          <em>{sq.mainTheorem.value}</em>
        </div>
      </div>
      <p className="proved__rule">
        Both results are machine-checked in Lean 4 and were audited by a session that never saw the
        derivation.
      </p>
    </Slide>
  );
}
