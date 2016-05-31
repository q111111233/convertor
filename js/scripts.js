//Simple unit conversion code//
//functions to be used by a cooking app that convert between units. For example, a function that converts gallons to liters. Create a project for this like you did for the calculator, so that you can return and build a front-end for this later//

var Gallon2Liter = function(num1) {
	return (num1 * 3.78541);
};

var Foot2Meter = function(num2) {
	return (num2 * 0.3048);
};


var num1 = parseInt(prompt("Gimme a number of Gallons:"));
var num2 = parseInt(prompt("Gimme a number of Feet:"));

alert(Gallon2Liter(num1));
alert(Foot2Meter(num2));
