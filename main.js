const options = ["rock", "paper", "scissors"];
const whoWins = { rock: "paper", paper: "scissors", scissors: "rock" };

let playerSelection = prompt("Choose: rock, paper or scissors");

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const win = (winner, loser) => `You Win! ${winner} beats ${loser}`;

  const lose = (winner, loser) => `You Lose! ${winner} beats ${loser}`;

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
    let playerSelection = prompt("Choose: rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissors"
    ) {
      console.log("player plays: " + playerSelection);
      const computerSelection = computerPlay();
      console.log("computer plays: " + computerSelection);
      console.log(playRound(playerSelection, computerSelection), i);
    } else {
      alert("Error, Please type: rock, paper or scissors");
      i--;
    }
  }
}

game();
