import Card from "./Card";
import setinha from "../../assets/images/setinha.png";

export default function CardQuestion({ question, setCardFace }) {
	return (
		<Card>
			<p>{question}</p>
			<img src={setinha} alt="" onClick={() => setCardFace("answer")}></img>
		</Card>
	);
}
