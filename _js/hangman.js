// case: need to remember past guesses; memoization??

var Hangman = function hangman() {

  var strikes = 0,
      maxStrikes = 9,
      guessesArr = [],
      correctGuessesArr = [],
      gameStatus = '',
      messages = '',
      word = new Word();

  initGuessArr();

  function initGuessArr() {
    var i;
    for(i = 0; i < word.getValue().length; i++) {
      correctGuessesArr[i] = '';
    }
  }

  function guess(letter) {
    var i;

    clearMessages();

    if(passSanityCheck(letter)) {
      if(word.isLetterInWord(letter, word.getValue())) {
        for (i = 0; i < word.getValue().length; i++) {
          if(word.getValue().charAt(i) === letter) {
            correctGuessesArr[i] = letter;
          }
        }
      } else {
        strikes++;
      }
      guessesArr.push(letter);
      checkGameCompletion();
    }
  }

  function passSanityCheck(letter) {
    var result = false;

    if( duplicateGuess(letter)) {
      messages = 'You have already tried that letter';
    } else if ( !isLetter(letter) ) {
      messages = 'Please input a letter from A-Z';
    } else {
      return true;
    }
  }

  function isLetter(letter) {
    return !letter.match( /[^A-Za-z]/ );
  }

  function duplicateGuess(letter) {
    return word.isLetterInWord(letter, guessesArr);
  }

  function gameOver() {
    return strikes === maxStrikes;
  }

  function checkGameCompletion() {
    var newArr = word.getValue().split('');

    if( word.getValue() === correctGuessesArr.join('')){
      gameStatus = 'win';
    } else if( gameOver() ) {
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
