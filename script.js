const options = ["rock", "paper", "scissors"];
let userInput = prompt("rock 🪨  paper 📄 or scissors ✂️ ?");

const playerSelection = (userInput) => {
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
    console.log("player plays: " + userInput);
    const computerSelection = computerPlay();
    console.log("computer plays: " + computerSelection);
    console.log(playRound(userInput, computerSelection), i);
  }
}

game();
