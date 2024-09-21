import CoverageGroup from "./FormData";
import CoverageForm from "../API/CoverageForm.json";

function CoverageData() {
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
