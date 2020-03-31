// Game structure pseudo-code
// 1. Show a trivia question until player answers it or timer runs out.
// 2. When player clicks correct answer, show a popup saying so. After 3 seconds move on to the next question (do this without userinput).
// 3. If the player clicks the wrong answer, let them know and move on to the next question. Simalr to step 2.
// 4. If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// 5. If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// 6. On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

$(document).ready(function() {
	// Global Variables/Objects
	var question1 = {
		quest   : 'How many Earths could fit inside the sun?',
		answer1 : '3',
		answer2 : '1,300',
		answer3 : '13,000',
		answer4 : '1.3 million',
		correct : 'answer4'
	};

	var question2 = {
		quest   : 'Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II?',
		answer1 : 'Fort Know',
		answer2 : 'The White House',
		answer3 : 'Camp David',
		answer4 : 'Fort Ticonderoga',
		correct : 'answer1'
	};

	var question3 = {
		quest   : 'Which country consumes the most chocolate per capita?',
		answer1 : 'The United States',
		answer2 : 'Switzerland',
		answer3 : 'Germany',
		answer4 : 'The United Kingdom',
		correct : 'answer2'
	};

	var question4 = {
		quest   : 'In which country was the largest-known Tyrannosaurus rex skeleton found?',
		answer1 : 'Mexico',
		answer2 : 'The United States',
		answer3 : 'Russia',
		answer4 : 'Canada',
		correct : 'answer4'
	};

	var question5 = {
		quest   : "Which two U.S. states don't observe Daylight Saving Time?",
		answer1 : 'Arizona and Hawaii',
		answer2 : 'Arizona and Alaska',
		answer3 : 'Alaska and California',
		answer4 : 'California and Hawaii',
		correct : 'answer1'
	};

	var question6 = {
		quest   : 'After Antarctica, what is the most sparsely populated continent?',
		answer1 : 'Africa',
		answer2 : 'South America',
		answer3 : 'Australia',
		answer4 : 'North America',
		correct : 'answer3'
	};

	var question7 = {
		quest   : 'What is the smallest bone in the human body?',
		answer1 : 'The clavicle',
		answer2 : 'The fibula',
		answer3 : 'The mastoid',
		answer4 : 'The stapes',
		correct : 'answer4'
	};

	var question8 = {
		quest   : 'What is the loudest animal on Earth?',
		answer1 : 'The Sperm Whale',
		answer2 : 'The Elephant',
		answer3 : 'The American Bald Eagle',
		answer4 : 'The Lion',
		correct : 'answer1'
	};

	var question9 = {
		quest   : 'Which planets in our solar system do not have moons?',
		answer1 : 'Mars and Neptune',
		answer2 : 'Mercury and Venus',
		answer3 : 'Mars and Saturn',
		answer4 : 'Mercury and Uranus',
		correct : 'answer2'
	};

	var question10 = {
		quest   : 'What percent of people have black or brown hair?',
		answer1 : '60%',
		answer2 : '50%',
		answer3 : '75%',
		answer4 : '90%',
		correct : 'answer4'
	};

	// Array to select a object question to display
	triviaArray = [
		question1,
		question2,
		question3,
		question4,
		question5,
		question6,
		question7,
		question8,
		question9,
		question10
	];

	//counter variables for questions
	var right = 0;
	var wrong = 0;
	var unanswered = 0;
	var currentArray = [];

	// var to store interval
	var intervalId;
	var countNum = 0;

	// img/gif variable to display for right/wrong answers
	var rightGif = '';
	var wrongGif = '';

	// Start Game Function
	// Create an on click to start the game
	// Set up start stage
	// Remove any text/html from previous game

	// Timer/Clock running and timer display Functions
    // Start Timer
    function start() {
        if () {
         
        }
       }
    // Stop Timer
    function stop() {
        if () {
         
        }
       }
    // Timer Counter
    function count() {
        if () {
         
        }
       }
    // Display and convert Timer correctly
    function timeConverter() {
        if () {
         
        }
       }

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
