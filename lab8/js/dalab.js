/**
 * Author:    Jason Matthew F. Gino
 * Created:   2.27.2022
 * (c) Copyright by Ginoworks.
 **/


// Given
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Input

//Math
function board(x){
  return (x / 2);
} ;

var john = array.map(board);

var bull = array.map(function board(x){
  return (x / 2);
}) ;
//output
document.writeln("a array" + array);

document.writeln("array with math" + john);

document.writeln("math" + bull);
