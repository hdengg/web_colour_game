
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;

		reset();
	});
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colourDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";


	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function() {
	reset();
});

colourDisplay.textContent = pickedColor;


for (var i =0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]

	squares[i].addEventListener("click", function() {
		// grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}


function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	// get num random colors to the array
	var colorArr = [];

	for (var i = 0; i < num; i++) {
		// get a random colour
		colorArr.push(randomColor());
	}

	return colorArr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g =  Math.floor(Math.random() * 256);
	var b =  Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}


