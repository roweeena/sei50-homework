console.log("Wednesday Night Homework Loaded!");

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').



// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const solution =  ["F","O","X"];
const playerProgress = ["\_","\_","\_"];

console.log(playerProgress)

const guessLetter = function(playerGuess){
    console.log(`Player guesses ${playerGuess}`);
    for (let i = 0; i <= (solution.length - 1); i++) {
        if (playerGuess === solution[i]){
            playerProgress[i] = playerGuess;
            console.log("Congratulations! You found a new letter!")
        }
    }
    if (!playerProgress.includes("_")){ 
        return console.log("Congratulations! You win!!!!");
    }
}


// if(!playerProgress.includes("_")){
//    console.log("Congratulations! You win!")
// }


console.log(guessLetter("F"));   // example game with correct and wrong guesses
console.log(playerProgress);
console.log(guessLetter("G"));
console.log(playerProgress);
console.log(guessLetter("X"));
console.log(playerProgress);
console.log(guessLetter("M"));
console.log(playerProgress);
console.log(guessLetter("O"));
console.log(playerProgress);

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

//  const rewardCalculator = function(correctGuess){
//    if (correctGuess === true) {
        
//     }
//     let reward = 0;
//     reward = reward  + (Math.random * 100)
    
// }

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// ---

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(numberOne,numberTwo){
    if(numberOne > numberTwo){
        console.log(`${numberOne} is larger.`);
    }else {
        console.log(`${numberTwo} is larger.`)
    }
}

maxOfTwoNumbers(50,500)   //  function invoked to make sure it works, ignoring they may be equal


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const numbers = [50,500,5000];          // array created with some numbers

const maxOfThree = function(array){
    console.log(Math.max(...array));    // math method to calculate largest number in the array found via google
}

maxOfThree(numbers)  // function invoked to test

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const vowelTester = function(letter){
    const vowels = ["a","e","i","o","u"];

    let isVowel = false;

    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]){
            isVowel = true;
        }
    }
    return isVowel
}

console.log(vowelTester("a"))
console.log(vowelTester("b"))
console.log(vowelTester("u"))

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const  array = [1,2,3,4];

const sumArray = function(array){
    let sum = 0;
    
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];                    // sum builds value as the loop iterates
    }

    return sum
}

const multiplyArray = function(array){
    let  sum = 1;                                 //  sum set to 1 for multiplcation, zero would not work as multiple

    for (i = 0; i < array.length; i++){
        sum = sum * array[i];
    }

    return  sum
}

console.log(sumArray(array))             // result is 10
console.log(multiplyArray(array))        // result is 24

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.