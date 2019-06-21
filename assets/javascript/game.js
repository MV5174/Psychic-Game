//declare wins, losses, guesses left, and letters chosen variables
var win = 0;

var loss = 0;

var guessesLeft = 0;

//make an array of letters for choices and a variable for the compChoice
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//make function that whenever the game starts the computer chooses a random letter
window.onload = function (event){
    
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("computer guess " + compChoice);

    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log("userguess " + userGuess);
    
        if (userGuess === compChoice) {
            win++;
          } else {
                loss++;
            }
    }
}
//make a function that whenever a letter is pressed if it does not match the compChoice remove a point from guesses left, else increase wins by 1 and compChoice gets reset

    console.log("wins " + win);
    console.log("losses " + loss);
//make a function that if guesses left reaches 0 losses increases by one and the compChoice gets reset with a new letter