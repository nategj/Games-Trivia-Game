var panel = $ ("");
var countStartNumber = 30;

// Question set 
var questions  = [{
	// property              value                                {}=object, $=Jqry 
 	questions: " Who is the original Snake? ";
	answers = ["Naked Snake" , "Venom Snake" , "Solid Snake"];
	correctAnswer: "Naked Snake" ,;
	image: "assets/ naked snake.png";
	console.log

}, {

	questions: " Which out of the three is the best character in storm 4 ";
	answers = ["Obito" , "Itachi" , "Gaara"];
	correctAnswer: "Gaara" ,;
	image: "assets/ Gaara.jpg";

};
// varuable to hold our set intevral
var timer;
var game = {
	questions, 
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		this.counter--;
		$("counter-number").html(this.counter);
			if (this.counter === 0) {
				console.log('Times up');
				this.timeUp();

			}
	}
	loadQuestion: function() {
		timer = setInterval(this.countdown.bind(this), 1000);
		panel.html("<h2>" + question(this.currentQuestion).question + "</h2>");
		for (var i = 0; i < question(this.currentQuestion). answer.length; i++) (
			panel.append("button class 'answer-button' id='button' date-name" + 
			question(this.currentQuestion).answer [i] + ">" + 
			question(this.currentQuestion).answer [i] + "</button")
		}

			nextQuestion: function() {
				this.counter = window.countStartNumber;
				$('#counter-number').html (this.counter);
				this.loadQuestion.bind(this)();
			},
			timeUp: function() {
				$('#counter-number').html(this.counter);

				panel.html("<h2>Out of Time!</h2>");
				panel.append("<h3>The correct answer was: " + question(this.currentQuestion).correctAnswer);
				panel.append("img src'" + question(this.currentQuestion).img + " />");

				if(this.currentQuestion === questions.length -1) {
					setTimeout(this.results, 3 * 1000);
				}else setTimeout(this.nextQuestion, 3 * 1000);
		}
	}
}
//CLICK EVENTS






]



