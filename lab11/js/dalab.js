/**
 * Author:    Jason Matthew F. Gino
 * Created:   3.7.2022
 * (c) Copyright by Ginoworks.
 **/

$("#my-button").click(function(){alert("Help")});

  $("#more").click(function(){
    $("div").append('<button id="my-button">THIS BUTTON DOES NOTHING</button>');
  });

  $("#helpo").click(function(){
    $("div").append('<link rel="stylesheet" type="text/css" href="css/2lab.css">');
  });
