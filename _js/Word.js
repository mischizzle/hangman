var Word = function word() {
  var value = "";

  function init() {
    value = dictionary().getRandomWord();
  }

  function isLetterInWord(letter) {
    return value.indexOf(letter) !== -1;
  }

  function findAllOccurencesInWord(letter) {
    var result = [],
        i;

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
