var dictionary = function dictionary() {
  function getRandomWord() {

    var randomIndex = Math.floor( Math.random() * dictionary_14_letters.length );
    var randomWord = dictionary_14_letters[randomIndex].toLowerCase();

    // console.log(randomWord);
    return randomWord;
  }

  return {
    getRandomWord: getRandomWord
  };
};
