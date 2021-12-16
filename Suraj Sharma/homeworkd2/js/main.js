// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
const secretWordLetter = ['T', 'E', 'S', 'T',];
const GuessedLetter = ['', '', '', '',]



const guessLetter = function(userGuess) {
  //console.log('guessLetter', guess);
  // use this variable to remeber what happens in the loop overall any of the letter
let correctGuessMade = false;
  //Iterate through the word letters and see if the guessed letter is in there.

  for(let i = 0; i < secretWordLetter.length; i++) {

const currentSecretLetter = secretWordLetter[i];
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
console.log('secret Letter', currentSecretLetter);

      if(currentSecretLetter === userGuess) {

        console.log('correct guess');

        guessLetter[i] == userGuess;

        console.log('guessed letters:', guessedLetters.join(''));
        correctGuessMade = true; // remember least one correct guess was madeif(
        if(correctGuessMade === false) {
          console.log('sorry bad guess');
        }




      // } else {// too soon to sayi
      //   //we cant tell the user the guess was ncorrect
      //   console.log('%incorrect guess for', 'color:');
      // }

// after the lop is the only place well know for sure if a guess was overall correct or incorrect
  }

}; //end of the guessLetter()



// guessLetter('o');
// guessLetter('k');

// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
// Extra Challenges to Achieve Array Mastery
// Starting with an empty array called rainbowColors:

const myFavFood = ['rice', 'cheese', 'cheddar', 'curries', 'maggi']
for(let i = 0; i < myFavFood.length; i++) {
console.log('My #' + (i + 1) + ' food is ' + myFavFood[i]);
}
for(let i = 0; i < myFavFood.length; i++) {
  let myChoice = ;
  let myChoiceSuffix;
  if(myChoice == 1) {
    myChoiceSuffix = "1st"
  } else if(myChoice == 2) {
    myChoiceSuffix = "2st"
  } else if(myChoice == 3) {
    myChoiceSuffix = "3st"
  }
  console.log('my' + myChoice + myChoiceSuffix + 'choice' + myFavFood);
}
//
//
// const rainbowColors = [""];
// for(let i = 0; i < arr.length; i++) {
//
// }
// choiceIs
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"
// Bonus: Find out the difference between .slice and .splice
