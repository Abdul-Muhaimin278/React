import { useState } from "react";

export const DerivedState = () => {
	const [users, setUsers] = useState([
		{ name: "Alice", age: 25 },
		{ name: "Bob", age: 30 },
		{ name: "Charlie", age: 35 },
		{ name: "Angels", age: 35 },
	]);

	console.log(users);
	const userCount = users.length;
	const averageAge = Math.round(
		users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount
	);

	return (
		<div className="main-div">
			<h1>Users list</h1>
			<ul>
				{users.map((curElem, index) => {
					return (
						<>
							<li key={index}>
								{curElem.name} - {curElem.age} year old
							</li>
						</>
					);
				})}
			</ul>
			<p>Total Users: {userCount}</p>
			<p>Users Average age : {averageAge}</p>
		</div>
	);
};

export default DerivedState;
