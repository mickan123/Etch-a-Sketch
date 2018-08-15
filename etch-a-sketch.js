function createGrid(size, maxsize=800) {
	var grid = document.getElementsByClassName("grid")[0];

	//Subtract 2 due to border width
	var cell_width = maxsize / size - 2;

	for (var i=0; i<size; i++) {
		var row = document.createElement("div");
		row.className = "row";

		for (var j=0; j<size; j++) {
			var cell = document.createElement("div");
			cell.className = "cell"
			cell.style.width = cell_width + "px"
			cell.style.height = cell_width + "px"
			row.appendChild(cell)
		}
		grid.appendChild(row)
	}
}

function addListeners() {
	var cell = document.getElementsByClassName("cell")
	for (var i=0; i<cell.length; i++) {
		cell[i].addEventListener("mouseover", function() {
	    	this.style.background = "black";
		}); 
	}
}

function resetGrid() {
	var cell = document.getElementsByClassName("cell")

	for (var i=0; i<cell.length; i++) {
		cell[i].style.background = "white";
	}
}

function resizeGrid() {
	resetGrid();
	var input = prompt('Input dimension you wish to resize to');

	//Check if appropriate input
	if (isNaN(input) || input < 1 || input > 100) {
		alert("Input must be a number and within 1 and 100")
		return;
	}

	//Delete previous grid elements
	var rows = document.getElementsByClassName("row");
	while(rows[0]) {
		rows[0].parentElement.removeChild(rows[0]);
	}

	createGrid(input)
	addListeners()
}

function startup() {
	createGrid(16);
	addListeners()
}

startup()	