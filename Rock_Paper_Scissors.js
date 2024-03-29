var userChoice = '';
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, please type: rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (userComputerChoice === "paper") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
};

if (userChoice === "paper") {
  if (computerChoice === "scissors") {
    return "The computer won!";
  } else {
    return "You won!";
  }
}

if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    return "The computer won!";
  } else {
    return "You won!";
  }
}

if (userChoice === "bomb") {
  return "User won through hacks";
}

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice);
  console.log("Computer choice: " + computerChoice);
};

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

playGame();
