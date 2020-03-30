// Game structure pseudo-code
// 1. Show a trivia question until player answers it or timer runs out.
// 2. When player clicks correct answer, show a popup saying so. After 3 seconds move on to the next question (do this without userinput).
// 3. If the player clicks the wrong answer, let them know and move on to the next question. Simalr to step 2.
// 4. If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// 5. If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// 6. On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

$(document).ready(function() {
	// Global Variables and Objects
	var question1 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer4'
	};

	var question2 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer1'
	};

	var question3 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer2'
	};

	var question4 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer4'
	};

	var question5 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer1'
	};

	var question6 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer3'
	};

	var question7 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer4'
	};

	var question8 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer1'
	};

	var question9 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer2'
	};

	var question10 = {
		quest   : '',
		answer1 : '',
		answer2 : '',
		answer3 : '',
		answer4 : '',
		correct : 'answer4'
	};
	// Start Game Functions
	// Create an on click to start the game
	// Set up start stage
	// Remove any text/html from previous game

	// Timer/Clock running and timer display Functions
	// Start Timer
	// Stop Timer
	// Timer Counter
	// Display Timer

	// Right/Wrong answers and out of time display Functions
	// If answer is right
	// If answer is wrong
	// If player runs out of time
	// Check if right answer was clicked
	// Moves to next question
	// When there are no more questions

	// Display current Question Function
	// Update the stage with question and answer choices

	// Update end stage screen with right wrong and unanswered questions Function

	// Restart the game Function
	// Create an on click that gets displayed when game is over
});
