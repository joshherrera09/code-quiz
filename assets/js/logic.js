// Variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Variables to reference DOM elements
var questionsEl = document.getElementById("question");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    // Hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // Un-hide questions section
    questionsEl.removeAttribute("class");

    // Start timer
    timerId = setInterval(clockTick, 1000);

    // Show starting time   
    timerEl.textContent = time

    getQuestions();
}

function getQuestion() {
    // Get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // Update title with current questions
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // Clear out any old question
    choicesEl.innerHTMl = "";

    // Loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
        // Create new button for reach choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", "choice");

        choiceNode.textContent = i + 1 + ". " + choice;

        // Attach click event listener to each choice
        choiceNode.onclick = questionClick;

        // Display on the page
        choicesEl.appendChild(choiceNode);
    });
}