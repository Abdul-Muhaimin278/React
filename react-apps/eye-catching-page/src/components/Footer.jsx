import { Container, Row, Col, Input, Button, FormGroup } from "reactstrap";
import map from "../assets/images/map.gif";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="main-footer-section">
			<div className="contact-details">
				<Container className="p-5">
					<Row className="">
						<Col lg="4" md="6">
							<div className="contact-div d-flex flex-column justify-content-center align-items-center">
								<div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
									<img
										src={map}
										alt="GIF Image"
										className="img-fluid"
										width="100px"
									/>
								</div>
								<p className="text-white">(+00) 1234 5678</p>
							</div>
						</Col>
						<Col lg="4" md="6">
							<Container className="footer-section text-white">
								<ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
									<li className="fs-5">
										<a>Home</a>
									</li>
									<li className="fs-5">
										<a>Services</a>
									</li>
									<li className="fs-5">
										<a>Contact</a>
									</li>
									<li className="fs-5">
										<a>About</a>
									</li>
								</ul>
							</Container>
						</Col>
						<Col lg="4" md="6" className="mx-auto">
							<h4 className=" text-white">Subscribe</h4>
							<FormGroup className="input-group mb-3 w-100">
								<Input type="text" placeholder="Recipient's username" />
								<Button color="primary" className="input-group-text">
									Subscribe
								</Button>
							</FormGroup>
						</Col>
					</Row>
				</Container>

				<Container fluid>
					<hr className="mx-auto" />

					<Row>
						<Col lg="8" xs="12" className="text-lg-start text-sm-center">
							Copyright ©2024 All rights reserved.
							<span className="bg-theme">Abdul Muhaimin</span>
						</Col>
						<Col lg="4" xs="12">
							<div className="d-flex justify-content-center gap-2">
								<div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
									<BsInstagram />
								</div>
								<div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
									<BsWhatsapp />
								</div>
								<div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
									<BsTwitter />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
