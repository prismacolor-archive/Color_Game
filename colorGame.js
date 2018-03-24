var numSquares = 9;
var colors = generateRandomColor(9)
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.querySelector("#display");
var messageDisplay = document.querySelector("#message");
var h = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");



  for(var i = 0; i < modes.length; i++) {
	modes[i].addEventListener("click", function() {
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		modes[2].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent === "Easy") {
			numSquares = 3;
		} else if (this.textContent === "Medium"){
			numSquares = 6;
		} else {
			numSquares = 9;
		} 
		
		reset();
		
	});	
   }

function reset() {
	//generate new colors
	colors = generateRandomColor(numSquares);
	//pick new random color
	picked = pickColor();
	//change color display
	colorDisplay.textContent = picked;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i]; 
		} else {
			squares[i].style.display = "none";
	};
	
	h.style.background = "steelblue";
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors";
};

}

resetButton.addEventListener("click", function() {
	reset();
});
	

colorDisplay.textContent = picked;

  for(var i = 0; i < squares.length; i++) {
	//pick squares
	squares[i].style.backgroundColor = colors[i];
	//click events
	squares[i].addEventListener("click", function() {
		var clicked = this.style.backgroundColor;
		
		if(clicked === picked) { 
		messageDisplay.textContent = "Correct! Woot Woot!"; 
		changeColors(clicked);
		h.style.backgroundColor = clicked;
		resetButton.textContent = "Play again?"
		} else {
			this.style.background = "#000000";
			messageDisplay.textContent = "Try again.";
		} 
	});
   }	

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color;}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
	
}

function generateRandomColor(num) {
	//make array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
	
}
	
	function randomColor() {
	  //pick red from 0-225
	  var r = Math.floor(Math.random() * 256);
	  //pick green
	  var g = Math.floor(Math.random() * 256);
	  //pick blue
	  var b = Math.floor(Math.random() * 256);
	  
	  return "rgb(" + r + ", " + g + ", " + b + ")";
		
	}
	
