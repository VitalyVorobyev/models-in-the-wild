# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Build the talk **Frontier Models in the Wild** iteratively with Vitaly.

## What this talk is about

This is an R&D-first internal workshop. The five projects are concrete demonstrations, but the main message is larger:

- agentic workflows are useful beyond software implementation;
- they can change research, knowledge management, communication, handoffs, and cross-department problem solving;
- the workflow matters more than isolated prompting tricks.

## How Vitaly works

1. Brainstorm conversationally with an LLM first; voice mode is especially useful.
2. Crystallize the idea into a small durable Markdown starter bundle.
3. Hand the repository to Claude Code or Codex.
4. Keep long-term context in docs + agent instructions + reusable skills.
5. Give the model freedom to be creative and proactive; do not specify every last detail.
6. Explicitly ask the model to challenge assumptions and remain critical.
7. Prefer reproducible evidence, tests, measurements, primary sources, and concrete artifacts over persuasive narratives.
8. Stronger models should reduce micromanagement and orchestration complexity, not increase it.

## Deck rules

- Fixed title: **Frontier Models in the Wild**.
- Visual, sparse, demo-driven. Avoid walls of text.
- One idea per slide.
- Use the projects to reveal different aspects of the workflow; do not force the same template onto all five.
- Distinguish rigid intent/invariants/evidence from flexible implementation.
- Keep company implications concrete and cross-departmental.
- Never fabricate metrics, project history, or lessons. Use placeholders when evidence is missing.
- Treat this repository as the durable source of truth, not chat history.

Read `skills/deck-authoring/SKILL.md` before changing the deck structure.

## Commands

`deck/` is the only package. **bun, not npm** — a `package-lock.json` appearing here is a defect.

```bash
cd deck && bun install
bun run dev          # Vite dev server on :4330
bun run lint         # Biome
bun run typecheck    # tsc --noEmit
bun run build        # typecheck + production bundle
bun run build:pages  # the same, with --base=/models-in-the-wild/ (what CI deploys)
```

`lint`, `typecheck` and `build` each run as their own CI job on every PR. Do not weaken any of
them to make a change pass.

There are no tests. If you need one, propose it rather than asserting a gate that does not exist.

## How content flows

Docs are the contract; the deck renders them. Work upstream first.

```
docs/talk-brief.md      audience, 60-min format, core thesis, the five projects + their URLs
docs/narrative.md       the claim, workflow spine, rigid-vs-flexible, five capabilities, ending
docs/projects/*.md      one file per project — the raw material a slide may use, with evidence
        ↓
docs/slide-map.md       the deck contract, v0.6, 30 slides
        ↓
deck/src/slides/        one file per slide, in that order
```

- All five projects are written up under `docs/projects/`, in deck order (Family Documents
  Organizer, CV Atlas, CV Tech Radar, Deutsch-Atlas, ScoreQuant). Each carries an **Evidence**
  table (repo paths and commands) and a **Do not claim** list; the deck must not say more than
  those files support. `project-template.md` is the shape for any future write-up.
- `docs/session-handoff-2026-09-12.md` is the narrative input the v0.3 stories came from. It is
  a record, not a contract — where it and `docs/projects/*.md` differ, the project file wins,
  because it was checked against the repository.
- Every number shown on a slide lives in `deck/src/content/evidence.ts` with the command or
  path it was measured by and the date. Re-measure; never edit a value by hand.
- `docs/assets-needed.md` specifies the image and audio slots — file names, aspect ratios, what each
  shot must show, and the redaction rule for the Family Documents card. The current register distinguishes actual captures, generated scientific plots and explicit missing-asset specifications. The unsafe Family montage image has been removed.
- Changing slide order or count means editing `docs/slide-map.md` and `deck/src/slides/index.ts`
  in the same change. They must agree.

## Deck architecture

```
deck/src/
├── main.tsx          @fontsource imports, stylesheets, mount
├── App.tsx           Reveal initialization; maps over the slide array, holds no copy
├── styles/
│   ├── tokens.css    the Vitavision type scale, spacing and palette
│   ├── base.css      Reveal integration and resets
│   └── components.css the layout archetypes
├── components/       Slide, SlideHeader, ProjectOpener, Implication, ImageSlot,
│                     AtlasGraph, ScoreExperiment, ScoreFigure, Tex (KaTeX), AudioExample,
│                     Notes, DeckChrome, SectionMap
├── content/
│   ├── projects.ts   the five projects — names, URLs, one-liners, capabilities
│   ├── evidence.ts   every figure a slide shows, with its source command and date
│   └── images.ts     slot id → imported asset; the only file to touch when adding art
├── slides/           01-title.tsx … 30-closing.tsx, plus index.ts (sections + the sequence)
└── assets/images/    screenshots and photos
```

`slides/index.ts` exports `sections` — the seven blocks of the talk — and **derives** `slides`,
`sectionOfSlide` and `sectionStart` from it. Add a slide to a section; never maintain a parallel
flat list. `DeckChrome` and `SectionMap` read that registry, so a new slide appears in the footer
label and on the `M` map with no further edit.

Navigation the deck provides beyond arrow keys: `M` opens the named section map, `Esc` opens
Reveal's own thumbnail overview, `S` opens the speaker view, `G` jumps to a slide number,
alt-click zooms. Fragmented slides: 4 (the return arc), 14 (digest, then the person) and 17 (corpus, tools,
product) — the first beat is always visible and each click adds
the next.

Load-bearing details, each of which broke the deck during the port:

- **Reveal must stay at `width: 1920, height: 1080, margin: 0, center: false`.** The slides were
  authored against a fixed canvas and size themselves with `space-between` and `flex: 1`;
  centring them collapses every one of those layouts.
- **`Slide` renders its layout on a `<div>` inside the `<section>`, not on the section itself.**
  Reveal sets `display` on the active section and would override the flex column.
- **`#root` needs an explicit height**, or Reveal measures a zero-height container and renders
  the deck at its 0.2 minimum scale.
- **Never widen a `text-transform` reset to `p`** — it beats the uppercase mono kickers.
- Reveal 6 removed `dist/` from its exports map: import `reveal.js/reveal.css`, not
  `reveal.js/dist/reveal.css`.
- **Chrome is measured in screen pixels, the slides in canvas pixels.** `DeckChrome` and
  `SectionMap` live outside Reveal's 1920×1080 transform, so a token from the type scale renders
  at about twice its apparent in-slide size. Use the `--chrome-*` / `--map-*` clamps instead.
- **Reveal's `has-dark-background` hook is inert in this deck.** `getContrastClass()` reads
  `data-background-color` off the `<section>`, else the computed background of the generated
  `.slide-background` div; this deck paints its background on the inner `.slide`, so neither
  resolves. `Slide` therefore emits `data-theme`, which is what the chrome reads. Do not switch
  to `data-background-color` — Reveal parses it itself and cannot resolve a CSS variable, so it
  would mean hand-syncing colour literals out of `tokens.css`.
- **`body.reveal-viewport` must be repainted.** Reveal's own `background-color: #fff` on it
  outranks `html, body`, and the white shows in overview mode and in letterboxed windows.
- **Chrome follows the canvas, not the viewport.** Any window that is not exactly 16:9 letterboxes
  the canvas, and anything pinned to the viewport edge lands on the dark backdrop instead of the
  slide — where the paper theme's near-black ink is invisible. `DeckChrome` publishes the canvas
  rect as `--canvas-left/-right/-bottom` on every Reveal `resize`; `.chrome` and Reveal's own
  `.controls` are both positioned from those. Test any new chrome at a non-16:9 window, because at
  1920x1080 the canvas fills the screen and the bug cannot appear.

Adding an image is a one-line edit in `content/images.ts`; slides already reference the slots by
id and render a dashed placeholder until a file appears. Put art in `src/assets/images/` rather
than `public/` so Vite rewrites its URL for the Pages base path.

## Deployment

`main` deploys to https://vitalyvorobyev.github.io/models-in-the-wild/ via
`.github/workflows/deploy.yml`. Pages is already configured with GitHub Actions as the source.
The base path is applied by `build:pages`, not by `vite.config.ts`, so local `dev` stays at `/`.

## The design handoff

The deck was ported from a Claude Design export that lived at
`design_handoff_frontier_models_deck/`. It was **removed** once the deck superseded it — v0.3
is 31 slides against its 22, on a different project order, with components and navigation it
never had. It stays in history: `git show f4e1d0d --stat` lists it, and
`git show f4e1d0d:'design_handoff_frontier_models_deck/README.md'` is its token and layout spec.

- `deck/src/styles/tokens.css` is now the only contract for the type scale, spacing and
  palette. The export's numbers were transcribed into it verbatim; do not reintroduce a second
  copy of them.
- The authoritative font and colour values live in `/Users/vitalyvorobyev/vitavision/src/index.css`,
  which is a separate project — copy values from it, never depend on it.
- `VitavisionLogo.tsx` is ported from that same design system, minus its framer-motion animation.

## v0.6 synthesis (in progress)

Branch `deck-v0.6-synthesis` combines the v0.3 narrative with the v0.5 evidence layer. The
v0.5 revision is preserved on `deck-v0.5-codex-visual` (PR #3, reference only). Rules that
came out of the rebuild, in dialogue with Vitaly:

- **Every project section is: one dark `ProjectOpener` (name, subtitle, link, hero) → mechanism
  slides with real evidence → one accent `Implication`.** The implication sentences live in
  `content/projects.ts`. No standalone title cards.
- **Diagrams are HTML/CSS compositions, not boxes and lines.** The v0.5 `Diagram` SVG
  primitives and the first HTML rewrite of the workflow slide both read as wireframes and were
  rejected. Slide 4's ring (`.cycle` in `components.css`, built from `conic-gradient` and CSS
  trigonometry) is the reference for what a mechanism slide should look like.
- **Plain, concise copy.** Statements, not captions; no "agentic" phrasing on slides; the
  "do not claim" hedges stay in `docs/projects/*.md`. Words Vitaly does not use: "bespoke".
- **Never nest a `<section>` inside a slide.** Reveal absolutely positions every section under
  `.slides`, so an inner one collapses to zero height and shifts the slide.
- `.reveal p { margin: 0 }` in `base.css` outranks a single-class rule; prefix with `.slide` when
  a paragraph needs a margin.
- Numbers come through `evidence.ts` (a `measured` date per figure when re-measured after
  `MEASURED`) and `content/generated/*.json`; reproduce with `scripts/export-project-evidence.py`,
  `export-scorequant.py` (data) and `render-scorequant.py` (the deck-styled plots, run with
  the ScoreQuant venv python).
- Formulas are typeset by `components/Tex.tsx` (KaTeX, bundled; its stylesheet is imported in
  `main.tsx`). The ScoreQuant section is one worked example, a Gaussian peak on a Gaussian
  background with parameters (f, m); `scripts/export-scorequant.py` is its single source.

Review captures go to `deck/.review/` (gitignored); `deck/.review/shoot.py` screenshots a list
of slide indices at 1920×1080 with Playwright, including fragment states.
