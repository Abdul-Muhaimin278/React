import { useState } from "react";
import "./index.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const loginData = {
			username,
			password,
		};
		console.log(loginData);
		setPassword("");
		setUsername("");
	};

	return (
		<div className="container">
			<div className="card">
				<h1 className="text-center">Login Form</h1>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor="username">Username</label>
					<input
						required
						type="text"
						name="username"
						id="username"
						autoComplete="off"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<label htmlFor="password">Password</label>
					<input
						required
						type="password"
						name="password"
						id="password"
						autoComplete="off"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
