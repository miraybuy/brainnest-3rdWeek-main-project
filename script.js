const options = ["rock", "paper", "scissors"];
const whoWins = { rock: "paper", paper: "scissors", scissors: "rock" };
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
let playerSelection = prompt("rock 🪨  paper 📄 or scissors ✂️ ?");

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const win = (winner, loser) =>
    `You Win! ${capitalize(winner)} beats ${capitalize(loser)}`;

  const lose = (winner, loser) =>
    `You Lose! ${capitalize(winner)} beats ${capitalize(loser)}`;

  if (playerSelection === computerSelection) {
    return "Oh! It's a tie!";
  } else if (playerSelection === whoWins[computerSelection]) {
    return win(playerSelection, computerSelection);
  } else {
    return lose(computerSelection, playerSelection);
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log("player plays: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("computer plays: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection), i);
  }
}

game();
