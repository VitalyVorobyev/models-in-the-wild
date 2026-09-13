import DepartmentMap from "../components/DepartmentMap";
import Slide from "../components/Slide";
import SlideHeader from "../components/SlideHeader";
export default function Page() {
  return (
    <Slide
      label="Information moving across departments"
      notes="4 minutes; select or reveal four flows. These are hypothetical company workflows, not assertions about today\u2019s organization or measured savings. R&D result \u2192 reviewed maintained knowledge \u2192 Service and Sales; Service reports \u2192 recurring issue evidence \u2192 Quality, Product, R&D; Sales/customer requirements \u2192 reviewed requirements \u2192 Application Engineering and Software; external updates \u2192 technical radar \u2192 R&D. Ask which handoff currently loses information and who would own the durable artifact. Quality and Product receive issue evidence rather than a generated final decision."
      className="editorial"
    >
      <SlideHeader kicker="Across departments" title="Information moving across departments" />
      <DepartmentMap />
      <p className="caption">
        Proposed workflows · each published artifact has a human owner and review step
      </p>
    </Slide>
  );
}
