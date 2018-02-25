// Establishing objects for game
var hangmanObject = {

    userGuess : "",
    allGuesses : [],
    incorrectGuesses : [],
    wins : 0,
    losses : 0,
    words : ["superstar", "kingdom", "mushroom", "turtle", "powerup", "coin"],
    guessesRemaining : 9,
    alphabet : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

// Function that will generate a random word from "words" array
    theWord : function() {
        var gameWord = this.words[Math.floor(Math.random * this.words.length)];
        console.log("This is the word: " + gameWord);
// Creates an array of underscores to show user word length
        var wordArray = [];
        for (var i = 0; i < gameWord; i++) {
            wordArray[i] = "_";
        }
        
    }

}