import { useEffect, useRef, useState } from "react";
import type { RevealApi } from "reveal.js";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes";
import RevealZoom from "reveal.js/plugin/zoom";
import DeckChrome from "./components/DeckChrome";
import { slides } from "./slides";

/**
 * Reveal owns presentation; the slides own their own layout.
 *
 * `width`/`height` must stay at the design canvas size and `center` must stay
 * false: the handoff's slides were authored against a fixed 1920×1080 stage and
 * size themselves with `space-between` and `flex: 1`. Letting Reveal centre
 * them collapses every one of those layouts to content height.
 *
 * `progress` is deliberately off. DeckChrome draws the rail, the section label
 * and the slide number as one element in the deck's own type scale, so there is
 * a single owner for the bottom of the screen rather than three stylesheets
 * negotiating over it.
 */
export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [deck, setDeck] = useState<RevealApi | null>(null);

  useEffect(() => {
    if (!deckRef.current) return;

    const instance = new Reveal(deckRef.current, {
      width: 1920,
      height: 1080,
      margin: 0,
      center: false,
      hash: true,
      controls: true,
      progress: false,
      transition: "slide",
      plugins: [RevealNotes, RevealZoom],
    });

    instance.initialize().then(() => setDeck(instance));

    return () => {
      setDeck(null);
      instance.destroy();
    };
  }, []);

  return (
    <>
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {slides.map((SlideComponent, index) => (
            // Keyed by position: the components are stable module identities and
            // the array never reorders at runtime, while minification is free to
            // rewrite `SlideComponent.name`.
            // biome-ignore lint/suspicious/noArrayIndexKey: the deck sequence is static
            <SlideComponent key={index} />
          ))}
        </div>
      </div>

      {/* Sibling of `.reveal`, not a child: that element is where Reveal appends
          its own chrome, and React has no business sharing the parent. */}
      <DeckChrome deck={deck} />
    </>
  );
}
