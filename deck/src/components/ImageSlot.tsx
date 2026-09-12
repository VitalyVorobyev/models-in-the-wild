import type { CSSProperties } from "react";
import { images, type SlotId } from "../content/images";

interface ImageSlotProps {
  id: SlotId;
  /** Doubles as alt text once a real image is in place. */
  placeholder: string;
  rounded?: boolean;
  style?: CSSProperties;
}

/**
 * Renders the screenshot registered for this slot in content/images.ts, or a
 * dashed placeholder while there isn't one. Replaces the handoff's
 * <image-slot> custom element, which only worked inside the Claude Design
 * runtime.
 */
export default function ImageSlot({ id, placeholder, rounded = false, style }: ImageSlotProps) {
  const src = images[id];
  const classes = `slot${rounded ? " slot--rounded" : ""}`;

  if (!src) {
    return (
      <div className={`${classes} slot--empty`} style={style}>
        {placeholder}
      </div>
    );
  }

  return <img src={src} alt={placeholder} className={classes} style={style} />;
}
