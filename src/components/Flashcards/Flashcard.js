import React from "react";
import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

export default function Flashcard(props) {
	const [cardIsOpen, setCardIsOpen] = React.useState(false);
	const [IsAnswered, setIsAnswered] = React.useState(false);
	const [answer, setAnswer] = React.useState("");

	return (
		<>
			{cardIsOpen === false ? (
				<ClosedCard
					setCardIsOpen={setCardIsOpen}
					IsAnswered={IsAnswered}
					answer={answer}
				/>
			) : (
				<OpenedCard
					questions={props.questions}
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
					setAnswer={setAnswer}
				/>
			)}
		</>
	);
}
