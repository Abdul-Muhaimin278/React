import { Container, Row, Col, Button } from "reactstrap";
import heroPic from "../assets/images/heroPic.webp";

const Hero = () => {
	return (
		<section className="bg-main bg-color hero-section py-5">
			<Container className="d-flex align-items-center justify-content-center ">
				<Row className="mb-lg-5">
					<Col
						lg="6"
						className="d-flex flex-column justify-content-center align-items-lg-start align-items-sm-center order-lg-0 order-1 mt-5 mt-lg-0"
					>
						<h1 className="text-capitalize fw-bold text-white">
							Hi, I&apos;m <span className="name">Abdul Muhaimin</span>
						</h1>
						<p className="mt-3 mb-5  text-light-grey">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravi.
						</p>

						<div className="text-center w-100 text-lg-start">
							<Button color="primary" className="px-5 py-2">
								Contact me
							</Button>
						</div>
					</Col>
					<Col lg="6" className="order-lg-1 order-0 ml-5">
						<div className="text-center">
							<img src={heroPic} alt="Hero Pic" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
