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
 */

interface Position {
  /** 0-based flat index, as Reveal reports it. */
  index: number;
  total: number;
  theme: string;
}

const INITIAL: Position = { index: 0, total: 1, theme: "paper" };

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

    const sync = () => setPosition(read(deck));
    sync();
    deck.on("slidechanged", sync);
    deck.on("ready", sync);

    return () => {
      deck.off("slidechanged", sync);
      deck.off("ready", sync);
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
            {index + 1} / {total}
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
