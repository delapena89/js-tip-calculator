
var elementArray = document.getElementsByClassName('text');

// // Added Event Listener to the Button, listening for click.
document.getElementById("button").addEventListener('click', function () {

// 	// Returns an array of HTML elements that contain the class name of 'text'
	var elementArray = document.getElementsByClassName('text');
// 	// Returns the first element of the elementArray (bill amount input)
	var billAmtInput = elementArray[0];
// 	// Returns the user inputed value
	var billAmt = parseInt(billAmtInput.value);
	console.log(billAmt);

	var tipPercentageInput = elementArray[1];
	// needs refactoring to remove '%'
	var tipPercentArray = (tipPercentageInput.value).split('').slice(0,2).join("");
	console.log(tipPercentageInput.value);

	var total = billAmt * (parseInt(tipPercentArray)/100);
	// Appending total back to the DOM
	document.getElementById("tipHere").innerHTML = ("You should tip $ " + total.toFixed(2)); 


	});

	

	