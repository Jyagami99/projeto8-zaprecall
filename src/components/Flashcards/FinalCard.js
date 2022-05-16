export default function FinalCard({ answer }) {
	return (
		<button className={`final ${answer}`}>
			<p>Pergunta</p>
			<ion-icon name={`${answer}-circle`}></ion-icon>
		</button>
	);
}
