// Establish global variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var hangmanLibrary = ["superstar", "kingdom", "mushroom", "turtle", "powerup", "coin"];
var guessesMade = []
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correct = []
var incorrect = []

// Pick a random word

var libraryChoice = hangmanLibrary[Math.floor(Math.random()*hangmanLibrary.length)];
console.log(libraryChoice);


// Creates an array with the word choice for length of word visual

var hangmanWord = [];
for (var i = 0; i < libraryChoice.length; i++) {
hangmanWord[i] = "_"
console.log(hangmanWord);
}



// How to register the user input and start game

document.onkeyup = function(event) {
// Determines the key the user selected
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);



    // Checks to see if the guess is a valid character

    if (alphabet.indexOf(userGuess >= 0) && guessesMade.indexOf(userGuess) < 0) {
        guessesMade.push(userGuess);
        console.log(guessesMade);
    } else if (libraryChoice.indexOf(userGuess) >= 0) {
        correct.push(userGuess)
    } else if (libraryChoice.indexOf(userGuess) < 0) {
        incorrect.push(userGuess);
        guessesLeft--
    }


// Replaces underscore in word with correct user guess
    for (j=0; j < libraryChoice.length; j++) {
    if (userGuess === libraryChoice[j]) {
        hangmanWord[j] = userGuess;
        console.log(hangmanWord);
    } 
    }


    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessesMade = [];
    }

// Creates the html for the game 
var html = 
"<h1> Hangman game </h1>"
"<p> The letter you guessed: " + userGuess + "</p>"
"<p> The word you are guessing is: " + hangmanWord + "</p>"
"<p> The guesses you have made are: " + guessesMade + "</p>"
document.querySelector("#game").innerHTML = html
    

}    