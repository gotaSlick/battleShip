
// This nest array replaces the html table with td and tr.... 
// 10 by 10 array 
var shipData = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	['X', 'X', null, null, null, null, null, 'X', 'X', 'X'],
	[null, null, 'X', 'X', 'X', 'X', 'X', null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, 'X', null, null, 'X', null],
	[null, null, null, null, null, 'X', null, null, 'X', null],
	[null, null, null, null, null, 'X', null, null, 'X', null],
	[null, null, null, null, null, null, null, null, 'X', null],
	[null, null, null, null, null, null, null, null, null, null]
];

var gameState = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
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
					tableData.setAttribute("col", j);
					tableData.setAttribute("onclick", "play(this)");
					tableData.innerHTML = shipData[i][j];
					tableRow.appendChild(tableData); //applies tableData(columns) to the tableRows.
				}
				gameBoard.appendChild(tableRow); // Outer loop that happens after each row.
						// adds up a row and its 10 columns each time the inner loop finishes. This goes 10 times.
			}
		}

		function populateGameBoard(gameState) {
			var gameBoard = document.getElementById("gameBoard");
			for(var i = 0; i < gameState.length; i++) {
				var row = gameBoard.children[i];
				console.log(row);
				for(var j = 0; j < gameState[i].length; j++) {
					var col = row.children[j];
					console.log(col);
					col.innerHTML = gameState[i][j];
				}
			}
		}

// If we hit, we want to add 5 points. If we miss, we deduct one.
		function play(cell) {
			  var col = cell.getAttribute("col");
			  var row = cell.parentElement.getAttribute("row");
			  var score = Number(document.getElementById("score").innerHTML);
			  var hits = Number(document.getElementById("hits").innerHTML);

			  if (gameState[row][col] == null) { // if the game state at position row and col equals zero then
			    if (shipData[row][col] == "X") { // if it's an X it means we have a hit.
			      alert("Hit!");
			      gameState[row][col] = "X";
			      score += 5;
			      hits -= 1;
			    } else {
			      alert("You hit water!");
			      gameState[row][col] = "O";
			      score -= 1;
			    }
			  } else {
			    alert("You've already tried this one!");
			  }
			  document.getElementById("score").innerHTML = score;
			  document.getElementById("hits").innerHTML = hits;
			  populateGameBoard(gameState);
			  hasGameEnded(hits);
			}

		function hasGameEnded(hits){
		 	if (hits === 0){
		     	alert("You won the game");
		        var tds = document.getElementsByTagName("td");
		        for (var i = 0; i < tds.length; i++){
					tds[i].onclick = function(){
		             	alert("The game has finished!"); 
		            }
		        }
		    }
		}


	window.onload = function() {
		createGameBoard();
	};

var startButton = document.getElementById("startButton");
startButton.onclick = function() {
	//alert("I clicked the button");
	populateGameBoard(gameState);
};



