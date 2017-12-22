

var question = ""
var answers = []
var correctAnswer = ""
var questions = [
{
	question: "As of 2017, approximately how many breweries does Minnesota have?",
	answers: ["202", "98", "112", "119"],
	correctAnswer: "112",
	correctRadio: '#radio-2',
},

{
	question: "Which Minnesota brewery has been open the longest?",
	answers: ["Summit", "Schells", "Town Hall", "Great Waters"],
	correctAnswer: "Schells",
	correctRadio: '#radio-1',
},

{
	question: "What year did Schells open?",
	answers: ["1764", "1839", "1902", "1860"],
	correctAnswer: "1860",
	correctRadio: '#radio-3',
},

{
	question: "What distinguishes a brewpub from a brewery?",
	answers: ["The word pub, duh", "Nothing, they are the same", "A restaurant that brews beer onsite", "A place with food and beer"],
	correctAnswer: "A restaurant that brews beer onsite",
	correctRadio: '#radio-2',
},

{
	question: "What legislation passed under the 'Surly Bill'?",
	answers: ["Allows breweries that produce less than 250K barrels per year to sell pints onsite", "Allows breweries that produce less than 50K barrels per year to sell pints onsite", 
	"Allows breweries that produce less than 20K barrels per year to sell pints onsite", "Allows breweries that produce less than 100K barrels per year to sell pints onsite"],
	correctAnswer: "Allows breweries that produce less than 250K barrels peryear to sell pints onsite",
	correctRadio: '#radio-0',
},

{
	question: "In order to sell growlers in Minnesota, what is the maximum allowable limit of barrel/year production?",
	answers: ["70K", "5K", "25K", "20K"],
	correctAnswer: "20K",
	correctRadio: '#radio-3',
},

{
	question: "Which of the following breweries can sell growlers?",
	answers: ["Fulton", "Third Street", "Schells", "BauHaus"],
	correctAnswer: "BauHaus",
	correctRadio: '#radio-3',
},

{
	question: "Which brewery is gluten free?",
	answers: ["Sociable Cider Works", "Burning Brothers", "Fair State", "Forager"],
	correctAnswer: "Burning Brothers",
	correctRadio: '#radio-1',
},

{
	question: "Which brewery beat a NASA keyword search on google?",
	answers: ["Lift Bridge", "Tin Whiskers", "Insight", "Tanzenwald"],
	correctAnswer: "Tin Whiskers",
	correctRadio: '#radio-1',
},

{
	question: "Which beer is your favorite?",
	answers: ["Yuck! Beer is gross!", "Stouts", "Depends on the season", "IPAs - give me all the hops"],
	correctAnswer: ["Stouts", "Depends on the season", "IPAs"],
	correctRadio: '#radio-2',
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
				var input = $("<input type='radio' id='radio-"+j+"' name='question-"+i+" ' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j] + "<br>");
				input.click(function() {
					if ($(this).is(':checked')) {
						console.log('Is checked!');
					}
				});
				$("#questions").append(input);
			}
		}
	}

	gameOver = function() {
		questions.forEach(function () {
			if ($(questions.correctRadio).is(':checked')) {
				game.right++;
			} else {
				game.wrong++;
			}
		});
	}	
	

	var	showResult = function() {
			gameOver();
			clearInterval(timer);

			$("#questions").remove();
			$(".panel-body").html("<h2>" + "Game Over!" + "</h2>");
			$(".panel-body").append("<h3>Number Right: " + game.right + "</h3>");
			$(".panel-body").append("<h3>Number Wrong: " + game.wrong + "</h3>");
			$("#submit").remove();
		}	

		
		


