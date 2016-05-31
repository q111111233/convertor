//Simple unit conversion code//

var Adam = function(num1, num2) {
	return num1 + num2;
};

var Sunshine = function(num1, num2) {
	return num1 - num2;
};

var Mike = function(num1, num2) {
	return num1 * num2;
};

var Dave = function(num1, num2) {
	return num1 / num2;
};

var num1 = parseInt(prompt("Gimme a number:"));
var num2 = parseInt(prompt("Gimme another number!"));

alert(Adam(num1, num2));
alert(Sunshine(num1, num2));
alert(Mike(num1, num2));
alert(Dave(num1, num2));
