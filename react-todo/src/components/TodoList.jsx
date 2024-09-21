import { useEffect, useState } from "react";

const TodoList = ({
	data,
	nativeIndex,
	title,
	onHandleDeleteTodo,
	onHandleCheckedTodo,
	onAddTodo,
	onUpdateTodo,
	onDelTask,
}) => {
	const [editTask, setEditTask] = useState({});
	const [saveBtn, setSaveBtn] = useState(null);
	const [addTask, setAddTask] = useState("");
	const [input, setInput] = useState(
		data.map((item) => ({ content: item.content, checked: item.checked }))
	);

	const handleEditBtn = (index) => {
		setSaveBtn(index);
	};

	const handleUpdateTodo = (index) => {
		setSaveBtn(index);
	};

	const handleAddUpdate = () => {
		if (!addTask) {
			setSaveBtn(null);
			return;
		}
		onUpdateTodo({ content: addTask, checked: false }, nativeIndex);

		setAddTask("");
		setSaveBtn(null);
	};

	const handleDelTask = (Elem, content, index) => {
		const updatedInput = input.filter((curTask) => curTask.content !== content);
		setInput(updatedInput);
		onDelTask(index, nativeIndex);
		// if (data.length === 1) onHandleDeleteTodo(title);
	};

	const handleCancelEdit = () => {
		setSaveBtn(null);
	};

	const handleInputChange = (e, index) => {
		const { value } = e.target;
		const updatedInput = [...input];
		updatedInput[index].content = value;
		setInput(updatedInput);
		setEditTask({ ...updatedInput[index] });
	};

	const handleCheckedTodo = (index) => {
		const updatedInput = [...input];
		updatedInput[index].checked = !updatedInput[index].checked;
		setInput(updatedInput);
		onHandleCheckedTodo(index, updatedInput[index].checked);
	};

	const handleSaveBtn = (index) => {
		onAddTodo(editTask, index, nativeIndex);

		setSaveBtn(null);
	};

	useEffect(() => {
		setInput(
			data.map((item) => ({ content: item.content, checked: item.checked }))
		);
	}, [data]);

	return (
		<div className="list-section container">
			<div className="container">
				<div className="row d-flex justify-content-between align-items-center">
					<h6 className="fw-bolder col-1 m-0 p-0">{title}</h6>
					{saveBtn === 5 && (
						<input
							type="text"
							name="updatedTask"
							className="col-8"
							onChange={(e) => setAddTask(e.target.value)}
						/>
					)}
					<div className="col-2">
						{saveBtn !== 5 ? (
							<button
								className="btn btn-warning btn-sm  text-white"
								onClick={() => handleUpdateTodo(5)}
							>
								Update
							</button>
						) : (
							<button
								className="btn btn-primary btn-sm text-white"
								onClick={handleAddUpdate}
							>
								Add
							</button>
						)}
					</div>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center mx-3 mb-3">
				{input.map((curElem, index) => (
					<ul className="my-2 container" key={index}>
						<li className="d-flex justify-content-between align-items-center px-3 py-2 row">
							<div className="col-8 d-flex align-items-center p-0">
								{saveBtn === index ? (
									<input
										id="check"
										type="text"
										name="taskChange"
										value={curElem.content}
										onChange={(e) => handleInputChange(e, index)}
									/>
								) : (
									<input
										id="check"
										type="checkbox"
										name="check"
										onClick={() => handleCheckedTodo(index)}
									/>
								)}
								{saveBtn !== index && (
									<label
										htmlFor="check"
										className={curElem.checked ? "checkList" : "notCheckList"}
									>
										{/* {saveBtn === null ? curElem.content : input[index].content} */}
										{curElem.content}
									</label>
								)}
							</div>
							<div className="col-3 p-0">
								{saveBtn === index ? (
									<div className="d-flex justify-content-between align-items-center">
										<button
											className="btn btn-success btn-sm mx-1"
											onClick={() => handleSaveBtn(index)}
										>
											Save
										</button>
										<button
											className="btn btn-secondary btn-sm mx-1"
											onClick={handleCancelEdit}
										>
											cancel
										</button>
									</div>
								) : (
									<div className="d-flex justify-content-between align-items-center">
										<button
											className="btn btn-info btn-sm text-white "
											onClick={() => handleEditBtn(index)}
											disabled={curElem.checked}
										>
											Edit
										</button>
										<button
											className="btn btn-danger btn-sm text-white "
											onClick={() =>
												handleDelTask(curElem, curElem.content, index)
											}
											disabled={curElem.checked}
										>
											Delete
										</button>
									</div>
								)}
							</div>
						</li>
					</ul>
				))}
			</div>
			<button
				className="btn btn-danger"
				onClick={() => onHandleDeleteTodo(title)}
			>
				Delete
			</button>
		</div>
	);
};

export default TodoList;
