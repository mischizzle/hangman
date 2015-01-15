var dictionary = function dictionary() {
  function getRandomWord() {

    var xhr = new XMLHttpRequest();
    // console.log(xhr);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET', '_data/14-letter-words.txt', true);
    xhr.send(null);

    return "abracadabra";
  }

  return {
    getRandomWord: getRandomWord
  };
};

// var dict1 = new dictionary();
// var word = dict1.getRandomWord();

// console.log(word);
