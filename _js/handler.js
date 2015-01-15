
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
  var formattedAnswerArr = [];
  hangman.answerArr.map(function(letter) {
    console.log(letter);
    if(letter === "") {
      formattedAnswerArr.push('_');
    } else {
      formattedAnswerArr.push(letter);
    }
    formattedAnswerArr.push(' ');
  });
  document.getElementById('answer').innerHTML = formattedAnswerArr.join("");
}

function addToGuesses(char) {
  document.getElementById('guessesNum').innerHTML = hangman.guesses;
  document.getElementById('strikes').innerHTML = hangman.strikes;
  document.getElementById('guesses').innerHTML = document.getElementById('guesses').innerHTML + " " + char;
}

displayAnswer();
drawCanvas();
