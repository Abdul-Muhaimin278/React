import { useState } from "react";
import { BsPlusSquareFill, BsDashSquareFill } from "react-icons/bs";

function TodoForm({ onAddTodo }) {
	const [todoData, setTodoData] = useState({
		id: "",
		title: "",
		todoList: [{ content: "", checked: false }],
	});

	const handleAddInput = () => {
		// setTodoData([...todoData.todoList, { content: "", checked: false }]);

		setTodoData((prev) => ({
			...prev,
			todoList: [...prev.todoList, { content: "", checked: false }],
		}));
	};

	const handleDelInput = (id) => {
		setTodoData((prev) => ({
			...prev,
			todoList: prev.todoList.filter((curElem, index) => index !== id),
		}));
	};

	const handleTitleChange = (title) => {
		setTodoData((prev) => ({
			...prev,
			id: title,
			title,
		}));
	};

	const handleTaskChange = (event, index) => {
		const { value } = event.target;
		let onChangeValue = [...todoData.todoList];
		onChangeValue[index].content = value;

		setTodoData({ ...todoData, todoList: onChangeValue });
	};

	const HandleFormSubmit = (event) => {
		event.preventDefault();

		onAddTodo(todoData);
		setTodoData({
			id: "",
			title: "",
			todoList: [{ content: "", checked: false }],
		});
	};

	return (
		<section className="container d-flex align-items-center mt-5 add-section">
			<form id="form" onSubmit={HandleFormSubmit}>
				<div className="row">
					<div className="col-9">
						<input
							name="title-input"
							type="text"
							placeholder="Enter Title"
							className="my-2 p-2 form-control title-input"
							value={todoData.title}
							onChange={(e) => handleTitleChange(e.target.value)}
							required
						/>
					</div>
				</div>
				{todoData.todoList.map((curElem, index) => (
					<div className="row" key={index}>
						<div className="col-9">
							<input
								type="text"
								name="task-input"
								placeholder="Enter Task"
								value={curElem.content}
								className="my-2 p-2 task-input form-control"
								onChange={(e) => handleTaskChange(e, index)}
								required
							/>
						</div>
						<div className="col-2 d-flex align-items-center justify-content-between p-0">
							{todoData.todoList.length > 1 && (
								<BsDashSquareFill
									className="add_task"
									onClick={() => handleDelInput(index)}
								/>
							)}
							{index === todoData.todoList.length - 1 && (
								<BsPlusSquareFill
									className="add_task"
									onClick={() => handleAddInput()}
								/>
							)}
						</div>
					</div>
				))}

				<button button className="btn my-3 add_list" onClick={() => onAddTodo}>
					Add to list
				</button>
			</form>
		</section>
	);
}

export default TodoForm;
