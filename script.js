const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
const result = document.querySelector(".result-msg p");

let playerPoints = 0;
let compPoints = 0;
let computerSelection;

function getComputerChoice() {
    const compChoices = ['rock', 'paper', 'scissors']
    let choiceToUse = compChoices[Math.floor(Math.random() * compChoices.length)];
    return choiceToUse;
}

const options = document.querySelectorAll('.options');
options.forEach((option) => {
option.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playRound(option.id, computerSelection)
    });
});

function playRound(playerSelection, computerSelection) {
    checkScore();

    if (playerSelection === "rock") {
        switch (computerSelection) {
        case "rock":
            result.textContent = "Even! Try Again!";
            break;
        case "paper":
            result.textContent = "You lose! Paper beats Rock!";
            compPoints++;
            break;
        case "scissors":
            result.textContent = "You win! Rock beats Scissors!";
            playerPoints++;
            break;
        }
    } 
    else if (playerSelection === "paper") {
        switch (computerSelection) {
        case "rock":
            result.textContent = "You win! Paper beats Rock!";
            playerPoints++;
            break;
        case "paper":
            result.textContent = "Even! Try Again!";
            break;
        case "scissors":
            result.textContent = "You lose! Scissors beats Paper!";
            compPoints++;
            break;
        }
    } 
    else {
        // Player chose scissors
        switch (computerSelection) {
        case "rock":
            result.textContent = "You lose! Rock beats Scissors!";
            compPoints++;
            break;
        case "paper":
            result.textContent = "You win! Scissors beats Paper!";
            playerPoints++;
            break;
        case "scissors":
            result.textContent = "Even! Try Again!";
            break;
        }
    }

    playerScore.textContent = `${playerPoints}`;
    computerScore.textContent = `${compPoints}`;

    console.log("Computer points: " + compPoints + " / Player Points: " + playerPoints);
    console.log(result);
    return result;
}

function checkScore() {
    if(playerPoints === 5 || compPoints === 5) {
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        playerPoints = 0;
        compPoints = 0;
    }
}