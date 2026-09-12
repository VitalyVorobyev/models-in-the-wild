# Skill: deck authoring

When editing the presentation:

1. Start from the argument, not visual decoration.
2. Prefer a live artifact, screenshot, diagram or one strong sentence over bullet lists.
3. Each project must demonstrate a different capability of the workflow.
4. Keep technical depth where it proves something; remove detail that is merely impressive.
5. Preserve placeholders until Vitaly supplies the project story.
6. For every strong claim, ask what concrete artifact, test, source, screenshot or result can support it.
7. After each project section, connect the lesson to company-scale R&D or cross-department work.
8. Avoid generic “AI transformation” language. Use concrete workflows.

## Where the deck lives

`deck/src/slides/` holds one file per slide, named `NN-slug.tsx`, and
`deck/src/slides/index.ts` holds the ordered array that *is* the deck sequence.

To add or move a slide:

1. Write or rename the slide file.
2. Update `index.ts` — order there is presentation order.
3. Update `docs/slide-map.md` in the same change. The map and the array must agree.

Compose from `deck/src/components/` before writing new layout: `SectionOpener` for a dark
project opener, `SlideHeader` for the kicker + title pair, `Split`, `Grid`, `HairlineTable`,
`TeachesUs`. A genuinely one-off layout belongs inline in its own slide file — slides 3, 9, 11
and 21 already work that way. Do not bend a shared component into a shape it was not meant for
just to avoid writing markup once.

Every slide passes `notes` to `Slide`; that text is the speaker view (`S`). Keep it current when
the slide changes.

Copy that repeats across slides — project names, URLs, capabilities — belongs in
`deck/src/content/projects.ts`, not in the slide files.
