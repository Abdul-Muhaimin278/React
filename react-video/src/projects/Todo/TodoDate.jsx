import { useEffect, useState } from "react";

export const TodoDate = () => {
	const [dateTime, setDateTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const formattedDate = now.toLocaleString();
			setDateTime(`${formattedDate}`);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return <h2 className="date-time">{dateTime}</h2>;
};
