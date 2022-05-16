import Card from "./Card";
import Button from "./Button";

export default function CardAnswer({ answer, setCardIsOpen, setIsAnswered }) {
	return (
		<Card>
			<p>{answer}</p>
			<div>
				<Button
					text="Não lembrei"
					color="red"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
				/>
                <Button
					text="Quase não lembrei"
					color="yellow"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
				/>
                <Button
					text="Zap!"
					color="green"
					setCardIsOpen={setCardIsOpen}
					setIsAnswered={setIsAnswered}
				/>
			</div>
		</Card>
	);
}
