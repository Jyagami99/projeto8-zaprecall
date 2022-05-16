import logo from "../assets/images/logo.svg";
import Flashcards from "./Flashcards/Flashcards";
import Footer from "./Footer";
import React from "react";

export default function Content() {
	return (
		<>
			<div className="content">
				<header>
					<img className="image-content" src={logo} alt="" />
					<span className="title">ZapRecall</span>
				</header>
				<Flashcards />
				<Footer>0/8 PERGUNTAS</Footer>
			</div>
		</>
	);
}
