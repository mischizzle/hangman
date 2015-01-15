var dictionary = function dictionary() {
  function getRandomWord() {

    var randomIndex = Math.floor( Math.random() * dictionary_14_letters.length );
    return dictionary_14_letters[randomIndex].toLowerCase();
  }

  return {
    getRandomWord: getRandomWord
  };
};

// var dict1 = new dictionary();
// var word = dict1.getRandomWord();

// console.log(word);
