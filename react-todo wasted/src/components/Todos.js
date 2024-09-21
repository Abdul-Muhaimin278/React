/* eslint-disable no-undef */
import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
	const shadow = {
		boxShadow: "0px 3px 8px 8px  rgba(0,0,0,0.2)",
		borderRadius: "10px",
		padding: "40px 0px",
	};
	return (
		<>
			<h3 className="text-center"> Todo List</h3>
			<section className="container my-5" style={shadow}>
				<div className="row justify-content-evenly">
					{props.todos.length === 0
						? "No todo left"
						: props.todos.map((todo) => {
								return (
									<TodoItem
										todo={todo}
										key={todo.sno}
										onDelete={props.onDelete}
									/>
								);
						  })}
				</div>
			</section>
		</>
	);
};

export default Todos;
