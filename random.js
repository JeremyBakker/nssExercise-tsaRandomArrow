/********** INSTRUCTIONS ***********/
/* 
Your job is to create a web page that, when the user clicks anywhere in the window, 
randomly determines if an air traveller should go down the left lane or the right lane 
by displaying an arrow in that direction.
*/

// add an event listener to the document to trigger a function on a click
document.addEventListener("click", random);

// clear the target area, generate a random number, and call left or right functions depending on result
function random(event) {
	document.getElementById("target").innerHTML = "";
	var randomNumber = Math.floor((Math.random() * 1000000000) + 1);
	if (randomNumber % 2 === 0) {
		addImageLeft();
	} else addImageRight();
}

// insert left arrow image into the DOM
function addImageLeft() {
	document.getElementById("target").innerHTML += 
		`<img src="images/left.png" alt="Image of Left Arrow" height = 400px width = 400px>`;
}

// insert right arrow image into the DOM
function addImageRight() {
	document.getElementById("target").innerHTML +=
		`<img src="images/right.png" alt="Image of Right Arrow" height = 400px width = 400px>`;
}