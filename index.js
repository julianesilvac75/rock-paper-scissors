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
            break;
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
            return opponent;
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
            return opponent;
    }
}

function scissorsRules(opponent) {
    switch (opponent) {
        case PAPER:
            return 'You lost! Scissors beat Paper!';
        case SCISSORS:
            return "It's a tie!";
        case ROCK:
            return 'You win! Rock beats Scissors!';
        default:
            return opponent;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case ROCK:
            return rockRules(playerSelection);
        case PAPER:
            return paperRules(playerSelection);
        default:
            return scissorsRules(playerSelection);
    }
}

function partialResultsGenerator(roundsCount, computerSelection, roundResult, { player, computer }) {
    const resultMessage = `ROUND ${roundsCount}
        Computer bet: ${computerSelection}\n
        ${roundResult}\n
        Player ${player} X ${computer} Computer
        ---`;

    console.log(resultMessage);
}

function finalResultsGenerator({ player, computer }) {
    if (player > computer) {
        console.log(`YOU'RE A WINNER!\nFinal result: player ${player} X ${computer} computer`);
    } else if (player < computer) {
        console.log(`You lost the game =(\nFinal result: player ${player} X ${computer} computer`);
    } else {
        console.log(`It's a tie!\nFinal result: player ${player} X ${computer} computer`);
    }
}

function validatePlayerSelection() {
    const validOptions = [ROCK, PAPER, SCISSORS];
    const playerSelection = prompt("Let's play 'Rock Paper Scissors'! What's your bet?");

    if (playerSelection === null) {
        return "I'm sorry you have to leave! Hope to see you soon =)";
    }

    const lowerPlayerSelection = playerSelection.toLowerCase().trim();

    if (validOptions.includes(lowerPlayerSelection)) {
        return lowerPlayerSelection;
    } else {
        return "Invalid input! Try 'Rock', 'Paper' or 'Scissors'.";
    }
}

function game() {
    let roundsCount = 1;
    let cancelMessage;
    const totalPoints = {
        player: 0,
        computer: 0,
    };

    while (roundsCount <= 5) {
        const playerSelection = validatePlayerSelection();
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
    
        if (roundResult.includes('win')) {
            totalPoints.player += 1;
        } else if (roundResult.includes('lost')) {
            totalPoints.computer += 1;
        } else if (roundResult.includes('leave')) {
            cancelMessage = roundResult;
            break;
        }
        
        partialResultsGenerator(roundsCount, computerSelection, roundResult, totalPoints);

        if (!(roundResult.includes('Invalid input'))) {
            roundsCount += 1;
        }
    }

    if (cancelMessage) {
        console.log(cancelMessage);
    } else {
        finalResultsGenerator(totalPoints);
    }
}

game();
