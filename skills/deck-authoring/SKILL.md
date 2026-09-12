# Skill: deck authoring

When editing the presentation:

1. Start from the argument, not visual decoration.
2. Prefer a live artifact, screenshot, diagram or one strong sentence over bullet lists.
3. Each project must demonstrate a different capability of the workflow.
4. Keep technical depth where it proves something; remove detail that is merely impressive.
5. Every number on a slide comes from `deck/src/content/evidence.ts`, with the command or path
   that measured it. Re-measure in the project repository; never remember a figure from chat.
   Every project story stays within its `docs/projects/*.md` "Do not claim" list.
6. For every strong claim, ask what concrete artifact, test, source, screenshot or result can support it.
7. After each project section, connect the lesson to company-scale R&D or cross-department work.
8. Avoid generic “AI transformation” language. Use concrete workflows.

## Where the deck lives

`deck/src/slides/` holds one file per slide, named `NN-slug.tsx`, and
`deck/src/slides/index.ts` holds the ordered array that *is* the deck sequence.

`index.ts` exports `sections` — the seven blocks of the talk — and derives the flat `slides`
sequence from it. There is no separate list to keep in step.

To add or move a slide:

1. Write or rename the slide file.
2. Add it to the right section in `index.ts` — order there is presentation order.
3. Update `docs/slide-map.md` in the same change. The map and the registry must agree.

The section registry also drives the footer label and the `M` section map, so a slide added to a
section shows up in both with no further edit.

Compose from `deck/src/components/` before writing new layout: `SectionOpener` for a dark
project opener, `Implication` for the accent beat that closes a project section, `SlideHeader`
for the kicker + title pair, `Split`, `Grid`, `HairlineTable`. A genuinely one-off layout
belongs inline in its own slide file — slides 13, 17 and 29 already work that way. Do not bend a shared component into a shape it was not meant for
just to avoid writing markup once.

Every slide passes `notes` to `Slide`; that text is the speaker view (`S`). Keep it current when
the slide changes — including the click count, where the slide is fragmented.

Fragments are for slides you talk *through* (5, 17, 26, 29), not for hiding a wall of text. The
first beat is never a fragment: a slide must never render empty when you jump to it from the
section map.

Copy that repeats across slides — project names, URLs, capabilities — belongs in
`deck/src/content/projects.ts`, not in the slide files.
