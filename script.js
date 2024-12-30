const ids = ["Rock", "Paper", "Scissors"];
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  playRound(event.target.textContent, getComputerChoice());
});

display = document.querySelector(".display");
function printToDisplay(message) {
  console.log(message);
  const newLog = document.createElement("p");
  newLog.textContent = message;
  display.appendChild(newLog);
}

function getComputerChoice() {
  return ids[getRandom(1, 3) - 1];
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
  printToDisplay(
    `You chose '${humanChoice}'. Computer chose '${computerChoice}'`
  );
  humanChoice = convertChoicesToIds(humanChoice);
  computerChoice = convertChoicesToIds(computerChoice);
  if (humanChoice === computerChoice) {
    printToDisplay("You drawed");
  } else if (wrapArray(ids, humanChoice - 1) === ids[computerChoice]) {
    humanScore++;
    printToDisplay("You won");
  } else {
    computerScore++;
    printToDisplay("You lost");
  }

  printToDisplay(
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
