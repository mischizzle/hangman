
function hangmanHandler() {
  var formInput = document.getElementById('hangman_input');
  var inputLetter = formInput.value;

  formInput.value = "";

  hangman.guess(inputLetter);
  addToGuesses(inputLetter);
  displayAnswer();
  drawCanvas();
}

function displayAnswer() {
  document.getElementById('answer').innerHTML = hangman.answerArr.join("");
}

function addToGuesses(char) {
  document.getElementById('guessesNum').innerHTML = hangman.guesses;
  document.getElementById('strikes').innerHTML = hangman.strikes;
  document.getElementById('guesses').innerHTML = document.getElementById('guesses').innerHTML + " " + char;
}

displayAnswer();
drawCanvas();
