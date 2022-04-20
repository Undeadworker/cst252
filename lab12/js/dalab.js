/**
 * Author:    Jason Matthew F. Gino
 * Created:   3.15.2022
 * (c) Copyright by Ginoworks.
 **/

$function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
 newText = "<h3>" + houseObj.title + "</h3>" +
          "<p>" + houseObj.text + "</p>" + credit;
  document.getElementById("output").innerHTML = newText;
})
