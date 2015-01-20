// case: need to remember past guesses; memoization??

var Hangman = function hangman() {

  var strikes = 0,
      maxStrikes = 9,
      guessesArr = [],
      correctGuessesArr = [],
      gameStatus = '',
      messages = '',
      letter = '',
      word = new Word();

  word.getValue().split('').map(function(item, i) {
    correctGuessesArr[i] = '';
  });

  function guess(userInputLetter) {

    letter = userInputLetter;
    clearMessages();

    if (passSanityCheck(letter)) {
      if (word.isLetterInWord(letter, word.getValue())) {
        addLetterToGuessesArr(letter);
      } else {
        strikes++;
      }
      guessesArr.push(letter);
      checkGameCompletion();
    }
  }

  function addLetterToGuessesArr() {
    var i;
    for (i = 0; i < word.getValue().length; i++) {
      if (word.getValue().charAt(i) === letter) {
        correctGuessesArr[i] = letter;
      }
    }
  }

  function passSanityCheck() {
    var result = false;

    if (duplicateGuess(letter)) {
      messages = 'You have already tried that letter';
    } else if (!isLetter(letter)) {
      messages = 'Please input a letter from A-Z';
    } else if (gameOver() ) {
      messages = 'Game over.';
    } else {
      return true;
    }
  }

  function isLetter() {
    return !letter.match( /[^A-Za-z]/ );
  }

  function duplicateGuess() {
    return word.isLetterInWord(letter, guessesArr);
  }

  function gameOver() {
    return strikes === maxStrikes;
  }

  function checkGameCompletion() {
    var newArr = word.getValue().split('');

    if (word.getValue() === correctGuessesArr.join('')) {
      gameStatus = 'win';
    } else if (gameOver()) {
      gameStatus = 'lost';
      // note: array assignment is asynchronous.. so have to push answer.
      correctGuessesArr.length = 0;
      correctGuessesArr.push.apply(correctGuessesArr, newArr);
    } else {
      gameStatus = 'play';
    }
  }

  function getCorrectGuessesArr() {
    return correctGuessesArr;
  }

  function getStrikes() {
    return strikes;
  }

  function getGameStatus() {
    return gameStatus;
  }

  function clearMessages() {
    messages = '';
  }

  function getMessages() {
    return messages;
  }

  return {
    guess: guess,
    getStrikes: getStrikes,
    getGameStatus: getGameStatus,
    getMessages: getMessages,
    guessesArr: guessesArr,
    correctGuessesArr: correctGuessesArr
  };
};
