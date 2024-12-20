import NavBar from "./components/Nav";
import HeroSection from "./components/HeroSection.";
import CoverageData from "./components/CoverageForm";
import LinkSection from "./components/LinksSection";
import FooterSection from "./components/FooterSection";

export default function UI() {
	return (
		<>
			<NavBar></NavBar>
			<HeroSection></HeroSection>
			<CoverageData></CoverageData>
			<LinkSection></LinkSection>
			<FooterSection></FooterSection>
		</>
	);
}
