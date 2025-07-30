const prompt = require('prompt-sync')();

// Array to store valid options
const choices = ['rock', 'paper', 'scissors'];

// Object to track results
let result = {
    playerChoice: '',
    computerChoice: '',
    outcome: ''
};

// Function to get computer choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// Function to determine winner
function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

// Game starts here
const playerInput = prompt("Choose rock, paper, or scissors: ").toLowerCase();

// Validate input
if (!choices.includes(playerInput)) {
    console.log("Invalid input. Please choose rock, paper, or scissors.");
} else {
    const computerInput = getComputerChoice();
    const outcome = determineWinner(playerInput, computerInput);

    // Store in result object
    result.playerChoice = playerInput;
    result.computerChoice = computerInput;
    result.outcome = outcome;

    // Score tracking with number and boolean
    let score = {
        win: outcome === 'win' ? 1 : 0,
        lose: outcome === 'lose' ? 1 : 0,
        draw: outcome === 'draw' ? 1 : 0
    };
    

}