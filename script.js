// Logic to get the computer choice
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 1) {
        return "rock";
    }
    else if (randomInt == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Logic to get the human choice
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}


// Declaring the players score variables
let humanScore = 0;
let computerScore = 0;
    // Logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie");
        return;
    }
    else if ((humanChoice == 'Rock' && computerChoice == 'Paper') || (humanChoice == 'Paper' && computerChoice == 'Scissor') || (humanChoice == 'Scissor' && computerChoice == 'Rock')) {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }

    else {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    }
}

// Logic to play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();
