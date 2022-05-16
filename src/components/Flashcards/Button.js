export default function Button({
	color = "red",
	text = "",
	setCardIsOpen,
	setIsAnswered,
}) {
	return (
		<button
			className={`button ${color}`}
			onClick={() => {
				setIsAnswered(true);
				setCardIsOpen(false);
			}}
		>
			<p>{text}</p>
		</button>
	);
}
