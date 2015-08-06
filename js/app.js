

document.getElementById("button").addEventListener('click', function () {
	var billAmt = document.getElementsByClassName('text')[0].value;
		document.getElementById('tipHere').innerHTML = calculate(billAmt);

	var tipPercentage = document.getElementsByClassName('text')[0].value;
		document.getElementById('tipHere').innerHTML = calculate(billAmt);

	function calculate(billAmt){
	var tipAmt = billAmt * 0.20;
	return tipAmt.toFixed(2);
	}
			
	});