var hangman = new Hangman();
hangman.init();
drawCanvas();
displayAnswer();

function hangmanHandler() {
  var userInputEl = document.getElementById('hangman_input');
  var userInput = userInputEl.value;

  hangman.guess(userInput);

  addToGuesses(userInput);
  displayAnswer();
  outputGameStatus();
  drawCanvas();

  userInputEl.value = '';
}

function displayAnswer() {
  var formattedAnswerArr = [];
  hangman.answerArr.map(function(letter) {
    if(letter === "") {
      formattedAnswerArr.push('_');
    } else {
      formattedAnswerArr.push(letter);
    }
    formattedAnswerArr.push(' ');
  });
  document.getElementById('answer').innerHTML = formattedAnswerArr.join("");
}

function outputGameStatus() {
  var status = hangman.getGameStatus();
  var formattedStatus;
  switch (status) {
    case 'win':
      formattedStatus = "You win! :)";
      break;
    case 'lost':
      formattedStatus = "You loose :(";
      break;
    default:
      formattedStatus = "Still playing...";
      break;
  }
  document.getElementById('result').innerHTML = formattedStatus;
}

function addToGuesses(char) {
  document.getElementById('guessesNum').innerHTML = hangman.getGuesses();
  document.getElementById('strikes').innerHTML = hangman.getStrikes();
  document.getElementById('guesses').innerHTML = document.getElementById('guesses').innerHTML + " " + char;
}
