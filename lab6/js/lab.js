/**
 * Author:    Jason Matthew F. Gino
 * Created:   2.16.2022
 * (c) Copyright by Ginoworks.
 **/


// Given
var myTransport = ["Ford Taurus","bike","ride from friends","Lime Scooter"];

var myMainRide = {
  make :  "Ford",
  model : "Super Cool One",
  color : "Bad yellow",
  year : 2020,
  age : function() {
    return 2022 - year;
  }
}

make = "Ford";

model = "Super Cool One";

color = "Bad yellow";

year = 2020
//Input


//Math
var age = 2022 - year;

//output
document.writeln("Kinds of transoportion use:" + myTransport + "<br>" );

document.writeln("My Main Ride: <pre>" +
  JSON.stringify(myMainRide, null, '\t') + "</pre>");
