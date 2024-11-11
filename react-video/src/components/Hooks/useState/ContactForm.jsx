import { useState } from "react";
import "./index.css";

export default function ContactForm() {
	// const [username, setUsername] = useState("");
	// const [email, setEmail] = useState("");
	// const [message, setMessage] = useState("");
	const [contacts, setContacts] = useState({
		username: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setContacts((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(contacts);
		// 	const contactData = {
		// 		username,
		// 		email,
		// 		message,
		// 	};
	};

	return (
		<div className="container">
			<div className="card">
				<h1>Contact Form</h1>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor="username">username</label>
					<input
						required
						type="text"
						name="username"
						autoComplete="off"
						className="form-control"
						value={contacts.username}
						// onChange={(e) => setUsername(e.target.value)}
						onChange={handleInputChange}
					/>

					<label htmlFor="email">email</label>
					<input
						required
						type="text"
						name="email"
						autoComplete="off"
						value={contacts.email}
						className="form-control"
						// onChange={(e) => setEmail(e.target.value)}
						onChange={handleInputChange}
					/>

					<label htmlFor="message">Message</label>
					<textarea
						rows="3"
						required
						type="email"
						name="message"
						autoComplete="off"
						className="form-control"
						value={contacts.message}
						// onChange={(e) => setMessage(e.target.value)}
						onChange={handleInputChange}
					/>
					<button type="submit" className="btn">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
