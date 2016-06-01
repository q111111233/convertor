//Simple unit conversion code//
//functions to be used by a cooking app that convert between units. For example, a function that converts gallons to liters. Create a project for this like you did for the calculator, so that you can return and build a front-end for this later//

$(document).ready(function() {
  $("form#convert-vol").submit(function(event){
		var num1 = $("input#volume").val();
		$(".liters").text(Gallon2Liter(num1));
		event.preventDefault();

	});
	$("form#convert-length").submit(function(event){
		var num2 = $("input#length").val();
		$(".meters").text(Foot2Meter(num2));
		event.preventDefault();

	});
});

var Gallon2Liter = function(num1) {
debugger;
	return (num1 * 3.78541);
};

var Foot2Meter = function(num2) {
	return (num2 * 0.3048);
};


// (Gallon2Liter(num1));
// (Foot2Meter(num2));
