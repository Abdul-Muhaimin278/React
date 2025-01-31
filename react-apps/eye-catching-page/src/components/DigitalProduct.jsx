/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Button } from "reactstrap";
import phone from "../assets/images/phone.gif";
import { useEffect, useState, useRef } from "react";

const DigitalProduct = () => {
	const [animate, setAnimate] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimate(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-color text-center more-info-section"
		>
			<Container>
				<Row>
					<Col lg="6" md="12" className="img-section">
						<figure>
							<img src={phone} alt="digital products" className="img-fluid" />
						</figure>
					</Col>

					<Col
						lg="6"
						md="12"
						className="d-flex flex-column justify-content-center align-items-lg-start align-items-center"
					>
						<h2
							className={`text-capitalize fw-bolder text-white text-lg-start ${
								animate ? "slide-in-right" : ""
							}`}
						>
							Steps to Build a <br /> Successful Digital Product
						</h2>

						<p
							className={`mt-3 mb-5 text-lg-start text-light-grey ${
								animate ? "slide-in-right" : ""
							}`}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravi. Risus commodo viverra maecenas
							accumsan lacus vel facilisis orem ipsum dolor sit amet,
							consectetur adipiscing.
						</p>

						<div>
							<Button className="px-5 py-2" color="primary">
								Contact us
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default DigitalProduct;
