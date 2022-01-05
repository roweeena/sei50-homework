// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

const secretWordLetters = [ 'T' , 'E' , 'S', 'T' ]; // word to be guessed, in array form
const guessedLetters    = [ '_' , '_' , '_', '_' ];
let correctGuessCounter = 0; 

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.

const guessLetter = function( userGuess ){

    //debugger;

    console.log('in guessLetter(), argument userGuess = ', userGuess);
    
    //use this variable to remember what happens in the loop, overall - 
    // were ANY of the letters in the secret word a match against the user's guess
    let correctGuessMade = false;

// Iterate through the word letters...
for( let i = 0; i < secretWordLetters.length; i++){
    const currentSecretLetter = secretWordLetters[i];
    // console.log('currentSecretLetter', currentSecretLetter);


    //...and see if the guessed letter is in there.

if (currentSecretLetter === userGuess){ //asking if T is equal to x T = currentsecretletter/ x = userguess

    // If the guessed letter matches a word letter, change the guessed letters array to reflect that.
    console.log('Correct guess!');
    guessedLetters [ i ] = userGuess; // fill in the corresponding blank in the same 'column'
    console.log( 'Guessed letters:', guessedLetters.join(' '));
    correctGuessMade = true; // remember that at least one correct guess was made
    correctGuessCounter++; // another guess guess! correctguesscounter = correctgueesscountrer +1
 }

//else{
//     // guess was incorrect - too soon to say
//     // we can't tell the use the guess was incorrect until the loop is finished!
//     console.log('%cIncorrect guess for ', 'color: red', userGuess);

// } false path to go down


}


//After the loop is the only place we'll know for sure if a guess was incorrect was overall corrct or incorrect

if(correctGuessMade === false){
    // if the correctGuessMade variable still has its initial false value,
    //this means that none of the letters in the secret word matched the guess letter,
    //i.e. none of the loop iterations triggered the conditional code that changed correctGuessMade to true.
    console.log('Sorry, bad guess!');
}

///is the game over?
if (correctGuessCounter === secretWordLetters.length){
    console.log('You win!!! congrats');
}


}






 //guessLetter()

guessLetter( 'T' );



// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.







// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.



// let wordLetters = [ 'F', 'O', 'X' ]
// let guessedLetters = [ '_' , '_' , '_' ]

// const guessLetter = function(letter){
//     for(let i = 0; i < wordLetters.length; i++) // visit every letter {
//         if (wordLetters[i] === letter) {
//            guessedLetters[i] = letter;
//            goodGuess = true;
//     }
//         if (guessedLetters [i] == '_') {
//             moreToGuess = true;
//         }
        
//     }
//     if (goodGuess) {
//         console.log('congratulataton!');
//         console.log(guessedLetters.join(''));
//         if (!moreToGuess) {
//             console.log(' You Won')
//         }
//     }else{
//         console.log('You die!!!!');

//     }
// }

// guessLetter('G');
// guessLetter('F');
// guessLetter('X');
// guessLetter('P');
// guessLetter('Q');


// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.









