import { useState } from "react";

function AddTodo({ addTodo }) {
	const [title, setTitle] = useState("");
	const [todo, setTodo] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title || !todo) {
			alert("Title or todo cannot be blank");
		}
		addTodo(title, todo);
	};
	return (
		<form
			onSubmit={submit}
			className="container d-flex flex-column align-items-center my-4"
		>
			<div className="mb-3 ">
				<label htmlFor="title" className="form-label">
					Todo title
				</label>
				<input
					type="text"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className="form-control"
					id="title"
				/>

				<label htmlFor="todo" className="form-label">
					Add todo
				</label>
				<input
					type="text"
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					className="form-control"
					id="todo"
				/>
			</div>

			<button type="add" className="btn btn-sm btn-primary">
				Add
			</button>
		</form>
		// <section className="container">
		// 	<h3 className="text-center">Add a Todo</h3>
		// 	<label htmlFor="title">Todo Title</label>
		// 	<input type="text" id="title" />
		// </section>
	);
}
export default AddTodo;
