import reactSVG from "../assets/react.svg";
import reduxSVG from "../assets/redux.svg";
import firebaseSVG from "../assets/firebase-1.svg";
import { BsArrowReturnRight } from "react-icons/bs";
import {
	Card,
	CardBody,
	CardImg,
	CardLink,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from "reactstrap";

const Services = () => {
	const cards = [
		{
			title: "React",
			caption:
				"React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components that manage their own state.",
			image: reactSVG,
			className: "spin",
			link: "https://react.dev/",
		},
		{
			title: "Redux",
			caption:
				"Redux is a state management library for JavaScript applications, often used with React. It centralizes the application's state in a single store, making it easier to manage and debug.",
			image: reduxSVG,
			className: "bounce",
			link: "https://redux.js.org/",
		},
		{
			title: "Firebase",
			caption:
				"Firebase is Google's mobile and web app development platform that helps developers build apps and games. Firebase provides a backend infrastructure, real-time database, and authentication services.",
			image: firebaseSVG,
			className: "pulse",
			link: "https://firebase.google.com/",
		},
	];

	return (
		<section className="services-section">
			<div className="container text-center fw-bold common-title">
				<h2 className="common-heading text-capitalize">
					What we will do for
					<br /> your business
				</h2>
				<hr className="w-25 mx-auto" />
			</div>

			<Container className="mt-5">
				<Row>
					{cards.map((card, index) => (
						<Col lg="4" md="12" key={index} className="my-3">
							<Card className="text-center rounded overflow-hidden border py-5 px-1 card-box">
								<CardImg
									src={card.image}
									alt={card.title}
									className={`img-fluid card-img ${card.className}`}
								/>
								<CardBody>
									<CardTitle tag="h5" className="my-3 fw-normal">
										{card.title}
									</CardTitle>
									<CardText className="mb-5">{card.caption}</CardText>
								</CardBody>
								<div className="d-flex justify-content-center align-items-center">
									<CardLink
										href={card.link}
										className="icon-span rounded-circle d-flex justify-content-center align-items-center"
										target="_blank"
									>
										<BsArrowReturnRight />
									</CardLink>
								</div>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
