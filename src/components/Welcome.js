import React from "react";
import logo from"../assets/images/logo.svg"

export default function Welcome(props) {
	function click() {
		props.setScreen("content");
	}

	return (
		<>
			<div className="welcome">
				<img src={logo} alt="" />
				<span className="title">ZapRecall</span>
				<button className="button-welcome" onClick={click}>
					Iniciar Recall!
				</button>
			</div>
		</>
	);
}
