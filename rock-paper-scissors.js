
function getComputerChoice() {
    random_int = Math.floor(Math.random()*3) + 1;
    if (random_int == 1) {
        return "rock"
    }
    else if (random_int == 2) {
        return "paper"
    }
    else if (random_int == 3) {
        return "scissor"
    }
}

function getHumanChoice() {
    user_choice = prompt("What is your choice");
    return(user_choice)
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("It is a tie " + humanChoice + " ties " + computerChoice)
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissor" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "scissor")) {
            console.log("You loose " + computerChoice + " beats " + humanChoice)
            computerScore += 1;
        }
        else if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "scissor" && humanChoice == "rock") ||  (computerChoice == "paper" && humanChoice == "scissor")) {
            console.log("You win " + humanChoice + " beats " + computerChoice)
            humanScore += 1;
        }
    }
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    for (i=0; i<5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Score was " + humanScore + " to " + computerScore)
    }
    else {
        console.log("You loose the game! Score was " + computerScore + " to " + humanScore)
    }

}

playGame();
