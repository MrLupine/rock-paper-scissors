function computerSelection(){
	let go = Math.floor(Math.random() * 3);
	if (go === 0){
		return "rock";
	} else if (go === 1){
		return "paper";
	} else {
		return "scissors";
	}
}

function myPickImageReplacer(x){
	if (x === "rock") {
		document.getElementById("my_image").src="images/pxl_rock.png";
	} else if (x === "paper") {
		document.getElementById("my_image").src="images/pxl_paper.png";
	} else {
		document.getElementById("my_image").src="images/pxl_scissors.png";
	}
}

function computerPickImageReplacer(x){
	if (x === "rock") {
		document.getElementById("computer_image").src="images/pxl_rock.png";
	} else if (x === "paper") {
		document.getElementById("computer_image").src="images/pxl_paper.png";
	} else {
		document.getElementById("computer_image").src="images/pxl_scissors.png";
	}
}

function inputSentenceCase(x){
	lowerCase = x.toLowerCase();
	return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

{
	const myScoreCount = document.querySelector("#my_score_count");
	const computerScoreCount = document.querySelector("#computer_score_count");
	let myScore = 0
	let computerScore = 0
	const buttons = document.querySelectorAll("#my_rock, #my_paper, #my_scissors");

	buttons.forEach((button) => {
		button.addEventListener("click", function(e) {
			let playerSelection = e.target.id.slice(3);
			myPickImageReplacer(playerSelection)
			computerPickImageReplacer(computerSelection)
			playRound(playerSelection, computerSelection());
		})
	})

/*
	buttons.forEach((button) => {
		button.addEventListener("focus", function(e) {
			let playerSelection = e.target.id.slice(3);
			document.getElementById(`my_${playerSelection}`).className="choice_button_focus";
		})
	})

	buttons.forEach((button) => {
		button.addEventListener("blur", function(e) {
			let playerSelection = e.target.id.slice(3);
			document.getElementById(`my_${playerSelection}`).className="choice_button";
		})
	})
*/

	function playRound(playerSelection, computerSelection){
		if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
			myScore += 1;
			myScoreCount.textContent = `${myScore}`;
		} else if (playerSelection === computerSelection){
			return;
		} else {
			computerScore += 1;
			computerScoreCount.textContent = `${computerScore}`;
		}
	}
}

/*
function playRound(playerSelection, computerSelection){
	if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
		myScore += 1;
		myScoreCount.textContent = `${myScore}`;
	} else if (playerSelection === computerSelection){
		return;
	} else {
		computerScore += 1;
		computerScoreCount.textContent = `${computerScore}`;
	}
}
*/
