
var a = 0;
var b = 0;
var value = (a * a) + (2 * a * b) - (b * b);

if (isNaN(value)){
	return;
}

if (value === 0) {
	console.log('wartość 0');
} else if (value > 0){
	console.log('wartość dodatnia');
} else {
	console.log('wartość ujemna');
}
