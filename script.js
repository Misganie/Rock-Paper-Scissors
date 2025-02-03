// Declaring the players score variables
let humanScore = 0;
let computerScore = 0;

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

// Logic to get the human choice
function getHumanChoice() {
    let humanChoice;
    let UserInput = prompt("Please choose from 'Rock', 'Paper' and 'Scissor': ");
    if (UserInput.toLowerCase() == 'rock') {
        humanChoice = 'Rock';
    }
    else if(UserInput.toLowerCase() == 'paper') {
        humanChoice = 'Paper';
    }
    else if (UserInput.toLowerCase() == 'scissor') {
        humanChoice = 'Scissor';
    }
    else {
        alert("Wrong Choice, Please try again!")

    }

    return humanChoice
}