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
		quest   :
			'Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II?',
		answer1 : 'Fort Knox',
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

	// prevents the clock from being sped up unnecessarily
	var clockRunning = false;
	var time = 25;

	// img/gif variable to display for right/wrong answers
	var rightGif = 'assets/images/goodjobgif.gif';
	var wrongGif = 'assets/images/wronggif.gif';

	//audio variables
	var wrongSound = new Audio('assets/audio/priceiswrong.mp3');
	var rightSound = new Audio('assets/audio/tpir-dings.mp3');
	var startSound = new Audio('assets/audio/NameDiallerStartTone.wav');
	var clockSound = new Audio('assets/audio/tic_tac_reveil.wav');
	clockSound.loop = true;

	// =============================================================================
	// ==========================================================================
	// =======================================================================
	// Game functions
	// =======================================================================
	// ==========================================================================
	// =============================================================================

	// Start Game Function
	function Game() {
		startStage();
	}
	//starts game
	Game();

	// Create an on click to start the game
	// Set up start stage
	// Remove any text/html from previous game
	function startStage() {
		var ID = 'startStage';
		report(ID);
		$('#stageDisplay').empty();
		$('#display').text('Time remaining: ' + time + ' seconds');
		$('#stageDisplay').append('<h1> Click me to start </h1>');
		$('#stageDisplay h1').attr('id', 'clickMe');
		//adds event listener for user to start the game
		$('#clickMe').on('click', function() {
			$('#stageDisplay').empty();
			start();
			triviaGame(currentArray);
		});
	}

	// Timer/Clock running and timer display Functions
	function report(section) {
		var divider = '------------------------------------';
		console.log(' ');
		console.log(divider);
		console.log('running ', section);
		console.log(divider);
	}

	// Start Timer
	function start() {
		if (!clockRunning) {
			$('#display').text('Time remaining: ' + time + ' seconds');
			intervalId = setInterval(count, 1000);
			clockRunning = true;
		}
	}

	// Stop Timer
	function stop() {
		clearInterval(intervalId);
		clockRunning = false;
		time = 25;
	}

	// Timer Counter
	function count() {
		time--;
		var converted = timeConverter(time);
		$('#display').text('Time remaining: ' + converted + ' seconds');
	}

	// Display and convert Timer correctly
	function timeConverter(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - minutes * 60;

		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return seconds;
	}

	// Right/Wrong answers and out of time display Functions
	function triviaGame() {
		var ID = 'triviaGame';
		report(ID);
		//if clock is running
		if (clockRunning) {
			//push question into dummy array
			currentArray.push(triviaArray[countNum]);
			//update stage with current question
			setStage(currentArray);
			//event listener added to choices given
			$('h3').on('click', function() {
				//sends ID of h3 clicked on to answer function
				answerCheck(this.id);
				//removes event listener to prevent clicking on other answers
				$('h3').off();
			});
		}
	}

	// animate.css function
	function animateCSS(element, animationName, callback) {
		const node = document.querySelector(element);
		node.classList.add('animated', animationName);

		function handleAnimationEnd() {
			node.classList.remove('animated', animationName);
			node.removeEventListener('animationend', handleAnimationEnd);

			if (typeof callback === 'function') callback();
		}

		node.addEventListener('animationend', handleAnimationEnd);
	}

	// If answer is right
	function rightAnswer() {
		right++;
		var giphy = $('<img>');
		giphy.addClass('img-fluid');
		giphy.attr('src', rightGif);
		giphy.attr('height', '400');
		giphy.attr('animation-duration', '3s');
		$('#stageDisplay').append(giphy);
	}

	// If answer is wrong
	function wrongAnswer() {
		var newTarget = '#' + currentArray[countNum].correct;
		animateCSS(newTarget, 'wobble');
		var giphy = $('<img>');
		giphy.addClass('img-fluid');
		giphy.attr('height', '400');
		giphy.attr('src', wrongGif);
		giphy.attr('animation-duration', '3s');
		$('#stageDisplay').append(giphy);
		wrong++;
	}

	// If player runs out of time
	function outOFtime() {
		var newTarget = '#' + currentArray[countNum].correct;
		animateCSS(newTarget, 'wobble');
		var giphy = $('<img>');
		giphy.addClass('img-fluid');
		giphy.attr('height', '400');
		giphy.attr('src', wrongGif);
		giphy.attr('animation-duration', '3s');
		$('#stageDisplay').append(giphy);
		unanswered++;
	}

	// Check if right answer was clicked
	function answerCheck(ID) {
		console.log('clicked on', ID);
		//  checks id of clicked on versus the correct answer for the question
		if (ID == currentArray[countNum].correct && time > 0) {
			rightAnswer(currentArray[countNum].correct);
		} else if (time > 0) {
			wrongAnswer(currentArray[countNum].correct);
		}

		// Moves to next question
		// When there are no more questions
		//question counter is incremented
		countNum++;
		//removes event listener
		$('h3').off();
		console.log(countNum);
		//if question counter is still less that array
		if (countNum < triviaArray.length) {
			console.log('passed through');
			stop();
			setTimeout(function() {
				start();
				triviaGame();
			}, 5000);
		} else {
			// else, there are no questions left.
			stop();
			endStage();
		}
	}

	// Display current Question Function
	// Update the stage with question and answer choices
	function setStage(current) {
		var ID = 'setStage';
		report(ID);

		$('#stageDisplay').children().remove();
		var newDiv = $('<div>');
		var quest1 = $('<h1>');
		quest1.attr('id', 'question');
		quest1.text(current[countNum].quest);
		newDiv.append(quest1);
		newDiv.append('<hr>');
		var ans1 = $('<h3>');
		ans1.attr('id', 'answer1');
		ans1.text(current[countNum].answer1);
		newDiv.append(ans1);
		var ans2 = $('<h3>');
		ans2.attr('id', 'answer2');
		ans2.text(current[countNum].answer2);
		newDiv.append(ans2);
		var ans3 = $('<h3>');
		ans3.attr('id', 'answer3');
		ans3.text(current[countNum].answer3);
		newDiv.append(ans3);
		var ans4 = $('<h3>');
		ans4.attr('id', 'answer4');
		ans4.text(current[countNum].answer4);
		newDiv.append(ans4);
		$('#stageDisplay').html(newDiv);
	}

	// Update end stage screen with right wrong and unanswered questions Function
	// Restart the game Function
	// Create an on click that gets displayed when game is over
	function endStage() {
		$('#stageDisplay').empty();
		var hOne = $('<h1>');
		hOne.text('Correct: ' + right);
		$('#stageDisplay').append(hOne);
		var hTwo = $('<h1>');
		hTwo.text('Wrong: ' + wrong);
		$('#stageDisplay').append(hTwo);
		var hThree = $('<h1>');
		var unAnswered1 = unanswered + (triviaArray.length - wrong - right);
		hThree.text('Unanswered: ' + unAnswered1);
		$('#stageDisplay').append(hThree);
		var hFour = $('<h1>');
		hFour.attr('id', 'startOver');
		hFour.text('Start Over?');
		$('#stageDisplay').append(hFour);
		//this event restarts the game when clicked on
		$('#startOver').on('click', function() {
			currentArray = [];
			time = 25;
			countNum = 0;
			$('#stageDisplay').empty();
			$('#display').text('Time remaining: ' + time + ' seconds');
			startStage();
		});
	}
});
