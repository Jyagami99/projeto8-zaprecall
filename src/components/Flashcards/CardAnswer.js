import Card from "./Card";
import Button from "./Button";

export default function CardAnswer({
	answer,
	setCardIsOpen,
	setIsAnswered,
	setAnswer,
}) {
	return (
		<Card>
			<p>{answer}</p>
			<div>
				<Button
					text="Não lembrei"
					color="red"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
					setAnswer={setAnswer}
					answer="close"
				/>
				<Button
					text="Quase não lembrei"
					color="yellow"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
					setAnswer={setAnswer}
					answer="help"
				/>
				<Button
					text="Zap!"
					color="green"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
					setAnswer={setAnswer}
					answer="checkmark"
				/>
			</div>
		</Card>
	);
}
