// Create buttons for Rock, Paper, Scissors
const rock = document.createElement("button");
rock.innerText = "Rock";
rock.className = "rock";

const paper = document.createElement("button");
paper.innerText = "Paper";
paper.className = "paper";

const scissors = document.createElement("button");
scissors.innerText = "Scissors";
scissors.className = "scissors";

// Append buttons to the document body
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

// Create a single div for results
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

// Create a single div for scores
const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

// Create a single div for the winner
const winnerDiv = document.createElement("div");
document.body.appendChild(winnerDiv);

// Logic to get the computer choice
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 1) {
        return "Rock";
    }
    else if (randomInt == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Declaring the players score variables
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        resultDiv.innerText = "It's a tie!";
    } else if ((humanChoice === 'Rock' && computerChoice === 'Paper') || 
               (humanChoice === 'Paper' && computerChoice === 'Scissors') || 
               (humanChoice === 'Scissors' && computerChoice === 'Rock')) {
        resultDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        resultDiv.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }

    // Update scores
    scoreDiv.innerText = `Human: ${humanScore}, Computer: ${computerScore}`;

    checkWinner();
}

// Check for a winner
function checkWinner() {
    if (humanScore === 5) {
        resultDiv.innerText = "";
        winnerDiv.innerText = "Congratulations! You are the winner!"
        // alert("Congratulations! You are the winner!");
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.innerText = "";
        winnerDiv.innerText = "Sorry! The computer wins!";
        // alert("Sorry! The computer wins!");
        resetGame();
    }
}

// Reset the game scores
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.innerText = `Human: ${humanScore}, Computer: ${computerScore}`;
}

// Event listeners for buttons
rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
scissors.addEventListener('click', () => playRound('Scissors'));