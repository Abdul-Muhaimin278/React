import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Contact = () => {
	return (
		<section className="mb-5 pt-5" id="contact-section">
			<Container className="rounded p-3 px-5 contact-container">
				<div className="text-center">
					<h2 className="text-capitalize">Contact</h2>
				</div>
				<Form>
					<FormGroup>
						<Label for="firstName" className="fw-bold">
							First Name
						</Label>
						<Input
							className="contact-input rounded-pill px-3"
							type="text"
							required
							id="firstName"
							placeholder="First name"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="lastName" className="fw-bold">
							Last Name
						</Label>
						<Input
							className="contact-input rounded-pill px-3"
							type="text"
							id="lastName"
							placeholder="Last name"
						/>
					</FormGroup>

					<FormGroup>
						<Label for="email" className="fw-bold">
							Email
						</Label>
						<Input
							className="contact-input rounded-pill px-3"
							type="email"
							id="email"
							placeholder="name@example.com"
						/>
					</FormGroup>

					<FormGroup>
						<Label for="message" className="fw-bold">
							Message
						</Label>
						<Input
							className="contact-input rounded-pill px-3"
							type="textarea"
							id="message"
						/>
					</FormGroup>

					<Button type="submit" color="primary">
						Submit
					</Button>
				</Form>
			</Container>
		</section>
	);
};

export default Contact;
