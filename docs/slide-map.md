# Slide map — v0.6 (in progress)

The deck contract. `deck/src/slides/index.ts` must match this list in order and length.

v0.6 synthesizes the v0.3 narrative (branch `main`) with the v0.5 visuals and evidence layer
(branch `deck-v0.5-codex-visual`, PR #3, reference only). Sections are rebuilt one at a time
with Vitaly; until a section is rebuilt, its v0.5 slides stand in under `v05-*` file names.

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
| 14 | **The daily funnel** — one dated run (2026-08-27) narrowing on four clicks, the digest excerpt beside it, cumulative counts re-measured | `14-radar-funnel.tsx` | paper |
| 15 | **The filter is tuned from its own decisions** — one real tuning round: three steps, twelve candidate phrases with their Ignore/kept hit counts and verdicts, transcribed from the config comment | `15-radar-tuning.tsx` | paper |
| 16 | **Implication 03** — any stream people skim or ignore can be filtered daily, with a reason attached | `16-implication-03.tsx` | accent |

Decisions: the v0.5 "a decision changes the filter" slide explained nothing; the mechanism
that is actually interesting is the phrase-mining round recorded in `negative_topics.yaml`,
so that is the slide. No improvement percentage is claimed anywhere.

## Remaining sections — v0.5 stand-ins until rebuilt

| Section | Planned slides | Currently |
|---|---|---|
| 04 Deutsch-Atlas | opener+app · progression · production system · Redaktion · Tonwerk · implication | `v05-14` … `v05-17` |
| 05 ScoreQuant | opener+timeline · problem · optimization · verification · counterexample · implication | `v05-18` … `v05-22` |
| Synthesis | five capabilities · department map · the question · closing | `v05-23`, `v05-24` |

Target: 32 slides. Timing target (rehearsal, not measured): opening 8 · family 4 · atlas 7 ·
radar 6 · deutsch 10 · scorequant 11 · synthesis 5 = 51 min + 10 discussion.

## History

- **v0.6** — synthesis branch. Opening, Family, Atlas and Radar sections rebuilt in dialogue with Vitaly, 2026-09-13. Slide 4 rebuilt twice: the first HTML version was still a box-and-line wireframe; the cycle replaced it.
- **v0.5** — Codex artifact-led revision, 24 slides. Kept as reference (PR #3): evidence
  scripts, generated JSON, sourced graph, dated funnel, ScoreQuant experiment, audio,
  department map. Removed all framing slides; not presentable as a talk.
- **v0.4** — no change to the sequence; section registry, chrome, section map, fragments.
- **v0.3** — all five project stories written; 22 → 31 slides.
- **v0.2** — the 22-slide sequence ported from the Claude Design handoff.
- **v0.1** — first outline.
