/**
 * Author:    Jason Matthew F. Gino
 * Created:   2.16.2022
 * (c) Copyright by Ginoworks.
 **/


// Given
if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
//Input
let person = prompt("Please enter your name", "Harry Potter");

//Math
function reverseString(str) {
    // convert str to array
    var array = str.split('');
    // reverse of that array
    array.reverse();
    // convert back to str
    var newStr = array.join('');
    // return string
    return newStr;
}
//output
