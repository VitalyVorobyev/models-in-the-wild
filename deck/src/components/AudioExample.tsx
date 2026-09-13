import { useEffect, useRef } from "react";
import audio from "../assets/audio/market-stall.mp3";

/** The market-stall excerpt. Stops and rewinds when its slide is left. */
export default function AudioExample() {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    const observer = new MutationObserver(() => {
      if (!section.classList.contains("present")) {
        el.pause();
        el.currentTime = 0;
      }
    });
    observer.observe(section, { attributes: true, attributeFilter: ["class"] });
    return () => {
      observer.disconnect();
      el.pause();
    };
  }, []);
  return (
    <audio
      ref={ref}
      className="audio-example"
      controls
      preload="metadata"
      aria-label="Market-stall listening scene excerpt"
    >
      <source src={audio} type="audio/mpeg" />
      <track kind="captions" />
      Your browser does not support audio.
    </audio>
  );
}
