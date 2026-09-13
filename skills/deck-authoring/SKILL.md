---
name: deck-authoring
description: Author or change slides in the Frontier Models in the Wild deck — the slide registry, the evidence pipeline, the components, and the commands that must pass. Use when adding, cutting, reordering or rewriting a slide in deck/src/slides, re-measuring a figure in evidence.ts, regenerating the ScoreQuant or project data, or capturing review screenshots. Voice, cut tests and the review loop live in the global talk-authoring skill; read that one too before writing slide copy.
---

# Deck authoring

This is the mechanics of *this* deck. How to write the copy — the register, the words Vitaly does
not use, what earns a slide, the order an explanation must follow, the round protocol — is the
global `talk-authoring` skill. Read it before proposing copy; read this before touching files.

## Before you edit

1. `cd deck && bun install` once; **bun, not npm** — a `package-lock.json` here is a defect.
2. `bun run format` **before reading a file you intend to edit**. Biome rewraps JSX, so a scripted
   replacement against text you read earlier silently no-ops. Match the wrapped text and assert the
   replacement landed.
3. Work upstream first: `docs/talk-brief.md` → `docs/narrative.md` → `docs/projects/*.md` →
   `docs/slide-map.md` → `deck/src/slides/`. A slide may not say more than its project file
   supports, and never more than its "Do not claim" list allows.

## The registry

`deck/src/slides/` holds one file per slide, `NN-slug.tsx`. `deck/src/slides/index.ts` declares
`sections` — the seven blocks of the talk — and **derives** `slides`, `sectionOfSlide` and
`sectionStart` from it. There is no parallel flat list to maintain, and `DeckChrome` and
`SectionMap` read the same registry, so a slide added to a section appears in the footer label and
on the `M` map with no further edit.

To add or move a slide:

1. Write or rename the slide file.
2. Add it to the right section in `index.ts` — order there is presentation order.
3. Update `docs/slide-map.md` in the same change, including the section's `Decisions:` paragraph if
   something was cut or rejected. The map and the registry must agree on order and count.

## Composing a slide

- Build on `Slide` and `SlideHeader`. A project section is one dark `ProjectOpener` (name,
  subtitle, link, hero) → mechanism slides carrying real evidence → one accent `Implication`.
- Mechanism slides are HTML/CSS compositions with their own geometry — `.cycle` on slide 4 is the
  reference — never boxes joined by lines. The `Diagram` SVG primitives are gone; do not bring them
  back in CSS either.
- **Never nest a `<section>` inside a slide.** Reveal absolutely positions every section under
  `.slides`, so an inner one collapses to zero height.
- Every slide passes `notes` to `Slide`; that text is the speaker view (`S`). Keep it current,
  including the click count where the slide is fragmented.
- Fragments are for slides you talk *through* — currently 4, 14 and 17 — not for hiding a wall of
  text. The first beat is never a fragment: a slide must never render empty when reached from the
  section map.
- Copy that repeats — project names, URLs, capabilities, the implication sentences — lives in
  `deck/src/content/projects.ts`, not in slide files, so the accent slides and the closing
  synthesis cannot drift apart.
- Art is a one-line edit in `deck/src/content/images.ts`; slides reference slots by id and render a
  dashed placeholder until a file appears. Put files in `src/assets/images/`, never `public/`.
- Formulas go through `components/Tex.tsx` (KaTeX, bundled, no network).

## Evidence

Every figure a slide shows lives in `deck/src/content/evidence.ts` with the command or path that
produced it and a `measured` date when re-checked after the file-level `MEASURED`. Re-measure in
the project's own repository; never edit a value by hand and never carry one over from a
conversation.

Generated data is reproduced, not authored:

```bash
# adjacent checkouts; ATLAS_REPO / RADAR_REPO / SCOREQUANT_REPO override the defaults
python3 scripts/export-project-evidence.py          # → deck/src/content/generated/projects.json
SCOREQUANT_REPO=<path> <scorequant>/.venv/bin/python scripts/export-scorequant.py
                                                    # → deck/src/content/generated/scorequant.json
<scorequant>/.venv/bin/python scripts/render-scorequant.py
                                                    # → deck/src/assets/images/score/*.svg
```

The two ScoreQuant scripts need ScoreQuant's own virtualenv, not this repo's tooling. They are
read-only against the source checkouts.

## Before reporting

```bash
cd deck && bun run lint && bun run typecheck && bun run build
python deck/.review/shoot.py deck/.review/<round> <0-based indices, comma separated>
```

`lint`, `typecheck` and `build` are three separate CI jobs; none may be weakened to make a change
pass. There are no tests — if you need one, propose it rather than asserting a gate that does not
exist. Screenshots land in the gitignored `deck/.review/` as `sNN.png`, with fragment states as
`sNN-fK.png`; attach them with the report.

The Reveal and canvas invariants stay in `CLAUDE.md`, which is loaded every session — read them
there before changing layout, scale or chrome.
