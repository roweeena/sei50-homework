// Exercises: Arrays
// Your top choices
// Create an array to hold your top five choices of something 
//(colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
//picking the right suffix for the number.

const topColors=[
    "purple",
    "red",
    "yellow",
    "pink",
    "blue"
]

console.log(topColors);
console.log('---------------------')
console.log(`My #1 choice is ${topColors[1]}`);
console.log('---------------------')

// Making a loop

for(let i=0;i<=topColors.length-1;i++){
    let colorNum= i.toString();
    for(let i = 2; i<colorNum.length;i++){
    }
    console.log(`My #${colorNum} choice is ${topColors[i]}`);
}


// for(let i = 0; i<topColors.length;i++){
//     let colorNum= i.toString();
// console.log(colorNum);
// }

console.log('---------------------')


// Extra Challenges to Achieve Array Mastery
// Starting with an empty array called rainbowColors:

// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"

let rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green','blue','indigo','violet');

console.log(`The colors of the rainbow are: ${rainbowColors}`);
console.log(`The number of colors in a rainbow is:`+ rainbowColors.length);
console.log(`the second color of the rainbow is: `+ rainbowColors[1]);
console.log(`The last color: ${rainbowColors[rainbowColors.length-1]}`)
console.log(`Index of Blue: ${rainbowColors.indexOf('blue')}`);

console.log('---------------------')


// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! 
//Essentially pull two colors out of the array (say, between the index of 1 and 3)
// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates 
//destructively using slice or splice (whichever one is appropriate)

const twoColors= rainbowColors.slice(1,3);
console.log ('Result of Slice');
console.log(twoColors);
console.log (rainbowColors);

console.log ('Result of Splice-Original rainbowColors Array split in two');
const twoColors1= rainbowColors.splice(1,4);
console.log(twoColors1);
console.log (rainbowColors);


// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", 
//"inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out"
// Print "third" by using a dynamic index
// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

console.log('---------------------')
let arrOfArrs = [["inner array first item","inner array second item"],["first","second","third"]];

console.log(arrOfArrs);
console.log(arrOfArrs[0][0]);
//Dynamic index?
//Bonus Bonus:



/////HOMEWORK

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman 
//without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the 
//current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').


console.log('---------------------')
let gameWord=['f','o','x']

let guessword=[]

//////
console.log('---------------------')
const guessWord=['\_','\_','\_']
console.log(`Guess the word: ${guessWord}`);


// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.

const guessLetter = function(x){
    for(i=0;i<gameWord.length;i++){
        if(x===gameWord[i]){
            console.log(`This letter is correct!`);
            guessWord[i]=x;
            console.log(guessWord)
        } else{
            console.log(`Sorry, try again.`)
        }
    }
}// guessLetter()


guessLetter('f');
guessLetter('o');
guessLetter('x');



console.log('--------version 2-------------');







// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.










// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward 
//if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, 
//do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong 
//guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on 
//the log.

// ---

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else 
//construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array 
//of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return 
//the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer 
//than i.