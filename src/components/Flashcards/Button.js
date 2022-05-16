export default function Button({
	color = "",
	text = "",
	setCardIsOpen,
	setIsAnswered,
	setAnswer,
	answer,
}) {
	return (
		<button
			className={`button ${color}`}
			onClick={() => {
				setIsAnswered(true);
				setCardIsOpen(false);
				setAnswer(answer);
			}}
		>
			<p>{text}</p>
		</button>
	);
}
