//script.js

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessTheNumber() {
    var correct = getRandomInteger(1, 10);
    var guess = document.getElementById("number").value;
    if (guess > 10 || guess < 1) {
        window.alert("You have to guess a number between 1 and 10.");
    }
    if (correct == guess && guess <= 10 && guess >= 1) {
        window.alert("Your guess was correct! The number was " + correct + ".");
    } else if (guess <= 10 && guess >= 1) {
        window.alert("Your guess was incorrect. The number was " + correct + ".");
    }
}