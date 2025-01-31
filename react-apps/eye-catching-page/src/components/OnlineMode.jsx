import { Row, Col, Container } from "reactstrap";
import phone from "../assets/images/phone.gif";
import speaker from "../assets/images/speaker.gif";

const cardData = [
	{
		imgSrc: phone,
		title: "Social Media Advertising",
		description:
			"Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram, and LinkedIn. Target specific demographics to connect with potential customers interested in your services.",
	},
	{
		imgSrc: speaker,
		title: "Influencer Marketing",
		description:
			"Partner with influential individuals or bloggers in your industry to tap into their audience. Through sponsored posts or endorsements, you can generate interest and attract new customers to your online channels.",
	},
	{
		imgSrc: speaker,
		title: "Content Marketing",
		description:
			"Publish valuable and optimized content on your website's blog. Attract organic traffic, position your brand as an authority, and encourage visitors to engage and make a purchase.",
	},
	{
		imgSrc: phone,
		title: "Referral Programs",
		description:
			"Implement a customer referral program. Incentivize existing customers to refer others with rewards like discounts or loyalty points. Word-of-mouth marketing helps acquire new customers.",
	},
];

const OnlineMode = () => {
	return (
		<section className="common-section business-section" id="online-section">
			<div className="container text-center fw-bold common-title">
				<h2 className="common-heading text-capitalize">
					Generating New Customers Via <br />
					Online Mode
				</h2>
				<hr className="w-25 mx-auto" />
			</div>

			<Container>
				<Row className="">
					{cardData.map((card, index) => (
						<Col lg="6" md="12" key={index}>
							<div className="d-flex px-2 py-3 shadow my-4">
								<img
									alt="GIF Image"
									className=" d-md-block d-none  img-fluid"
									src={card.imgSrc}
									width="150px"
								/>

								<div>
									<p className="mb-3 fw-bolder">{card.title} </p>
									<p>{card.description}</p>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default OnlineMode;
