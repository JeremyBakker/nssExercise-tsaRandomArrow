document.addEventListener("click", random);

function random(event) {
	var randomNumber = Math.floor((Math.random() * 1000000000) + 1);
	if (randomNumber % 2 === 0) {
		console.log("Left");
		document.getElementById("target").classList += "left";
	} else console.log("Right");
}