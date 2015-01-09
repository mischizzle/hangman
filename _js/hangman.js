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
    this.logGuess();

    if(this.checkGamePlay()) {

      if(this.word.indexOf(letter) !== -1) {
        for (var i = 0; i < this.word.length; i++) {
          letterIndex = this.word.indexOf(letter, i);

          if(letterIndex !== -1) {
            this.answerArr[letterIndex] = letter;
          }
        }
        this.checkWin();

      } else {
        console.log("Hangman!");
        this.strikes++;
      }
    }
  },

  checkWin: function() {
    if(this.answerArr.join("") === this.word) {
      console.log("You win!");
    }
  },

  checkGamePlay: function() {
    if(this.strikes < this.maxStrikes) {
      return true;
    } else {
      console.log("Game over :(");
    }
  },

  logGuess: function() {
    console.log("Strikes: ", this.strikes);
    console.log("Answer, so far: ", this.answerArr);
    console.log("");
  }
}

hangman.init("abracadabra");
hangman.guess("a");
hangman.guess("b");
hangman.guess("A");
hangman.guess("k");
hangman.guess("d");
hangman.guess("n");
hangman.guess("m");
hangman.guess("m");
hangman.guess("m");
