import logo from "../assets/images/logo.svg";
import Flashcard from "./Flashcard";

export default function Content() {
	return (
		<>
			<div className="content">
				<header>
					<img className="image-content" src={logo} alt="" />
					<span className="title">ZapRecall</span>
				</header>
				<div>
					<Flashcard />
					<Flashcard />
					<Flashcard />
					<Flashcard />
					<Flashcard />
					<Flashcard />
					<Flashcard />
					<Flashcard />
				</div>
			</div>
			<footer></footer>
		</>
	);
}
