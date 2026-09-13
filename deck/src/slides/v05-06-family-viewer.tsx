import ImageSlot from "../components/ImageSlot";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Family Documents Organizer"
      notes="2 minutes. Capture gap: the previous montage image exposed personal information and has been removed. Do not open private documents during the talk. The viewer is local; Claude is the agent that works over the files, not a search backend inside the application."
      className="editorial"
    >
      <SlideHeader kicker="Organize" title="Family Documents Organizer" />
      <div className="hero">
        <ImageSlot
          id="family-viewer"
          alt="Family Documents: local register and document viewer"
          specification="Capture the actual local viewer at 1600 × 900 or larger. Keep category navigation, one register selection and the PDF pane. Replace all names, titles, identifiers, filenames and document content with opaque redaction before export; no browser tabs."
        />
      </div>
      <div className="caption-row">
        <span>Category navigation</span>
        <span>Register entry</span>
        <span>Document viewer</span>
      </div>
    </Slide>
  );
}
