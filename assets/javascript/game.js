//declare wins, losses, guesses left, and letters chosen variables
var win = 0;

var loss = 0;

var guessesLeft = 10;

//make an array of letters for choices and a variable for the compChoice
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var chosenLetters = []
//make function that whenever the game starts the computer chooses a random letter
window.onload = function (event){
    
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("computer choice " + compChoice);
//make a function that whenever a letter is pressed if it does not match the compChoice remove a point from guesses left, else increase wins by 1 and compChoice gets reset 
    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log("userguess " + userGuess);
  
        if (win === 2){
            alert("Good job You've won!")
            win = 0;
            loss = 0;
            guessesLeft = 10;
            chosenLetters = [];
            document.getElementById("wins").innerHTML = win;
            document.getElementById("losses").innerHTML = loss;
            document.getElementById("guesses").innerHTML = guessesLeft;
            document.getElementById("yourGuesses").innerHTML = "";
            compChoice = choices[Math.floor(Math.random() * choices.length)];
            console.log("computer choice " + compChoice);
            console.log("wins " + win);
            console.log("losses " + loss);
            console.log("guesses left " + guessesLeft);
        } else if (loss === 2 && guessesLeft === 1){
            alert("Better luck next time!")
            win = 0;
            loss = 0;
            guessesLeft = 10;
            chosenLetters = [];
            document.getElementById("wins").innerHTML = win;
            document.getElementById("losses").innerHTML = loss;
            document.getElementById("guesses").innerHTML = guessesLeft;
            document.getElementById("yourGuesses").innerHTML = "";
            compChoice = choices[Math.floor(Math.random() * choices.length)];
            console.log("computer choice " + compChoice);
            console.log("wins " + win);
            console.log("losses " + loss);
            console.log("guesses left " + guessesLeft);
        }   else if (userGuess === compChoice) {
                win++; 
                document.getElementById("wins").innerHTML = win;
                guessesLeft = 10;
                chosenLetters = [];
                document.getElementById("guesses").innerHTML = guessesLeft;
                document.getElementById("yourGuesses").innerHTML = "";
                compChoice = choices[Math.floor(Math.random() * choices.length)];
                console.log("computer choice " + compChoice);
                console.log("wins " + win);
            } else if (guessesLeft === 1){
                loss++;
                guessesLeft = 10;
                chosenLetters = [];
                document.getElementById("losses").innerHTML = loss;
                document.getElementById("guesses").innerHTML = guessesLeft;
                document.getElementById("yourGuesses").innerHTML = "";
                compChoice = choices[Math.floor(Math.random() * choices.length)];
                console.log("computer choice " + compChoice);
                console.log("losses " + loss);
            } else {
                    guessesLeft--;
                    chosenLetters.push(userGuess);
                    document.getElementById("guesses").innerHTML = guessesLeft;
                    document.getElementById("yourGuesses").innerHTML = chosenLetters;
                    console.log("Guesses left " + guessesLeft);
                }
            }
        
}   
//make a function that if guesses left reaches 0 losses increases by one and the compChoice gets reset with a new letter