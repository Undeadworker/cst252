/**
 * Author:    Jason Matthew F. Gino
 * Created:   2.28.2022
 * (c) Copyright by Ginoworks.
 **/


// Given
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Input
var button = document.getElementById('my-button');
var John = document.getElementById('oneEl');
var Bull = document.getElementById('twoEl');
button.addEventListener('click', alertClick);

//Math
function alertClick() {
    alert("Stop clicking me!");
};
function Levent() {
  document.writeln('<link rel="stylesheet" type="text/css" href="css/lab2.css">');
};
function LLevent() {
    alert("broken");
};
//output

button.addEventListener('click', alertClick);

John.addEventListener('click', Levent);

Bull.addEventListener('click', LLevent);
