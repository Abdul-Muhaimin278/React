import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const todoKey = "todos";

export default function Todo() {
	const [task, setTask] = useState([]);

	// };

	// () => {
	// 	const storedTasks = localStorage.getItem(todoKey);
	// 	return storedTasks ? JSON.parse(storedTasks) : [];
	// });

	const HandleFormSubmit = (todoData) => {
		const { id, title, todoList } = todoData;

		if (!todoList || !title) return;

		const existingTask = task.find((curTask) => curTask.title === title);
		if (existingTask) return;
		setTask((prevTask) => [...prevTask, { id, title, todoList }]);
	};

	//^ handleEditTask function
	const handleEditTask = (value, id, nativeIndex) => {
		const { content, checked } = value;
		console.log(content, checked, id, nativeIndex);
		let updatedTask = [...task];
		updatedTask[nativeIndex].todoList[id] = {
			...updatedTask[nativeIndex].todoList[id],
			content: content,
			checked: checked,
		};
		setTask(updatedTask);
	};

	//^ handleUpdateTodo function
	const handleUpdateTodo = (value, id) => {
		setTask((prev) =>
			prev.map((item, index) =>
				index === id ? { ...item, todoList: [...item.todoList, value] } : item
			)
		);
	};

	//^ add data to localStorage
	// localStorage.setItem(todoKey, JSON.stringify(task));

	//^ HandleDeleteTodo function
	const handleDeleteTodo = (value) => {
		const updatedTask = task.filter((curTask) => curTask.title !== value);
		setTask(updatedTask);
		// localStorage.removeItem(todoKey, JSON.stringify(updatedTask));
	};

	//^ HandleDelTask function
	const handleDelTask = (id, nativeIndex) => {
		setTask((prev) =>
			prev.map((item, index) =>
				index === nativeIndex
					? {
							...item,
							todoList: item.todoList.filter((curElem, i) => i !== id),
					  }
					: item
			)
		);
	};

	//^ HandleClearTodoData
	const HandleClearTodoData = () => {
		setTask([]);
		localStorage.removeItem(todoKey);
	};

	//^ handleCheckedTodo
	const handleCheckedTodo = (id, checked) => {
		const updatedTask = task.map((curTask, index) => {
			if (curTask.todoList.length === index + 1) {
				const updatedContent = [...curTask.todoList];

				updatedContent[id] = {
					...updatedContent[id],
					checked: checked,
				};
				return { ...curTask, todoList: updatedContent };
			}
			return curTask;
		});

		setTask(updatedTask);
	};

	// console.log("Todo: task", task);
	return (
		<>
			<nav className="container text-white text-center  mt-3 header">
				<h2 className="p-3 m-auto">Add Todo</h2>
			</nav>

			<TodoForm onAddTodo={HandleFormSubmit} />
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary" onClick={HandleClearTodoData}>
					Clear all
				</button>
			</div>

			<section className="container">
				{task.map((curTask, i) => {
					return (
						<TodoList
							key={i}
							nativeIndex={i}
							data={curTask.todoList}
							title={curTask.title}
							onHandleDeleteTodo={handleDeleteTodo}
							onHandleCheckedTodo={handleCheckedTodo}
							onAddTodo={handleEditTask}
							onUpdateTodo={handleUpdateTodo}
							onDelTask={handleDelTask}
						/>
					);
				})}
			</section>
		</>
	);
}
