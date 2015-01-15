// case: need to remember past guesses; memoization??

var Hangman = function hangman() {

  var strikes = 0,
      maxStrikes = 9,
      guesses = 0,
      answerArr = [],
      gameStatus = '',
      word = new Word();

  function init() {
    var i;

    word.init();

    for(i = 0; i < word.getValue().length; i++) {
      answerArr[i] = '';
    }
  }

  function guess(letter) {
    var i;

    guesses++;

    if(!checkLoss() && word.isLetterInWord(letter)) {
      // word.findAllOccurencesInWord(letter);
      for (i = 0; i < word.getValue().length; i++) {
        if(word.getValue().charAt(i) === letter) {
          answerArr[i] = letter;
        }
      }
    } else {
      strikes++;
    }
    checkGameCompletion()
  }

  function checkLoss() {
    return strikes === maxStrikes;
  }

  function checkGameCompletion() {
    if( word.getValue() === answerArr.join('')){
      // finalOutcome = 'You win! :)';
      gameStatus = 'win';
    } else if( strikes === maxStrikes ) {
      // finalOutcome = 'You loose :(';
      gameStatus = 'lost';
    } else {
      // finalOutcome = 'Game still in progress...';
      gameStatus = 'play';
    }
  }

  function getStrikes() {
    return strikes;
  }

  function getGuesses() {
    return guesses;
  }

  function getGameStatus() {
    return gameStatus;
  }

  return {
    init: init,
    guess: guess,
    getGuesses: getGuesses,
    getStrikes: getStrikes,
    getGameStatus: getGameStatus,
    answerArr: answerArr
  };
};
