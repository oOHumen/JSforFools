function multiplyAndDivide(multiplyer = 5) {
	let number = +prompt("Enter the number to proceed");
	let result = number * multiplyer / 10;
	alert(`The result is ${result}`);
}

multiplyAndDivide(10);