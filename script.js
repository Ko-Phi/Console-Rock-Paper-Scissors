const ids = ["rock", "paper", "scissors"];
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  return ids[getRandom(1, 3) - 1];
}
function getHumanChoice() {
  let answer = prompt("Choose either rock, paper, or scissors");
  for (let i = 0; i < ids.length; i++) {
    if (answer.toLowerCase() == ids[i].toLowerCase()) {
      return answer.toLowerCase();
    }
  }
  return getHumanChoice();
}

function wrapArray(array, index) {
  if (index < 0) {
    return array[array.length + index];
  } else {
    return array[index];
  }
}
function convertChoicesToIds(choice) {
  for (let i = 0; i < ids.length; i++) {
    if (choice.toLowerCase() == ids[i].toLowerCase()) {
      return i;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose '${humanChoice}'. Computer chose '${computerChoice}'`);
  humanChoice = convertChoicesToIds(humanChoice);
  computerChoice = convertChoicesToIds(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("You drawed");
  } else if (wrapArray(ids, humanChoice - 1) === ids[computerChoice]) {
    humanScore++;
    console.log("You won");
  } else {
    computerScore++;
    console.log("You lost");
  }

  console.log(
    `You: ${humanScore}, Computer: ${computerScore}. You are currently ${
      humanScore > computerScore
        ? "winning"
        : humanScore < computerScore
        ? "losing"
        : "tied"
    }`
  );
}

let humanScore = 0,
  computerScore = 0;
function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(
    `You ${
      humanScore > computerScore
        ? "won"
        : humanScore < computerScore
        ? "lost"
        : "tied"
    }`
  );
}

playGame(5);
