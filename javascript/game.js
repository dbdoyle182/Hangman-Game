// Establish global variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var hangmanLibrary = ["superstar", "kingdom", "mushroom", "turtle", "powerup", "coin"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correct = []
var incorrect = []

// Pick a random word and fill an array function



var libraryChoice = hangmanLibrary[Math.floor(Math.random()*hangmanLibrary.length)];
console.log(libraryChoice);

var hangmanWord = [];
for (var i = 0; i < libraryChoice.length; i++) {
hangmanWord[i] = "_"
console.log(hangmanWord);
};





// How to register the user input and start game

document.onkeyup = function(event) {
// Determines the key the user selected
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);



    // Checks to see if the guess is a valid character

    if (libraryChoice.indexOf(userGuess) >= 0) {
        correct.push(userGuess);
        console.log(correct);
    };
    if (libraryChoice.indexOf(userGuess) < 0 && incorrect.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        incorrect.push(userGuess);
        guessesLeft--;
        console.log(incorrect)
    }


// Replaces underscore in word with correct user guess
    for (j=0; j < libraryChoice.length; j++) {
    if (userGuess === libraryChoice[j]) {
        hangmanWord[j] = userGuess;
        console.log(hangmanWord);
    }
    

}
    
        function startGame () {
        guessesLeft = 9;
        incorrect = [];
        libraryChoice = hangmanLibrary[Math.floor(Math.random()*hangmanLibrary.length)];
        hangmanWord = [];
        for (var i = 0; i < libraryChoice.length; i++) {
        hangmanWord[i] = "_"
            }
        }

        if (hangmanWord.toString() === libraryChoice.toString()) {
            wins++;
            startGame();
        }
        if (guessesLeft === 0) {
            losses++;
            startGame();
        }
    




// Creates the html for the game 
var html = 
"<p> The letter you guessed: " + userGuess + "</p>" +
"<p> The word you are guessing is: " + hangmanWord + "</p>" +
"<p> The  incorrect guesses you have made are: " + incorrect + "</p>" +
"<p> The number of guesses you have left: " + guessesLeft + "</p>" +
"<p> User wins: " + wins + "</p>" +
"<p> User losses: " + losses + "</p>" 
document.querySelector("#game").innerHTML = html
    

}    