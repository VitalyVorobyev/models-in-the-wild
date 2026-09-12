import { useEffect, useState } from "react";
import type { RevealApi } from "reveal.js";
import { sectionOfSlide } from "../slides";
import SectionMap from "./SectionMap";

/**
 * The persistent bottom bar: progress rail, section label, slide number — plus
 * the key binding that opens the section map.
 *
 * Rendered as a sibling of `.reveal`, not a child of it. `.reveal` is where
 * Reveal appends `.backgrounds`, `.progress`, `.controls` and `.slide-number`,
 * and there is no reason to have React and Reveal writing into the same parent.
 * `position: fixed` means it costs no layout either way.
 *
 * Reveal's own `progress` is switched off in App.tsx; the rail here is the only
 * one, so there is a single owner for the bar's design.
 *
 * The bar is pinned to the scaled canvas, not to the viewport. It takes its
 * colours from the active slide's `data-theme`, so it has to sit ON that slide:
 * whenever the window is not 16:9 Reveal letterboxes the canvas, and a bar at
 * the bottom of the viewport lands on the dark backdrop instead — where the
 * paper theme's near-black ink is invisible against `--dark`. `measure()` reads
 * the canvas rect back and the bar follows it.
 */

interface Position {
  /** 0-based flat index, as Reveal reports it. */
  index: number;
  total: number;
  theme: string;
}

const INITIAL: Position = { index: 0, total: 1, theme: "paper" };

/**
 * Publishes the canvas rect as CSS variables on :root, in screen pixels.
 *
 * Two things need it and neither is a React tree: this bar, and Reveal's own
 * `.controls`, which are appended inside `.reveal` and would otherwise be
 * offset from the viewport and collide with the bar as soon as the canvas is
 * letterboxed. tokens.css defines all three as 0px so the CSS is correct before
 * this ever runs.
 */
function publishCanvasBox(): void {
  // `.slides` is the element Reveal applies its scale transform to, so its
  // bounding rect is the canvas as rendered rather than the 1920x1080 it
  // claims to be.
  const slides = document.querySelector(".reveal .slides");
  if (!slides) return;
  const rect = slides.getBoundingClientRect();
  if (rect.width === 0) return;

  // The canvas can overflow the viewport by a pixel or two at some aspect
  // ratios; clamping keeps the bar on screen rather than just off the bottom.
  const style = document.documentElement.style;
  style.setProperty("--canvas-left", `${Math.max(0, rect.left)}px`);
  style.setProperty("--canvas-right", `${Math.max(0, window.innerWidth - rect.right)}px`);
  style.setProperty("--canvas-bottom", `${Math.max(0, window.innerHeight - rect.bottom)}px`);
}

function read(deck: RevealApi): Position {
  // Typed as non-nullable by reveal.js, but it genuinely is undefined between
  // construction and the first layout pass, which is when `ready` fires.
  const current: HTMLElement | undefined = deck.getCurrentSlide();
  return {
    index: current ? Math.max(0, deck.getSlides().indexOf(current)) : 0,
    total: deck.getTotalSlides(),
    theme: current?.dataset.theme ?? "paper",
  };
}

export default function DeckChrome({ deck }: { deck: RevealApi | null }) {
  const [position, setPosition] = useState<Position>(INITIAL);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    if (!deck) return;

    const sync = () => {
      setPosition(read(deck));
      publishCanvasBox();
    };
    sync();
    deck.on("slidechanged", sync);
    deck.on("ready", sync);
    // Reveal recomputes its scale on `resize`; the window listener catches the
    // cases it does not fire for, such as a devtools pane opening.
    deck.on("resize", sync);
    window.addEventListener("resize", sync);

    return () => {
      deck.off("slidechanged", sync);
      deck.off("ready", sync);
      deck.off("resize", sync);
      window.removeEventListener("resize", sync);
    };
  }, [deck]);

  // `M` for map. Bound on the window rather than through Reveal's `keyboard`
  // config so that SectionMap can intercept the same key to close itself
  // without the two bindings racing.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "m" && event.key !== "M") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();
      setMapOpen((open) => !open);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { index, total, theme } = position;
  const section = sectionOfSlide[index];
  const label = section
    ? section.number
      ? `${section.number} · ${section.title}`
      : section.title
    : "";

  // Slide 1 carries its own footer band; chrome on top of it is noise.
  const hidden = index === 0;
  const progress = total > 1 ? index / (total - 1) : 0;

  return (
    <>
      <div
        className={`chrome chrome--${theme}${hidden ? " chrome--hidden" : ""}`}
        data-testid="deck-chrome"
      >
        <div className="chrome__rail">
          <span className="chrome__rail-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
        <div className="chrome__row">
          <button className="chrome__section" onClick={() => setMapOpen(true)} type="button">
            {label}
          </button>
          <span className="chrome__count">
            <span className="chrome__num">{index + 1}</span>
            <span className="chrome__total">/ {total}</span>
          </span>
        </div>
      </div>

      <SectionMap
        current={index}
        deck={deck}
        onClose={() => setMapOpen(false)}
        open={mapOpen}
        total={total}
      />
    </>
  );
}
