import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	Button,
} from "reactstrap";
import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";

const ExpertsPanel = () => {
	const cards = [
		{ img: pic1, title: "Web Development" },
		{ img: pic2, title: "Free Lancing" },
		{ img: pic3, title: "Graphic Designer" },
		{ img: pic4, title: "Wordpress Developer" },
	];
	return (
		<section className="common-section bg-color mb-5 pt-5" id="experts-panel">
			<Container className="text-center fw-bold common-title">
				<h2 className="common-heading text-white text-capitalize">
					Tips and Tricks From
					<br />
					Our Experts
				</h2>
				<hr className="w-25 mx-auto experts-line" />
			</Container>

			<Container>
				<Row>
					{cards.map((expert, index) => (
						<Col
							lg="3"
							md="6"
							sm="12"
							key={index}
							className="d-flex justify-content-center align-items-center my-3"
						>
							<Card className="experts-card">
								<CardImg top src={expert.img} alt=".nothing." />
								<CardBody>
									<CardTitle tag="h5" className="my-2">
										{expert.title}
									</CardTitle>
									<CardText className="my-3">
										Some quick example text to build on the card title and make
										up the bulk of the card&#39;s content.
									</CardText>
									<Button color="primary" className="px-4">
										Read More
									</Button>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default ExpertsPanel;
