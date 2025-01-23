let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let guessSlot = document.querySelector(".guesses");
let remainingAttempts = document.querySelector(".lastResult");
let userInput = document.querySelector("#guessField");
let submit = document.querySelector("#subt");

let lowOrHigh = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let noOfGuesses = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guessedNo = parseInt(userInput.value);
    validate(guessedNo);
  });
}
function validate(guessedNo) {
  if (isNaN(guessedNo)) {
    alert("please Enter valid number");
  } else if (guessedNo < 0) {
    alert("please enter number more than 1");
  } else if (guessedNo > 100) {
    alert("please enter number less than 100");
  } else {
    prevGuess.push(guessedNo);
    if (noOfGuesses === 9) {
      displayGuess(guessedNo);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guessedNo);
      checkGuess(guessedNo);
    }
  }
}

function displayGuess(guessedNo) {
  userInput.value = "";
  noOfGuesses++;
  guessSlot.innerHTML += `${guessedNo} `;
  remainingAttempts.innerHTML = `${10 - noOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(guessedNo) {
  if (guessedNo === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guessedNo < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guessedNo > randomNumber) {
    displayMessage(`Number is TOOO high`);
  }
}

function endGame() {
  userInput.value = "";
  console.log(p);
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  console.log(p);
  p.innerHTML = `<h2 id="newGame">click here to start new game</h2>`;
  console.log(p);
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    noOfGuesses = 0;
    guessSlot.innerHTML = "";
    remainingAttempts.innerHTML = `${10 - noOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
