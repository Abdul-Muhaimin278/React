import React from "react";

function TodoItem({ todo, onDelete }) {
	const shadow = {
		boxShadow: "0px 3px 8px 8px  rgba(0,0,0,0.2)",
		borderRadius: "10px",
	};
	return (
		<div className="col-lg-3 p-3 " style={shadow}>
			<h4>{todo.title}</h4>
			<p>{todo.desc}</p>
			<button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
				Delete
			</button>
		</div>
	);
}
export default TodoItem;
