// Establish global variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var hangmanLibrary = ["superstar", "kingdom", "mushroom", "turtle", "powerup", "coin"];
var guessesMade = []
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Pick a random word

var libraryChoice = hangmanLibrary[Math.floor(Math.random()*hangmanLibrary.length)];
console.log(libraryChoice);


// How to register the user input

document.onkeyup = function(event) {
// Determines the key the user selected
    var userGuess = event.key.toLowerCase();





    var hangmanWord = [];
    for (var i = 0; i < libraryChoice.length; i++) {
        hangmanWord[i] = "_"
    }

    // Replaces underscore in word with correct user guess
    for (j=0; j < libraryChoice.length; j++) {
    if (userGuess === libraryChoice[j]) {
        hangmanWord[j] = userGuess;
        guessesMade.push(userGuess);
        } else if (alphabet.indexOf(userGuess) >= 0 && alphabet.indexOf(userGuess) <= alphabet.length && guessesMade.indexOf(userGuess) < 0) {
            guessesMade.push(userGuess);
            guessesLeft--;
        };


        var html = 
        "<h1> Hangman game </h1>"
        "<p> The letter you guessed " + userGuess + "</p>"
        "<p> The word you are guessing is " + hangmanWord + "</p>"
    
        document.querySelector("#game").innerHTML = html



    }



}    