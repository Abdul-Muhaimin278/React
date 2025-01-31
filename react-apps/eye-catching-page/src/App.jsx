import NavbarSection from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DigitalProduct from "./components/DigitalProduct";
import OnlineMode from "./components/OnlineMode";
import ExpertsPanel from "./components/ExpertsPanel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<>
			<NavbarSection />
			<Hero />
			<Services />
			<DigitalProduct />
			<OnlineMode />
			<ExpertsPanel />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
