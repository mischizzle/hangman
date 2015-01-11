// case: need to remember past guesses; memoization??

var hangman = {

  strikes: 0,
  maxStrikes: 5,
  answerArr: [],
  word: "",

  init: function(word) {
    this.word = word;

    for(var i = 0; i < this.word.length; i++) {
      this.answerArr[i] = "";
    }
  },

  guess: function(letter) {
    var letterIndex;

    if(this.hasRemainingMoves()) {
      if(this.word.indexOf(letter) !== -1) {
        for (var i = 0; i < this.word.length; i++) {
          if(this.word.charAt(i) === letter) {
            this.answerArr[i] = letter;
          }
        }
        this.checkWin();

      } else {
        this.strikes++;
      }
    } else {
      this.setFinalOutcome("lost");
    }
    this.logGuess(letter);
  },

  checkWin: function() {
    if(this.answerArr.join("") === this.word) {
      setFinalOutcome("won");
    }
  },

  hasRemainingMoves: function() {
    if(this.strikes < this.maxStrikes) {
      return true;
    } else {
      return false;
    }
  },

  setFinalOutcome: function(outcome) {
    var finsalOutcome;
    if(outcome === "won") {
      finsalOutcome = "You win!";
    } else {
      finsalOutcome = "You loose. Boo :(";
    }

    document.getElementById('result').innerHTML = finsalOutcome;
  },

  logGuess: function(letter) {
    console.log("Guess letter:", letter);
    console.log("Strikes: ", this.strikes);
    console.log("Answer, so far: ", this.answerArr);
    console.log("");
  }
}

