import React from "react";
import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

export default function Flashcard(props) {
	const [cardIsOpen, setCardIsOpen] = React.useState(false);
	const [IsAnswered, setIsAnswered] = React.useState(false);

	return (
		<>
			{cardIsOpen === false ? (
				<ClosedCard
					setCardIsOpen={setCardIsOpen}
					IsAnswered={IsAnswered}
				/>
			) : (
				<OpenedCard
					questions={props.questions}
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
				/>
			)}
		</>
	);
}
