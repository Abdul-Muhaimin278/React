import "./ToggleSwitch.css";
import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
	const [isOn, setIsOn] = useState(false);
	const HandleToggleSwitch = () => {
		setIsOn(!isOn);
	};
	const checkIsOn = isOn ? "on" : "off";
	const ToggleSwitchBG = { backgroundColor: isOn ? "#4caf50" : "" };

	return (
		<>
			<h1 className="text-center ">
				Toggle Switch
				<IoIosSwitch />
			</h1>
			<div
				className="toggle-switch"
				style={ToggleSwitchBG}
				onClick={HandleToggleSwitch}
			>
				<div className={`switch ${checkIsOn}`}>
					<span className="switch-state">{checkIsOn}</span>
				</div>
			</div>
		</>
	);
};
