/**We're going to start off with 5 questions that need to be answered under a certain amount of time.
 * The questions will have 3-4 choices of answers.
 * When the time runs out the game will show how many questions the user has gotten right and gotten wrong.
Or if the user has submitted under the certain time given he or she's answers will prompt on the screen.
The questions will be based on a movie topic and the user has to guess which answer pertains to the movie. 
Once the answers are chosen the score will display upon the screen letting the user know how many questions out of 5 they got right.*/
var card = $("#quiz-area");


var questions = [
  {
    question:"What city is Batman Located in",
    answers:["Austin", "Atlanta", "Athens", "Gothem"],
    correctAnswer:"Gothem",
    
  },
  {
    question:"What is Batman's real name",
    answers:["Bruce", "Austin", "Waine", "Will"],
    correctAnswer:"Bruce",

  },
  {
    question:"What color is Batman's car",
    answers:["Blue", "Black", "Purple", "Grey"],
    correctAnswer:"Black",
        
  },
  {
     question:"Which nemesis of Batman says Oh you think darkness is your ally",
     answers:["Joker", "Clayface", "Bane", "Poison Ivy"],
     correctAnswer:"Bane",

 }];


var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 600);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});

    //  "Which superpower does Batman have", "What is Batman's real name", "What color is Batman's car", "Which nemesis of Batman says Oh you think darkness is your ally"


