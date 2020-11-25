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

function questionClick() {
    // Check if user guessed wrong
    if ( this.value !== questions[currentQuestionIndex].answer) {
        // Penalize time
        time -= 15;

        if (time < 0) {
            time = 0;
        }
        feedbackEl.textContent = "Wrong!"
        // Display new time on the page
        timerEl.textContent = time;
    } else {
        feedbackEl.textContent = "Correct!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide")
    }, 1000);


    currentQuestionIndex ++;

    // Check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // Stop timer
    clearInterval(timerId);

    // Show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.textContent = time;

    // Hide questions section
    questionsEl.setAttribute("class", "hide");
}

function clckTick() {
    // Update time
    time--;
    timerEl.textContent = time;

    // Check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    // Get value of input box
    var initials = initialsEl.value.trim();

    // Make sure value wasn't empty
    if (initials !== "") {
        // Get saved scores from localstorage, or if not any, set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // Format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // Save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // Redirect to next page
        window.localStorage.href = "highscores.html";
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// User clicks button to submit inititals
submitBtn.onclick = saveHighscore;

// User clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;