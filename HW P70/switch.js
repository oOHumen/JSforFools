let enemy = +prompt("How many enemies do you kill?");

switch (enemy){
	case 1:
		alert("You got 100 experience points for kills");
		break;

	case 3:
		alert("You got 400 experience points for kills");
		break;

	case 5:
		alert("You got 700 experience points for kills");
		break;

	case 10:
		alert("You got 1000 experience points for kills");
		break;

	default:
		alert(`You got ${enemy*100} experience points for kills`);
}