# Slide map — v0.3

The deck contract. `deck/src/slides/index.ts` must match this list in order and
length; changing one without the other is a defect.

That file groups the slides into the seven sections below and derives the flat sequence from
them, so the grouping cannot drift out of step with the order. The sections are not decoration:
`DeckChrome` reads them for the footer label and `SectionMap` (`M`) renders them directly.

All five project stories are written up under `docs/projects/`. Every number shown on a slide
comes from `deck/src/content/evidence.ts`, with its source and measurement date.

| Section | Slides |
| --- | --- |
| Opening | 1–7 |
| 01 · Family Documents Organizer | 8–10 |
| 02 · CV Atlas | 11–15 |
| 03 · CV Tech Radar | 16–19 |
| 04 · Deutsch-Atlas | 20–23 |
| 05 · ScoreQuant | 24–27 |
| Synthesis | 28–31 |

| # | Slide | File | Theme |
| --- | --- | --- | --- |
| 1 | **Frontier Models in the Wild** — title | `01-title.tsx` | dark |
| 2 | **Five Artifacts** — the montage, almost no explanation | `02-five-artifacts.tsx` | paper |
| 3 | **The Claim** — not faster coding; a larger class of problems | `03-the-claim.tsx` | accent |
| 4 | **The Question** — how does one person build this as weekend work? | `04-the-question.tsx` | paper |
| 5 | **The Workflow** — the eight-step spine | `05-the-workflow.tsx` | paper |
| 6 | **The Context Backbone** — docs, instructions, skills, evidence | `06-context-backbone.tsx` | paper |
| 7 | **Rigid vs Flexible** — freedom to explore, obligation to verify | `07-rigid-vs-flexible.tsx` | paper |
| 8 | **Project 01 — Family Documents Organizer** | `08-family-docs-opener.tsx` | dark |
| 9 | **One Folder and an Agent** — the four-step ask, the archive shape | `09-family-docs-system.tsx` | paper |
| 10 | **Company Implication 01** — small bespoke software is rational | `10-family-docs-implication.tsx` | accent |
| 11 | **Project 02 — CV Atlas** | `11-cv-atlas-opener.tsx` | dark |
| 12 | **CV Atlas: Why It Exists** | `12-cv-atlas-why.tsx` | paper |
| 13 | **CV Atlas: From Papers to Living Knowledge** | `13-cv-atlas-pipeline.tsx` | paper |
| 14 | **CV Atlas: Live Demo** — Foundation Models for Vision | `14-cv-atlas-demo.tsx` | paper |
| 15 | **Company Implication 02** — a living knowledge atlas | `15-cv-atlas-implication.tsx` | accent |
| 16 | **Project 03 — CV Tech Radar** | `16-cv-tech-radar-opener.tsx` | dark |
| 17 | **The Daily Funnel** — deterministic scoring, then Claude curates | `17-cv-tech-radar-funnel.tsx` | paper |
| 18 | **Atlas vs Radar** — accumulate vs filter | `18-atlas-vs-radar.tsx` | paper |
| 19 | **Company Implication 03** — an intelligence layer on the firehose | `19-cv-tech-radar-implication.tsx` | accent |
| 20 | **Project 04 — Deutsch-Atlas** | `20-deutsch-atlas-opener.tsx` | dark |
| 21 | **From Evidence to Ecosystem** — the six stages | `21-deutsch-atlas-progression.tsx` | paper |
| 22 | **Deutsch-Atlas: Live Demo** | `22-deutsch-atlas-demo.tsx` | paper |
| 23 | **Company Implication 04** — create inside a verified frame | `23-deutsch-atlas-implication.tsx` | accent |
| 24 | **Project 05 — ScoreQuant** | `24-scorequant-opener.tsx` | dark |
| 25 | **The Escalation** — from a favour to a research programme | `25-scorequant-escalation.tsx` | paper |
| 26 | **Agreement Is Not Evidence** — the verification stack | `26-scorequant-verification.tsx` | paper |
| 27 | **Company Implication 05** — freedom to explore, obligation to verify | `27-scorequant-implication.tsx` | accent |
| 28 | **Five Projects, Five Capabilities** | `28-five-capabilities.tsx` | paper |
| 29 | **Beyond Coding** — the ladder | `29-beyond-coding.tsx` | paper |
| 30 | **The Question to Take Home** | `30-the-question-again.tsx` | paper |
| 31 | **Closing** — this deck followed the same workflow | `31-closing.tsx` | dark |

## Still open

- Nine image slots are empty. `docs/assets-needed.md` is the full specification — file names,
  target aspect ratios, what each shot must show, and the redaction rule for the Family
  Documents card. The montage (slide 2), the two CV Atlas screenshots (12, 14), the radar
  digest (17) and the Deutsch-Atlas app (22) are the ones that most change the talk.
- The Family Documents section deliberately shows a tree, not a screenshot. A redacted viewer
  screenshot is possible only if Vitaly decides it is.
- Timing is tight for 60 minutes with two live demos. If it runs long, fold slide 3 into
  slide 4's subtitle and slide 18 into slide 17's notes. Budget for the fragment steps on
  slides 5, 17, 26 and 29 — 15 extra clicks in total.

## History

- **v0.4** — no change to the sequence. `index.ts` gained the section registry this file now
  documents, the deck gained persistent chrome and the `M` section map, and slides 5, 17, 26
  and 29 gained fragments.
- **v0.3** — all five project stories written; projects reordered by capability (Organize →
  Understand → Filter → Create & operate → Discover); claim slide, per-project implication
  beats, ladder and take-home question added. 22 → 31 slides.
- **v0.2** — the 22-slide sequence ported from the Claude Design handoff into
  `deck/src/slides/`. Replaced v0.1's 20-slide outline.
- **v0.1** — first outline, written before the deck existed.
