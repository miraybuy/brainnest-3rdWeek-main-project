const options = ["rock", "paper", "scissors"];

const playerSelection = (userInput) => {
  let userInput = prompt("Choose: rock, paper or scissors");
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return value.userInput;
  } else {
    return "Error, Please type: rock, paper or scissors";
  }
};

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

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
      alert("type a valid answer");
      i--;
    }
  }
}

game();
