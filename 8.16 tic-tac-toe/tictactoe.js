let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
   // Clear computer's move timeout if it exists
   if (computerMoveTimeout) {
      clearTimeout(computerMoveTimeout);
      computerMoveTimeout = 0;
   }

   // Reset all game board buttons
   const buttons = getGameBoardButtons();
   buttons.forEach(button => {
      button.textContent = '';
      button.classList.remove('x', 'o');
      button.removeAttribute('disabled');
   });

   // Allow the player to take a turn
   playerTurn = true;

   // Set turn information paragraph
   const turnInfo = document.getElementById('turnInfo');
   turnInfo.textContent = "Your turn";
}

function boardButtonClicked(button) {
   if (playerTurn && button.textContent === '') {
      // Set the button's text content to "X"
      button.textContent = 'X';
      // Add the "x" class to the button
      button.classList.add('x');
      // Disable the button
      button.disabled = true;
      // Switch turn to computer
      switchTurn();
   }
}

function switchTurn() {
   const result = checkForWinner();
   const turnInfo = document.getElementById('turnInfo');

   if (result === gameStatus.MORE_MOVES_LEFT) {
      // More moves left
      if (playerTurn) {
         // Player just took a turn, now it's computer's turn
         playerTurn = false;
         turnInfo.textContent = "Computer's turn";
         // Delay computer move by 1 second
         computerMoveTimeout = setTimeout(makeComputerMove, 1000);
      } else {
         // Computer just took a turn, now it's player's turn
         playerTurn = true;
         turnInfo.textContent = "Your turn";
      }
   } else {
      // Game over (winner or draw)
      playerTurn = false; // Disable further moves
      if (result === gameStatus.HUMAN_WINS) {
         turnInfo.textContent = "You win!";
      } else if (result === gameStatus.COMPUTER_WINS) {
         turnInfo.textContent = "Computer wins!";
      } else {
         turnInfo.textContent = "Draw game";
      }
   }
}

function makeComputerMove() {
   const buttons = getGameBoardButtons();
   const availableButtons = Array.from(buttons).filter(button => button.textContent === '');

   // Choose a random available button
   const randomIndex = Math.floor(Math.random() * availableButtons.length);
   const selectedButton = availableButtons[randomIndex];

   // Set the button's text content to "O"
   selectedButton.textContent = 'O';
   // Add the "o" class to the button
   selectedButton.classList.add('o');
   // Disable the button
   selectedButton.disabled = true;

   // Switch turn back to player
   switchTurn();
}
