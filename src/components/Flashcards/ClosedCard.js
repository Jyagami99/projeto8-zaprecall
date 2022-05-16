import React from "react";
import InitialCard from "./InitialCard";
import FinalCard from "./FinalCard";

export default function ClosedCard({ setCardIsOpen, IsAnswered }) {
	return (
		<>
			{IsAnswered === false ? (
				<InitialCard setCardIsOpen={setCardIsOpen} />
			) : (
				<FinalCard />
			)}
		</>
	);
}
