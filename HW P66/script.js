let age = +prompt("What is your age?");
let name;
if (age>18) {
	name = prompt("What is your name?");

	if ((age>25) && (name === "Jimm")) {
		alert("Welcome, Jimm");
	} else {
		alert("Who are you? I don't know you");
	}
}

