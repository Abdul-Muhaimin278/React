import CoverageGroup from "./FormData";

function CoverageData() {
  const CoverageForm = [
    {
      group: "./SVGs/Group.svg",
      id: "general",
      h4: "General Liability",
      p: "What every brand must have",
      left: "col-md-2 form_left form_left1",
      right: "col-md-9 form_right form_right1",
    },
    {
      group: "./SVGs/Group 2.svg",
      id: "workers",
      h4: "Workers Comp",
      p: "Required if you have employees",
      left: "col-md-2 form_left form_left2",
      right: "col-md-9 form_right form_right2",
    },
    {
      group: "./SVGs/Group 3.svg",
      id: "cyber",
      h4: "Cyber Liability",
      p: "Do you sell your products online?",
      left: "col-md-2 form_left form_left3",
      right: "col-md-9 form_right form_right3",
    },
    {
      group: "./SVGs/Group 4.svg",
      id: "product",
      h4: "Product Recall",
      p: "Can you afford a large scale recall?",
      left: "col-md-2 form_left form_left4",
      right: "col-md-9 form_right form_right4",
    },
  ];

  return (
    <section className="container-fluid p-5 coverage_section">
      <h3 className="text-center pb-5">Coverage Forms</h3>
      {CoverageForm.map((item) => {
        return <CoverageGroup key={item.id} item={item} />;
      })}
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn coverage_btn">Education Center</button>
      </div>
    </section>
  );
}
export default CoverageData;
