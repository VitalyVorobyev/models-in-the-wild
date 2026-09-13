import type { CSSProperties } from "react";
import { images, type SlotId } from "../content/images";

interface ImageSlotProps {
  id: SlotId;
  alt: string;
  specification?: string;
  fit?: "contain" | "cover";
  rounded?: boolean;
  style?: CSSProperties;
}
export default function ImageSlot({
  id,
  alt,
  specification,
  fit = "contain",
  rounded = false,
  style,
}: ImageSlotProps) {
  const src = images[id];
  const classes = `slot${rounded ? " slot--rounded" : ""}`;
  return src ? (
    <img src={src} alt={alt} className={classes} style={{ objectFit: fit, ...style }} />
  ) : (
    <figure className={`${classes} slot--empty`} style={style}>
      <span className="asset-label">Capture needed · {id}</span>
      <strong>{alt}</strong>
      <figcaption>
        {specification ?? "See docs/assets-needed.md for the exact capture specification."}
      </figcaption>
    </figure>
  );
}
