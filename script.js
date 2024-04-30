let computerSelection;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const computerGeneratedNumbers = Math.floor(Math.random() * 3);
  switch (computerGeneratedNumbers) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "paper";
      break;
    case 2:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
};

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "You Lose! Paper beats rock.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "You Win! Rock beats paper.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "You Win! Paper beats rock.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "You Lose! Scissors beat paper.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "You Win! Scissors beat paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "You Lose! Rock beats scissors";
  } else if (humanChoice === computerChoice) {
    return "Its a Tie!";
  } else {
    console.log("Retype your selection");
  }
};

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = prompt(
      "Rock, Paper or Scissors, Which will you Choose?"
    ).toLowerCase();
    console.log(playRound(humanSelection, computerSelection));
    console.log(computerSelection, humanSelection);
    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  }
};
playGame();
