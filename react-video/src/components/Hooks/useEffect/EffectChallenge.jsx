import { useEffect, useState } from "react";
import "./index.css";

const EffectChallenge = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	useEffect(() => {
		document.title = `Count:${count}`;
		console.log(name);
	}, [count, name]);
	return (
		<div className="container effect-container">
			<h1>useEffect Challenge</h1>
			<p>
				Count: <span>{count}</span>
			</p>
			<button onClick={() => setCount(count + 1)}>increase</button>
			<p>
				Name: <span>{name} </span>
			</p>
			<input type="text" value={name} onChange={(e) => handleNameChange(e)} />
		</div>
	);
};

export default EffectChallenge;
