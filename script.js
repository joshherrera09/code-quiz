// Data structure of questions, possible answers and correct answer

var questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: ['<scripting>', '<js>', '<script>', '<javascript>'],
    correctAnswer: 2
  },

  {
    question: 'What is the correct JavaScript syntax to change the content of the HTML? <p id = "demo"> This is a demo.</p>', 
    asnwers: ['document.getElementById("demo").innerHTML = "Hello World!;', 'document.getElement("p").innerHTML = Hello World!;', 'document.getElementByName("p").innerHTML = "Hello WOrld!;', 
    '#demo.innerHTML = "Hello World!;'],
    correctAnswer: 0
  },
  
  {
    question: 'Where is the correct place to insert a JavaScript?',
    asnwers: ['<head> section', '<body> section', 'both <head> and <body> are correct'], 
    correctAnswer: 1 
  },

  {
    question: 'The external JavaScript file must contain the <script> tag:',
    answers: ['True', 'False'],
    correctAnswer:  1
  },

  {
    question: 'How do we write "Hello World" in an alert?',
    answers: ['alertBox("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'msg("Hello World);'],
    correctAnswer: 1
  },

  {
    question: 'How do we create a function in JavaScript?',
    answers: ['function = myFunction()', 'function myFunction()', 'function : myFunction()'],
    correctAnswer: 1
  },

  {
    question: 'How do we call a function named "myFunction?',
    answers: ['call myFunction()', 'call function myFunction()', 'myFunction()'],
    correctAnswer: 2
  },

  {
    question: 'How does a FOR loop start?',
    answers: ['for (i <= 5; i++)', 'for i=5 to 5', 'for(i=0; i >=5; i++)', 'for(i=0; i<=5'],
    correctAnswer: 2
  },

  {
    question: 'How do we add a comment in a JavaScript?',
    answers: ['"This is a comment', '// This is a comment', '<!--This is a comment-->'],
    correctAnswer: 1
  },

  {
    question: 'How do we round 7.25, to the nearest integer?', 
    answers: ['Math.round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)', 'round(7.25)'], 
    correctAnswer: 0
  }
];
    

// variables to grab HTML elements
var timeEl = document.getElementById("timer");
var highScoreButton = document.getElementById('high-scores');
var currentQuestion = 0;
var questionElement = document.querySelector('#question');
var answersElement = document.querySelector('#answers');
var correctAnswerElement = document.querySelector('#correct-answer');
var score = ''
 

// function to start the timer when the quiz starts
var secondsLeft = 60;

function startTime() {
  var timeUntilQuiz = window.setTimeout(setInterval, 5000)
  
    var timerInterval = setInterval(function() {
   
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";

      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        
      }

    }, 1000);
}

// start the timer
startTime();

// main function to loop through the quiz questions
function askQuestion()
  questionElement.textContent = questions[currentQuestionIndex].question;
  let answerButton = document.createElement('button');
  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    // Render the answers button and add click event listener
    // Set textContent to the answer associated with i (index)
    answerButton.innerHTML = questions[currentQuestionIndex].answers[i];
    answerButton.setAttribute('data-index', i);
    answerButton.setAttribute('data-correct-answer', questions[currentQuestionIndex].correctAnswer)
    // Add Click event listener to respond to clicking one of the buttons
    answerButton.addEventListener('click', function(e) {
      e.preventDefault();
      checkAnswer(e);
    })
    // Append button to answersElement
    answersElement.appendChild(answerButton)  
}

currentQuestionIndex++;


function checkAnswer(event) {
  
  
  // IF answer is correct, grant 1 point, show feedback that it's correct, and move to next question by calling askQuestion()
  // IF answer is incorrect, show feedback that it's the wrong answer, then move to next question by calling askQuestion();
  let answerIndex = event.target.dataset.index;
  let correctAnswer = event.target.dataset.correctAnswer;
  if (answerIndex === correctAnswer) {
   // Get reference to the button that received the clidk event
    document.querySelector('#message').textContent = 'CORRECT!'
    score++;
  } else {
    document.querySelector('#message').textContent = 'Incorrect'
  }
  // Get the next question by calling askQuestion()
  askQuestion();
}  


// function to store and produce high scores
// function getHighScores() {};

// Function to send a mesage that time is up, display highscore
// function sendMessage()




