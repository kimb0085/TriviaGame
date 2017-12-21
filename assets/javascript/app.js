

var question = ""
var answers = []
var correctAnswer = ""
var questions = [
{
	question: "As of 2017, approximately how many breweries does Minnesota have?",
	answers: ["202", "98", "112", "119"],
	correctAnswer: "112"
},

{
	question: "Which Minnesota brewery has been open the longest?",
	answers: ["Summit", "Schells", "Town Hall", "Great Waters"],
	correctAnswer: "Schells"
},

{
	question: "What year did Schells open?",
	answers: ["1764", "1839", "1902", "1860"],
	correctAnswer: "1860"
},

{
	question: "What distinguishes a brewpub from a brewery?",
	answers: ["The word pub, duh", "Nothing, they are the same", "A restaurant that brews beer onsite", "A place with food and beer"],
	correctAnswer: "A restaurant that brews beer onsite"
},

{
	question: "What legislation passed under the 'Surly Bill'?",
	answers: ["Allows breweries that produce less than 250K barrels/year to sell pints onsite", "Allows breweries that produce less than 50K barrels/year to sell pints onsite", 
	"Allows breweries that produce less than 20K barrels/year to sell pints onsite", "Allows breweries that produce less than 100K barrels/year to sell pints onsite"],
	correctAnswer: "Allows breweries that produce less than 250K barrels/year to sell pints onsite"
},

{
	question: "In order to sell growlers in Minnesota, what is the maximum allowable limit of barrel/year production?",
	answers: ["70K", "5K", "25K", "20K"],
	correctAnswer: "20K"
},

{
	question: "Which of the following breweries can sell growlers?",
	answers: ["Fulton", "Third Street", "Schells", "BauHaus"],
	correctAnswer: "BauHaus"
},

{
	question: "Which brewery is gluten free?",
	answers: ["Sociable Cider Works", "Burning Brothers", "Fair State", "Forager"],
	correctAnswer: "Burning Brothers"
},

{
	question: "Which brewery beat a NASA keyword search on google?",
	answers: ["Lift Bridge", "Tin Whiskers", "Insight", "Tanzenwald"],
	correctAnswer: "Tin Whiskers"
},

{
	question: "Which beer is your favorite?",
	answers: ["Yuck! Beer is gross!", "Stouts", "Depends on the season", "IPAs - give me all the hops"],
	correctAnswer: ["Stouts", "Depends on the season", "IPAs"]
},
]

$("#play").on('click', function(){
	playGame();
});

$("#submit").on('click', function(){
	showResult();
});

$("#replay").on('click', function() {
	playGame();
});

var game = {
	right: 0,
	wrong: 0,
	counter: 60,
	
	countdown: function() {
		game.counter--;
		$("#display").html("<h2>" + game.counter + "</h2>");
		if(game.counter === 0) {
			// console.log("Game Over");
			clearInterval(timer);
			$("#questions").remove();
			$(".panel-body").html("<h2>" + "Game Over!" + "</h2>");
		}
	}
}

	var playGame = function() {
		timer = setInterval(function(){game.countdown()}, 1000);
		$("#display").html("<h2>60</h2>");
		$("#play").remove();
		for (var i = 0; i < questions.length; i++) {
			$("#questions").append("<h2>" + questions[i].question + "</h2>");
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#questions").append("<input type='radio' name='question-"+i+" ' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j] + "<br>");
			}
		}


		if($(questions.correctAnswer).is(":checked")) {
				game.right++;
			} else {
				game.wrong++;
			}

		// if($("#radio-button2").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button3").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button4").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button5").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button6").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button7").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button8").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button9").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}

		// if($("#radio-button10[i]").is(":checked")) {
		// 		game.right++;
		// 	} else {
		// 		game.wrong++;
		// 	}
	}

	// gameOver = function() {
		
	// 		if($("correctAnswer1").is(":checked")) {
	// 			game.right++;
	// 		} else {
	// 			game.wrong++;
	// 		}
	// 	}


	// gameOver = function() {
	// 		questions.forEach(function() {
	// 			var answerContainer = questions[i].answers[j];
	// 			var selector = 'input[name=question'+question[i]+']:checked';
	// 			var userAnswer = (answerContainer.querySelector(selector) || {}).value;

	// 			if(userAnswer===currentQuestion.correctAnswer) {
	// 				game.right++;
	// 			} else {
	// 				game.wrong++;
	// 			}
	// 		});
		// gameOver = function() {
		// 	questions.forEach( (currentQuestion, questionNumber) => {
		// 		var answerContainer = answerContainers[questionNumber];
		// 		var selector = 'input[name=question'+questionNumber+']:checked';
		// 		var userAnswer = (answerContainer.querySelector(selector) || {}).value;

		// 		if(userAnswer===currentQuestion.correctAnswer) {
		// 			game.right++;
		// 		} else {
		// 			game.wrong++;
		// 		}
		// 	});

			// $(questions[i].question[0].correctAnswer).is("checked")
			// if(true) {
			// 	game.right++;
			// } else {
			// 	game.wrong++;
			// }

			// $.each($('input[name="question-0]":checked'), function(){
			// 	if($(this).val() == questions[0].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });
			
			// $.each($('input[name="question-1]":checked'), function(){
			// 	if($(this).val() == questions[1].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-2]":checked'), function(){
			// 	if($(this).val() == questions[2].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-3]":checked'), function(){
			// 	if($(this).val() == questions[3].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-4]":checked'), function(){
			// 	if($(this).val() == questions[4].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-5]":checked'), function(){
			// 	if($(this).val() == questions[5].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-6]":checked'), function(){
			// 	if($(this).val() == questions[6].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-7]":checked'), function(){
			// 	if($(this).val() == questions[7].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-8]":checked'), function(){
			// 	if($(this).val() == questions[8].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });

			// $.each($('input[name="question-9]":checked'), function(){
			// 	if($(this).val() == questions[9].correctAnswer) {
			// 		game.right++;
			// 	} else {
			// 		game.wrong++;
			// 	}
			// });
	// }

	var	showResult = function() {
			clearInterval(timer);

			$("#questions").remove();
			$(".panel-body").html("<h2>" + "Game Over!" + "</h2>");
			$(".panel-body").append("<h3>Number Right: " + game.right + "</h3>");
			$(".panel-body").append("<h3>Number Wrong: " + game.wrong + "</h3>");
			$("#submit").remove();
		}	

		
		


