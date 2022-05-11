export default function Welcome() {
	function click(){
        console.log("Cliquei")
    }
    
    return (
		<div className="welcome">
			<img src="./assets/img/logo.svg" alt="" />
			<span className="title-welcome">ZapRecall</span>
            <button className="button-welcome" onClick={click}>Iniciar Recall!</button>
		</div>
	);
}
