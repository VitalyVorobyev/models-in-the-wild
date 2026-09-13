import {
  Arrow,
  ExchangeCells,
  ExchangeDots,
  ExchangeMeans,
  mostContestedExchange,
  px,
  py,
  sBox,
} from "../components/ScoreFigure";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import Tex from "../components/Tex";
import { evidence, scoreEvidence } from "../content/evidence";

const sq = evidence.scorequant;
const move = mostContestedExchange();
const newCount = scoreEvidence.exchange.newEvents.s.length;

/**
 * The two results the section stands on, on the illustration events: the
 * one-move-at-a-time algorithm and where it stops, and that where it stops the
 * cells are explicit, a nearest-mean rule that also labels new events.
 */
export default function WhatWasProved() {
  return (
    <Slide
      label="What was proved"
      notes={`Ninety seconds; the mathematics in two sentences, the qualifications in the notes. The slider on the last slide was the smooth optimizer; the theorems are about the other algorithm, one move at a time, and that is what both pictures show, run by the library on these ${scoreEvidence.illustration.s.length} events. Left: take one event out of its cell and put it in another; the change in the determinant of the information has a closed form, so every candidate move is priced exactly, with no re-fit. Accept only moves that gain: the objective rises strictly, it cannot cycle, and since there are finitely many labelings it stops, at a partition no single move can improve. Right: at that partition every event is strictly nearest to the mean score of its own cell, in the metric given by the inverse information; and a D-optimal partition is stable, so this holds for it too. The means and I are computed from the partition, so the rule is explicit, it reproduces every label, and it labels events never seen: the hollow points are ${newCount} new events placed by it. Conditions, so that nobody quotes this loosely: distinct score points, exactly K non-empty cells, non-singular information, exact zero gain tolerance. Both theorems are machine-checked in Lean 4 and were audited by a session that never saw the derivation; the audit passed the main theorem only after its assumptions were made explicit. Claim ids: ${sq.exchangeTheorem.value}; ${sq.mainTheorem.value}.`}
    >
      <SlideHeader kicker="ScoreQuant · the results" title="What was proved" />
      <div className="proved">
        <div className="proved__col">
          <div className="pfig">
            <ExchangeCells />
            <ExchangeDots which="sample" />
            <ExchangeMeans />
            <span
              className="pfig__dot pfig__dot--ring"
              style={{ left: px(move.p[0] ?? 0, sBox), top: py(move.p[1] ?? 0, sBox) }}
            />
            <Arrow
              from={[move.p[0] ?? 0, move.p[1] ?? 0]}
              to={[move.mean[0] ?? 0, move.mean[1] ?? 0]}
              box={sBox}
              shorten={2.5}
              aspect={0.5}
              className="pfig__pull--accent"
            />
            <span className="pfig__tag" style={{ left: "3%", top: "6%" }}>
              one candidate move, priced exactly
            </span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`\Delta \log\det I\ \text{ for one move, in closed form}`}</Tex>
          </div>
          <strong>One move at a time, until no move gains</strong>
          <p>
            Move one event to another cell; the change in det I is exact, so every move is priced.
            Accept only gains: the objective rises, never cycles, and stops at a partition no single
            move improves.
          </p>
          <em>{sq.exchangeTheorem.value}</em>
        </div>
        <div className="proved__col">
          <div className="pfig">
            <ExchangeCells />
            <ExchangeDots which="sample" />
            <ExchangeDots which="new" />
            <ExchangeMeans />
            <span className="pfig__tag" style={{ left: "3%", top: "6%" }}>
              × the mean score of a cell, μ · ○ new events, placed by the rule
            </span>
          </div>
          <div className="problem__line">
            <Tex>{String.raw`q(s)=\arg\min_b\ (s-\mu_b)^{\mathsf T} I^{-1}(s-\mu_b)`}</Tex>
          </div>
          <strong>Then the cells are explicit</strong>
          <p>
            At a stable partition every event is strictly nearest to the mean score of its own cell,
            in the I⁻¹ metric. The means and I come from the partition, so the rule is written down:
            it reproduces every label and places new events.
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
