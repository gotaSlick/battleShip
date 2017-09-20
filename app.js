
// This nest array replaces the html table with td and tr.... 
// 10 by 10 array 
var shipData = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, 'X', null, null, null, null, null, 'X', null, null],
	[null, null, 'X', 'X', 'X', 'X', null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'X', null],
	[null, null, null, null, null, null, null, null, 'X', null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null]
];

	/* Carrier   -5 hits
	   Battleship - 4 hits
	   Destroyer - 3 hits
	   Submarine - 3 hits
	   Patrol Boat - 2 hits
	*/

		function createGameBoard() {
		var gameBoard = document.getElementById("gameBoard");
		for (var i = 0; i < 10; i++) {
			var tableRow = document.createElement("tr");
			tableRow.setAttribute("row", i);
			for(var j = 0; j < 10; j++) {
				var tableData = document.createElement("td");
				tableData.innerHTML = shipData[i][j];
				tableData.setAttribute("col", j);
				tableRow.appendChild(tableData); //applies tableData(columns) to the tableRows.
			}
			gameBoard.appendChild(tableRow); // Outer loop that happens after each row.
					// adds up a row and its 10 columns each time the inner loop finishes. This goes 10 times.
		}
	}
	window.onload = function() {
		createGameBoard();
	};