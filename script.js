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
