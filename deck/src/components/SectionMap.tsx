import { useEffect, useRef, useState } from "react";
import type { RevealApi } from "reveal.js";
import { sectionStart, sections } from "../slides";

/**
 * The named section map — the deck's answer to "where am I and how do I get to
 * the ScoreQuant part".
 *
 * It reads `sections` from slides/index.ts directly, so adding a slide there
 * puts it on the map with no edit here. Reveal's own overview (Esc) is left
 * alone and still works: while this panel is open, Escape is intercepted in the
 * capture phase and stopped, and when it is closed the key falls through to
 * Reveal as usual, so the two navigators coexist rather than fight.
 */

interface SectionMapProps {
  open: boolean;
  /** 0-based flat index of the current slide. */
  current: number;
  total: number;
  deck: RevealApi | null;
  onClose: () => void;
}

export default function SectionMap({ open, current, total, deck, onClose }: SectionMapProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<Element | null>(null);
  const [highlight, setHighlight] = useState(0);

  // Open on the section the deck is actually in, not wherever it was left.
  useEffect(() => {
    if (!open) return;
    setHighlight(
      sectionStart.reduce((best, start, position) => (current >= start ? position : best), 0),
    );
  }, [open, current]);

  useEffect(() => {
    if (!open) {
      return;
    }

    restoreFocusTo.current = document.activeElement;
    panelRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
        case "m":
        case "M":
          event.preventDefault();
          event.stopPropagation();
          onClose();
          break;
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault();
          event.stopPropagation();
          setHighlight((row) => Math.min(sections.length - 1, row + 1));
          break;
        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault();
          event.stopPropagation();
          setHighlight((row) => Math.max(0, row - 1));
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          event.stopPropagation();
          deck?.slide(sectionStart[highlight] ?? 0);
          onClose();
          break;
        default:
          break;
      }
    };

    // Capture phase, so this runs before Reveal's own document-level handler.
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      if (restoreFocusTo.current instanceof HTMLElement) restoreFocusTo.current.focus();
    };
  }, [open, onClose, deck, highlight]);

  if (!open) return null;

  const jump = (index: number) => {
    deck?.slide(index);
    onClose();
  };

  return (
    <div className="map">
      {/* A real button rather than a click handler on the backdrop div: it is
          keyboard-reachable and needs no a11y escape hatch. */}
      <button
        aria-label="Close section map"
        className="map__scrim"
        onClick={onClose}
        type="button"
      />
      <div
        aria-label="Deck sections"
        aria-modal="true"
        className="map__panel"
        ref={panelRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="map__head">
          <span className="map__title">Sections</span>
          <span className="map__hint">
            {current + 1} / {total} · esc
          </span>
        </div>

        <ol className="map__list">
          {sections.map((section, position) => {
            const start = sectionStart[position] ?? 0;
            const end = start + section.slides.length;
            const active = current >= start && current < end;

            return (
              <li
                className={`map__row${active ? " map__row--active" : ""}${
                  position === highlight ? " map__row--highlight" : ""
                }`}
                key={section.id}
              >
                <button className="map__label" onClick={() => jump(start)} type="button">
                  {section.number ? (
                    <span className="map__number">{section.number}</span>
                  ) : (
                    <span className="map__number map__number--none">··</span>
                  )}
                  <span className="map__name">{section.title}</span>
                  <span className="map__range">
                    {start + 1}—{end}
                  </span>
                </button>

                <div className="map__dots">
                  {section.slides.map((_, offset) => {
                    const slideIndex = start + offset;
                    const state =
                      slideIndex === current ? "here" : slideIndex < current ? "past" : "ahead";

                    return (
                      <button
                        aria-label={`Slide ${slideIndex + 1}`}
                        className={`map__dot map__dot--${state}`}
                        key={slideIndex}
                        onClick={() => jump(slideIndex)}
                        type="button"
                      />
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
