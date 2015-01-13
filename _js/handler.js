var guessesNum = 0;

function hangmanHandler() {
  var formInput = document.getElementById('hangman_input');
  var inputLetter = formInput.value;

  addToGuesses(inputLetter);

  formInput.value = "";

  hangman.guess(inputLetter);
  displayAnswer();
  drawCanvas();
}

function displayAnswer() {
  document.getElementById('answer').innerHTML = hangman.answerArr.join("");
}

function addToGuesses(char) {
  guessesNum++;
  document.getElementById('guessesNum').innerHTML = guessesNum;

  document.getElementById('guesses').innerHTML = document.getElementById('guesses').innerHTML + " " + char;
}

displayAnswer();
