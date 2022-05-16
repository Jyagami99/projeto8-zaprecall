import React from "react";
import Content from "./Content";
import Welcome from "./Welcome";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";

export default function App() {
	const [screen, setScreen] = React.useState("init");

	return (
		<>
			{screen === "init" ? (
				<Welcome setScreen={setScreen} />
			) : (
				<Content setScreen={setScreen} />
			)}
		</>
	);
}
