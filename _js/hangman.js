// case: need to remember past guesses; memoization??

var dictionary = function dictionary() {
  function getRandomWord() {
    return "abracadabra";
  }

  return {
    getRandomWord: getRandomWord
  };
};


var Word = function word() {
  var value = "";

  function init() {
    value = dictionary().getRandomWord();
  }

  function isLetterInWord(letter) {
    return value.indexOf(letter) !== -1;
  }

  function findAllOccurencesInWord(letter) {
    var result = [];
    var i;
    for (i = 0; i < value.length; i++) {
      if (value.charAt(i) === letter) {
        result.push(i);
      }
    }
    return result;
  }

  function getValue() {
    return value;
  }

  return {
    init: init,
    isLetterInWord: isLetterInWord,
    findAllOccurencesInWord: findAllOccurencesInWord,
    getValue: getValue
  };
};

// var word1 = new Word();
// // var word2 = new word();
// word1.init();
// console.log(word1);
// console.log(word1.getValue());

var hangman = {

  strikes: 0,
  maxStrikes: 9,
  guesses: 0,
  answerArr: [],
  word: new Word(),

  init: function init() {
    var i;
    this.word.init();

    for(i = 0; i < this.word.getValue().length; i++) {
      this.answerArr[i] = '';
    }
  },

  guess: function(letter) {
    // this.guess
    if(!this.checkLoss() && this.word.isLetterInWord(letter)) {
      // this.word.findAllOccurencesInWord(letter);
      for (var i = 0; i < this.word.getValue().length; i++) {
        if(this.word.getValue().charAt(i) === letter) {
          this.answerArr[i] = letter;
        }
      }
    } else {
      this.strikes++;
    }
    this.checkGameCompletion()
    this.logGuess(letter);
  },

  checkLoss: function() {
    return this.strikes === this.maxStrikes;
  },

  checkGameCompletion: function() {
    if(this.strikes === this.maxStrikes) {
      console.log("lost");
    } else {
      console.log("won");
    }
  },

  setFinalOutcome: function(outcome) {
    var finalOutcome;
    if(outcome === "won") {
      finalOutcome = "You win!";
    } else {
      finalOutcome = "You loose. Boo :(";
    }

    document.getElementById('result').innerHTML = finalOutcome;
  },

  logGuess: function(letter) {
    console.log("Guess letter:", letter);
    console.log("Strikes: ", this.strikes);
    console.log("Answer, so far: ", this.answerArr);
    console.log("");
  }
}

hangman.init();

