function printHighScores() {
    // Either get highscores from local storage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sort highscores by score property in descending order
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.foreach(function(score) {
        // Create li tag for each highscore
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        // Display on hte page
        var olEl = document.getElementById("highscores");
        olEl.appendChild(litag);
    });
}

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

printHighScores();