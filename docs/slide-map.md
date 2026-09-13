# Slide map — v0.6 (in progress)

The deck contract. `deck/src/slides/index.ts` must match this list in order and length.

v0.6 synthesizes the v0.3 narrative (branch `main`) with the v0.5 visuals and evidence layer
(branch `deck-v0.5-codex-visual`, PR #3, reference only). Sections are rebuilt one at a time
with Vitaly. All seven sections are rebuilt; no v0.5 slide remains.

## Opening — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 1 | **Frontier Models in the Wild** — title | `01-title.tsx` | dark |
| 2 | **Five artifacts** — montage, cards rise with scale | `02-artifacts.tsx` | paper |
| 3 | **The claim** — not faster coding; a larger class of problems | `03-the-claim.tsx` | accent |
| 4 | **The workflow** — models in a harness, run in a loop against context and success criteria; one click closes the ring | `04-the-workflow.tsx` | paper |
| 5 | **The repository is the memory** — instructions, docs, skills, tests; project-agnostic | `05-the-memory.tsx` | paper |
| 6 | **Constrain the intent, not the implementation** — bounded by you vs. extends past you | `06-constrain-intent.tsx` | paper |

Decisions: v0.3's "The question" slide dropped (the enabler is the models and the harness, not a
workflow trick). "The prompt is temporary" dropped as trivial. "Rigid vs Flexible" replaced by
Vitaly's message. Diagrams are HTML/CSS, not SVG boxes — the v0.5 `Diagram` primitives are
being retired section by section.

## 01 · Family Documents Organizer — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 7 | **Family Documents Organizer** — opener with the viewer as hero | `07-family.tsx` | dark |
| 8 | **One folder and an agent** — the three asks as three stations, the tutors' letter as the worked example, real register fields | `08-one-folder.tsx` | paper |
| 9 | **Implication 01** — very small, custom software becomes economically rational | `09-implication-01.tsx` | accent |

Decisions: the viewer screenshot and the letter are cleared by Vitaly (first names only). "Bespoke"
is not Vitaly's word; "custom". Register count re-measured: 69 records, 18 categories.

## 02 · CV Atlas — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 10 | **CV Atlas** — opener with the Atlas overview as hero | `10-atlas.tsx` | dark |
| 11 | **From papers to living knowledge** — three stages on one rail: Read (private research note), Author (page counts), Narrate (the Foundation Models route as a chain, with the demo link); the private-vault / public-site boundary drawn | `11-atlas-workflow.tsx` | paper |
| 12 | **Implication 02** — from documents we store to knowledge we can navigate | `12-implication-02.tsx` | accent |

Decisions: one workflow slide, not workflow + graph — Vitaly shows the graph live. The
separate demo slide was cut; the narrative link sits on the workflow slide. The kicker on
every implication slide is "Implication NN", not "Company implication".

## 03 · CV Tech Radar — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 13 | **CV Tech Radar** — opener with the cumulative board as hero; "the Atlas accumulates, the Radar filters" in the subtitle | `13-radar.tsx` | dark |
| 14 | **An automatic daily routine** — three zones: automatic every morning (fetch, narrow, propose), one digest (the real 2026-08-27 excerpt), a person reads and decides; two clicks | `14-radar-routine.tsx` | paper |
| 15 | **Implication 03** — recurring routines can run on their own; people keep the decision | `15-implication-03.tsx` | accent |

Decisions: the message of this section is the routine — automatic, a daily digest, a human
final call — not the filtering mechanics. A first v0.6 funnel slide with cumulative decision
counts and a tuning-round slide (phrase mining from `negative_topics.yaml`) were built and
cut as implementation detail; the tuning round is recorded in `docs/projects/cv-tech-radar.md`
for reference. The implication reads "Filtering is a routine. Routines can run on their own.
People keep the decision." so that it still answers the section's capability, Filter. The
opener credits the ThoughtWorks Technology Radar as the borrowed idea (`origin` in
`projects.ts`).

## 04 · Deutsch-Atlas — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 16 | **Deutsch-Atlas** — opener with the learner landing page as hero | `16-deutsch.tsx` | dark |
| 17 | **From evidence to a production system** — the verified frame: learning research (left edge) and Goethe standards (bottom edge) always visible; three clicks add the corpus counts, the two tools resting on the frame, and the learner app | `17-verified-frame.tsx` | paper |
| 18 | **The editor's workbench** — Redaktion: what the corpus holds (six material types) and the five views it offers; the References capture | `18-redaktion.tsx` | paper |
| 19 | **From script to approved audio** — Tonwerk in four stations (script, render, machine checks, a person approves with the recorded checklist), then the whole approved market-stall scene (32 s) with player and transcript; the local models named (Qwen3-TTS, Stable Audio, Whisper, WavLM) | `19-tonwerk.tsx` | paper |
| 20 | **Implication 04** — start with evidence and standards; let agents create inside the verified frame | `20-implication-04.tsx` | accent |

Decisions: the v0.5 ecosystem diagram and the six-stage progression are folded into slide 17;
the frame echoes slide 6 (constrain the intent). Redaktion and Tonwerk stay separate slides
because each carries its own real artifact. No Tonwerk capture exists, so slide 19 is a
composition plus the existing approved audio; nothing is presented as a studio screenshot.
The learner screenshot slide was dropped (the opener hero already shows the app in use).
Coverage figures re-measured 2026-09-13 with `bun scripts/coverage.ts` and `structures.ts`.
Second round with Vitaly: evidence-verdict labels and the DTZ abbreviation replaced by plain
words on slide 17; slide 18 rewritten to describe material types and views instead of slogans
("honest", "trace not score" dropped); slide 19 plays the whole scene and names the models.

Total: 30 slides. Timing target (rehearsal, not measured): opening 8 · family 4 · atlas 7 ·
radar 6 · deutsch 10 · scorequant 12 · synthesis 5 = 52 min + 8 discussion.

## 05 · ScoreQuant — rebuilt 2026-09-13, round three

One example runs through the section: two measured quantities per event, a narrow Gaussian
peak on a broad Gaussian background, the parameters to measure being the signal fraction f
and the peak position m. `scripts/export-scorequant.py` computes the scores analytically,
hands them to the real library, and exports the run, the Fisher matrices (none, a 3×2 grid
over x, the six cells), the template-fit histogram and a 69-event illustration sample.

| # | Slide | File | Theme |
|---|---|---|---|
| 21 | **ScoreQuant** — opener with the documentation walkthrough as hero | `21-scorequant.tsx` | dark |
| 22 | **A peak on a background** — the model with its two components and the sample; each event's score as a pull on f and m; the Fisher information and the covariance of the best measurement. f is blue and m is orange on every slide of the section, in the figures, the KaTeX formulas and the text | `22-the-model.tsx` | paper |
| 23 | **Why bin, and what to keep** — the template fit as counts per bin; the same sample under a grid over x (keeps 22%) and under six cells in score space (keeps 92%); D-optimality as the three measured ellipses with a colour key, and max det I_bins | `23-why-bin.tsx` | paper |
| 24 | **Seeds move; the information kept is measured** — the real library on the example: slider over 21 recorded states in raw score coordinates, one curve (the objective), one number | `24-synthetic-run.tsx` | paper |
| 25 | **What was proved** — the one-move-at-a-time algorithm run by the library on the 69 illustration events: one candidate move priced exactly, until no move gains; then the cells are explicit, nearest mean in the I⁻¹ metric, and the compiled rule places 68 new events (hollow points); claim ids under each; both Lean-checked and audited | `25-what-was-proved.tsx` | paper |
| 26 | **How a result gets made** — the registry of proven results and open questions; one packet: written, executed by one agent, audited by an independent one, the verdict back into the registry; Lean 4 for the load-bearing claims; the library and the manuscript | `26-research-pipeline.tsx` | paper |
| 27 | **Implication 05** — missing expertise is no longer a reason not to start; agents bring the skill we lack, a formal proof included; the independent checks decide what stands | `27-implication-05.tsx` | accent |

Decisions: the problem must be clear before any interaction, so slides 22 and 23 are static
and slide 24 is the only interactive one. Vitaly's order for the exposition: the concrete
model written out, what θ means in it, the observations, the scores, measuring the
parameters, why people bin, observation space versus score space, then the objective (Fisher
information, its inverse as the covariance, D-optimality as the determinant); only then the
slider. Formulas are typeset with KaTeX (`components/Tex.tsx`, bundled, no network; the
`\ff` and `\mm` macros carry the parameter colours); the loss identity was cut as too much.
The run plots a single curve, the objective, and shows one number; the held-out retention
stays in the JSON. Slide 25 shows the exchange algorithm, not the soft optimizer, because the
theorems are about single-move stability; the rule is explicit and is shown placing new
events. The converse remark, the fork slide and the "Freedom to explore" motto were cut. The
loop-of-stations slide was replaced by the pipeline Vitaly described. Re-measured 2026-09-13:
21 audits, 21 Lean modules.

## Synthesis — rebuilt 2026-09-13

| # | Slide | File | Theme |
|---|---|---|---|
| 28 | **Explore, learn and create at the same time** — left, what the five projects share (four principles); right, what becomes possible (explore, learn, create); the rule "Not five tools: one way of working, and a wider idea of what we can attempt" | `28-conclusion.tsx` | paper |
| 29 | **The question** — "Not only: how can a model make my current work faster?" then the take-home question, alone on a dark page | `29-the-question.tsx` | dark |
| 30 | **Closing** — "This deck was built the same way.", the four-step method, the repository and the deployed deck | `30-closing.tsx` | dark |

Decisions: the five-capabilities recap and the capability-by-department matrix were both
cut (2026-09-13): the conclusion is about a new way of thinking about what is possible, not
about the five projects' content. The implication sentences live in `content/projects.ts`
so the five accent slides read one source. `DepartmentMap`, `Diagram` and the `v05-*`
stand-ins are deleted.

## History

- **v0.6** — synthesis branch. All sections rebuilt in dialogue with Vitaly, 2026-09-13; 30 slides. Slide 4 rebuilt twice: the first HTML version was still a box-and-line wireframe; the cycle replaced it.
- **v0.5** — Codex artifact-led revision, 24 slides. Kept as reference (PR #3): evidence
  scripts, generated JSON, sourced graph, dated funnel, ScoreQuant experiment, audio,
  department map. Removed all framing slides; not presentable as a talk.
- **v0.4** — no change to the sequence; section registry, chrome, section map, fragments.
- **v0.3** — all five project stories written; 22 → 31 slides.
- **v0.2** — the 22-slide sequence ported from the Claude Design handoff.
- **v0.1** — first outline.
