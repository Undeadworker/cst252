/**
 * Author:    Jason Matthew F. Gino
 * Created:   2.28.2022
 * (c) Copyright by Ginoworks.
 **/



//Input
var button = document.getElementById('my-button');
var inputEl = document.getElementById("user-name");

//Math

button.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


//output

button.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

outputEl = document.getElementById("output");

// Given
console.log("button element:", button);
console.log("output element:", outputEl);
