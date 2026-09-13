import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
import { evidence } from "../content/evidence";

const sq = evidence.scorequant;

/**
 * How a result gets made: the registry selects a step, a packet states it,
 * one agent executes it, an independent one audits it, the verdict goes back
 * into the registry; Lean checks what is load-bearing; the library and the
 * manuscript use what survived.
 */
export default function ResearchPipeline() {
  return (
    <Slide
      label="How a result gets made"
      notes={`Two minutes. Simplified, but this is the shape. On the left, the registry: one file per claim with its statement, assumptions, dependencies and status, ${sq.claims.value} of them now, ${sq.claimsProved.value} proved, ${sq.claimsOpen.value} open, ${sq.claimsCounterexample.value} refuted by an exact counterexample; and a separate file of open problems that selects the next step. The middle is one step. I write a packet: the goal stated so that "done" is decidable, the claims it may touch, the deliverables, the stop conditions. One agent executes it in its own worktree, with the strongest model, and records the result once. Then an independent agent, a fresh session that has never seen the derivation, audits it: ${sq.audits.value} such audits so far, and several passed a claim only after narrowing it. The verdict, proved, refuted or narrowed, goes back into the registry; the packet is deleted, git keeps it. For the claims the library or the paper depend on, Lean 4 with Mathlib checks the stated mathematics: the statement is frozen, the proof is machine-checked, ${sq.leanModules.value} modules; it says nothing about the Python code. What survives is used twice: in the library, ${sq.libraryVersion.value}, and in the manuscript, ${sq.manuscript.value}. Every step is a written procedure that leaves a file; I read files, not chat.`}
    >
      <SlideHeader kicker="ScoreQuant · workflow" title="How a result gets made" />
      <div className="pipe">
        <div className="pipe__rail" aria-hidden="true" />
        <div className="pipe__stage pipe__registry">
          <span className="pipe__kicker">the registry</span>
          <strong>Proven results and open questions</strong>
          <span>one file per claim: statement, assumptions, dependencies, status</span>
          <span>a file of open problems selects the next step</span>
          <em>
            {sq.claims.value} claims · {sq.claimsProved.value} proved · {sq.claimsOpen.value} open ·{" "}
            {sq.claimsCounterexample.value} refuted
          </em>
        </div>
        <div className="pipe__stage pipe__packet">
          <span className="pipe__kicker">one packet, one step</span>
          <div className="pipe__steps">
            <div className="pipe__step">
              <strong>Write the packet</strong>
              <span>the question, the claims it may touch, the deliverables, when to stop</span>
            </div>
            <div className="pipe__step">
              <strong>An agent executes it</strong>
              <span>
                in its own worktree; falsifies in exact arithmetic before proving; records once
              </span>
            </div>
            <div className="pipe__step">
              <strong>Another agent audits it</strong>
              <span>
                independent: a fresh session that never saw the derivation; its verdict is proved,
                refuted or narrowed
              </span>
              <em>{sq.audits.value} audits</em>
            </div>
          </div>
          <div className="pipe__return" aria-hidden="true" />
          <span className="pipe__return-label">the verdict goes back into the registry</span>
        </div>
        <div className="pipe__stage pipe__formal">
          <span className="pipe__kicker">formal proof</span>
          <strong>Lean 4 checks the proof</strong>
          <span>
            for the claims the library and the paper rest on: the statement frozen, the proof
            machine-checked; the mathematics, not the code
          </span>
          <em>{sq.leanModules.value} modules</em>
        </div>
        <div className="pipe__stage pipe__outputs">
          <div className="pipe__out">
            <span className="pipe__kicker">the library</span>
            <strong>Algorithms with a theorem behind them</strong>
            <em>{sq.libraryVersion.value}</em>
          </div>
          <div className="pipe__out">
            <span className="pipe__kicker">the manuscript</span>
            <strong>Results with their claim ids</strong>
            <em>{sq.manuscript.value}</em>
          </div>
        </div>
      </div>
      <p className="pipe__rule">
        Every step is a written procedure that leaves a file. The stronger the model, the more the
        checking matters.
      </p>
    </Slide>
  );
}
