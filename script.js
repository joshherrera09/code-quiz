var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
   
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
  
    var timesUpEl = document.createElement("h3");
  
    timesUpEl.textContent("Time is up!");
    mainEl.appendChild(imgEl);
  
  }

setTime();


// let quizContainer = document.getElementById('quiz');
// let highScoreButton = document.getElementById('high-scores');

// // funciton for quiz element
// function buildQuiz() {}; 

// // function to store and produce high scores
// function getHighScores() {};

// // Function to send a mesage that time is up, display highscore
// function sendMessage()

// buildQuiz();



