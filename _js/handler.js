var hangman = new Hangman();

drawCanvas();
formatAnswer();

function hangmanHandler() {
  var userInputEl = document.getElementById('hangman_input');
  var userInput = userInputEl.value;

  hangman.guess(userInput);

  extras();
  formatAnswer();
  outputGameStatus();
  drawCanvas();

  userInputEl.value = '';
}

function formatAnswer() {
  var formattedAnswerArr = [];

  console.log("Formatting answer", hangman.correctGuessesArr);
  console.log(hangman);
  hangman.correctGuessesArr.map(function(letter) {
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
      formatAnswer();
      break;
    default:
      formattedStatus = "Still playing...";
      break;
  }
  document.getElementById('result').innerHTML = formattedStatus;
}

function extras() {
  document.getElementById('strikes').innerHTML = hangman.getStrikes();
  document.getElementById('guesses').innerHTML = hangman.guessesArr.join(" ");
  document.getElementById('messages').innerHTML = hangman.getMessages();
}
