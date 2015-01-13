// case: need to remember past guesses; memoization??

var hangman = {

  strikes: 0,
  maxStrikes: 9,
  guesses: 0,
  answerArr: [],
  word: "",

  init: function(word) {
    this.word = word;

    for(var i = 0; i < this.word.length; i++) {
      this.answerArr[i] = "_";
    }
  },

  guess: function(letter) {
    var letterIndex;

    this.guesses++;

    if(!this.checkLoss() && this.word.indexOf(letter) !== -1) {

      for (var i = 0; i < this.word.length; i++) {
        if(this.word.charAt(i) === letter) {
          this.answerArr[i] = letter;
        }
      }
      this.checkWin();

    } else {
      this.strikes++;
      this.checkLoss();
    }

    this.logGuess(letter);
  },

  checkWin: function() {
    if(this.answerArr.join("") === this.word) {
      this.setFinalOutcome("won");
    }
  },

  checkLoss: function() {
    if(this.strikes === this.maxStrikes) {
      this.setFinalOutcome("lost");
      return true;
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

hangman.init("abracadabra");

