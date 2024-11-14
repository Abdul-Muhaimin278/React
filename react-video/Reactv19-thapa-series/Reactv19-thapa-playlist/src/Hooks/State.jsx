import { useState } from "react";

const State = () => {
	// let value = 0;
	// const HandleButtonClick = () => {
	// 	value++;
	// 	console.log(value);
	// };
	// console.log(useState());
	const [count, setCount] = useState(0);
	const HandleButtonClick = () => {
		setCount(() => count + 1);
	};
	return (
		<>
			<section className="main-div">
				<h1>{count}</h1>
				<button onClick={HandleButtonClick}>Increment</button>
			</section>
			<ChildComponent count={count} />
		</>
	);
};

export default State;
function ChildComponent({ count }) {
	console.log("Child Component Rendered");
	return <div>Child Component - {count}</div>;
}
