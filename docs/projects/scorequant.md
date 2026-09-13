# Project 05 — ScoreQuant

Capability shown: **Discover** — explore new technical and mathematical territory.

Repository: https://github.com/VitalyVorobyev/scorequant
Docs: https://vitalyvorobyev.github.io/scorequant/
Source of the story: `docs/session-handoff-2026-09-12.md` (Vitaly's account of the origin),
checked against the repository on 2026-09-12 (HEAD 2026-09-11).

## Why it started

Almost accidentally. Vitaly visited a former colleague from particle physics and said that with
the agentic workflow it felt possible to attack almost any technical problem in a surprisingly
short time. The colleague described a hard data-analysis procedure: multidimensional template
fitting, a normalized score space, seed selection, Voronoi quantization, numerical optimization
of seed positions, retained Fisher information.

The initial request was modest: **turn this procedure into a publishable software library.**

## The turning point

During theory work, Claude proposed a candidate theorem and a proof. Vitaly asked a second
model for an independent critical check; it found no immediate flaw.

That is not evidence. Two models agreeing proves nothing. What mattered is that it changed the
ambition: maybe formal mathematical research itself can run inside an agentic workflow — if
the verification is real.

## What exists now

A Python library (JAX + Optax, NumPy backend; v0.2.0, alpha) and, beside it, a research
programme under its own operating contract:

- **literature**: 19 dated per-claim prior-art audits, topic notes, a citation graph, an
  explicit "a search gap is not novelty" rule;
- **claims registry**: 137 claim nodes with dependency edges — 65 proved in-project, 27 open,
  22 bridge, 12 counterexamples, 6 literature, 5 measured — and proof prose in 13 chapters;
- **counterexample registry**: 34 exact JSON fixtures, pinned by the test suite;
- **numerical evidence ledger**: 82 append-only entries, each naming the claim and the
  executable that produced it; header: "Nothing in this file is a proof";
- **open problems**: a versioned file that selects the next work;
- **independent audits**: a protocol where a fresh session that has not seen the derivation
  audits a claim in its own worktree — 20 audit reports so far, several of which refuted
  or narrowed the registered statement before passing it;
- **Lean 4 formalization**: a pinned Mathlib workspace machine-checking the finite-dimensional
  chain and the compiled predictor, explicitly *not* the Python implementation; parked as
  partial with the residue listed in the open problems;
- **manuscript**: "Information-optimal hard quantization of multivariate score space", draft
  v10, owner review pending, publication blocked on provenance and unread primary sources.

## Why agents mattered

> The point is not that AI can be trusted to "do mathematics." The point is that frontier
> models make it practical for a very small team to run a surprisingly complete research
> loop.

Literature review, hypothesis generation, derivation, implementation, experiments, adversarial
review, counterexample search, documentation and formal verification — each as a repeatable
procedure with an artifact.

## Interesting development moment

The audit of the primary structural theorem passed only "after making its duplicate,
feasibility, and tolerance assumptions explicit". Another audit refuted the registered
generality of a statement with an exact counterexample and then verified the narrowed
version. The verification stack is where the research actually happens.

## What this project proves

> **The stronger the agent becomes, the more important verification becomes — not
> micromanagement.**

> **Freedom to explore. Obligation to verify.**

## Company implication

This expands the scope furthest: agentic workflows can support genuine R&D and discovery, not
just implementation of known solutions.

## Evidence (measured 2026-09-12)

| Fact | Source |
| --- | --- |
| 137 claim nodes; status counts as above | `ls agenticresearch/claims/*.json \| wc -l`; status field |
| 34 counterexample fixtures | `agenticresearch/COUNTEREXAMPLES/` |
| 82 numerical-evidence rows | `grep -E "^\| N-" agenticresearch/NUMERICAL_EVIDENCE.md \| wc -l` |
| 19 literature audits | `agenticresearch/LITERATURE/audits/` |
| 21 audit reports (re-measured 2026-09-13; 20 on 2026-09-12) | `agenticresearch/AUDITS/` |
| Lean 4 v4.33.1 + Mathlib workspace, 20 modules | `agenticresearch/formal/` |
| Manuscript v10, 10 Sep 2026, owner review pending | `agenticresearch/manuscripts/README.md` |
| Traceable theorem example: `D-EXCHANGE-IMPLIES-VORONOI`, `project_proved`, audited 26 Aug 2026 | `agenticresearch/claims/D-EXCHANGE-IMPLIES-VORONOI.json`, `AUDITS/AUDIT-D-EXCHANGE-VORONOI-001.md` |
| Library v0.2.0, alpha | `pyproject.toml` |
| 305 commits, 2026-08-23 → 2026-09-12 | `git rev-list --count HEAD`, `git log` (re-measured 2026-09-13) |

## Do not claim

- "Claude proved a theorem and ChatGPT confirmed it." Agreement between models is not
  evidence; the slide says so in as many words.
- "Lean-verified library": Lean checks the stated mathematics, not the implementation, and
  the effort is parked as partial.
- "Published paper": a draft, owner review pending, publication blocked.
- "Reviewer agent": there are no agent definition files. There is an independent-audit
  protocol (prompts, worktree discipline, fresh-context sessions) with 20 reports.
- "Novel result": the repository's own rule is that a search gap is not novelty.
- The project started on 2026-08-23 under the name FisherBin.

## Editorial evidence update

v0.5 adds a synthetic 2D Gaussian location demonstration through the real public API. This is not physics data. Actual optimizer states, train/validation hard retention and final held-out retention are exported with revision and seed. The duplicate-score counterexample is copied from its exact fixture.
