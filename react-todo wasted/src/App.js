import Todos from "./components/Todos";
import Header from "./components/Header";
import { useState } from "react";
import AddTodo from "./components/AddTodo";

function App() {
	const onDelete = (todo) => {
		// console.log("todo", todo);

		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
	};
	const addTodo = (title, todo) => {
		let sno = todos[todos.length - 1].no + 1;
		// console.log(title, todo);
		const myTodo = {
			sno: sno,
			title: title,
			description: todo,
		};
		setTodos([...todos], myTodo);
		console.log(myTodo);
	};
	const [todos, setTodos] = useState([
		{ sno: 1, title: "Go to market", desc: "Buy groceries" },
		{ sno: 2, title: "Go to mall", desc: "Buy clothes" },
		{ sno: 3, title: "Go to bazar", desc: "Buy wire" },
	]);
	return (
		<>
			<Header title="My todos app" />
			<AddTodo addTodo={addTodo} />
			<Todos todos={todos} onDelete={onDelete} />
		</>
	);
}

export default App;
