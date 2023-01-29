const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return ROCK;
        case 2:
            return PAPER;
        case 3:
            return SCISSORS;
        default:
            break
    }
}

function rockRules(opponent) {
    switch (opponent) {
        case PAPER:
            return 'You win! Paper beats Rock!';
        case SCISSORS:
            return 'You lost! Rock beats Scissors!';
        case ROCK:
            return "It's a tie!";
        default:
            return 'Invalid input';
    }
}

function paperRules(opponent) {
    switch (opponent) {
        case PAPER:
            return "It's a tie!";
        case SCISSORS:
            return 'You win! Scissors beat Paper!';
        case ROCK:
            return "You lost! Paper beats Rock!";
        default:
            return 'Invalid input';
    }
}

function scissorsRules(opponent) {
    switch (opponent) {
        case PAPER:
            return 'You lost! Scissors beat Paper!';
        case SCISSORS:
            return "It's a tie!";
        case ROCK:
            return 'You win! Rock beats Scissors!'
        default:
            return 'Invalid input';
    }
}

function playRound(playerSelection, computerSelection) {
    // !! use trim function in the future
    const lowerPlayerSelection = playerSelection.toLowerCase().trim();

    if (computerSelection === ROCK) {
        return rockRules(lowerPlayerSelection);
    } else if (computerSelection === PAPER) {
        return paperRules(lowerPlayerSelection);
    } else {
        return scissorsRules(lowerPlayerSelection)
    }
}

const playerSelection = 'SCISSORS';
// const playerSelection = 'PAPER';
// const playerSelection = '     paper';
// const playerSelection = 'paper   ';
// const playerSelection = '    paper    ';
const computerSelection = computerPlay();

console.log('computador:', computerSelection);
console.log(playRound(playerSelection, computerSelection));
