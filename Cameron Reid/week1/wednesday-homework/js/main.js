// // // Exercises: Arrays
// // // Your top choices
// // // Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
// // let food = ["fish", "chips", "chocolate", "oreos", "ham"];

// // for(let i = 0; i < food.length; i++){
// //     console.log(`My #${[i]} choice is ${food[i]}`)
// // } // end for


// // // For each choice, log to the screen a string like: "My #1 choice is blue."
// // // Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
// // // Extra Challenges to Achieve Array Mastery
// // // Starting with an empty array called rainbowColors:
// // let rainbowColors = [];

// // // Add "orange" to the end of the array
// // rainbowColors.push("orange");
// // console.log(rainbowColors);

// // // Add "red" to the start of the array
// // rainbowColors.unshift("red");
// // console.log(rainbowColors);

// // // Add "yellow" to the end
// // rainbowColors.push("yellow");
// // console.log(rainbowColors);

// // // Add "green", "blue", "indigo", and "violet" to the end of the array
// // rainbowColors.push("green", "blue", "indigo", "violet")
// // console.log(rainbowColors);

// // // Try and do this using one method
// // // Log out the length of the array
// // console.log(rainbowColors.length);

// // // Log out the second item
// // console.log(rainbowColors[1]);

// // // Log out the last item (make this flexible/dynamic!)
// // console.log(rainbowColors[rainbowColors.length - 1]);

// // // Log out the index of the string "blue"
// // console.log(rainbowColors.indexOf("blue"))



// // // Bonus: Find out the difference between .slice and .splice
// // // Slice creates a new array with item selected items from the array
// // //Splice affects the original array

// // // Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// // const twoColors = rainbowColors.slice(1,3)
// // console.log(twoColors);

// // // Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// // let nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// // //, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// // console.log(nums)

// // nums.splice(3,3) // removes 3 numbers after the 3rd item(ask what the real name is)
// // console.log(nums)

// // // Bonus: Work with arrays of arrays
// // // Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// // let arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// // // Access "inner array first item" and print it out"
// // console.log(arrOfArrs[0][0]);
// // // Print "third" by using a dynamic index
// // console.log(arrOfArrs[1][arrOfArrs[1].length-1]);
// // // Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
// // for(let i = 0; i < arrOfArrs[1].length; i++){
// //     console.log(arrOfArrs[1][i]);
// // }


//___________________________________________________________________________________________________________

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
let playerGuess = ["_", "_", "_"];
let wordToGuess = ["F", "O", "X" ];
let guessedLetters = []
let rewardAmt = 0;
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function(guess){
    if(guessedLetters.includes(guess)){
    }
    else {
        guessedLetters.push(guess)
    }
    if(guess === wordToGuess[0]){
        console.log(`Your guessed letters are: ${guessedLetters}`);
        console.log(`Congrats you guessed ${guess} correctly`)
        playerGuess[0] = guess;
        rewardAmt = rewardAmt + Math.floor(Math.random() * 999);
        console.log(`Current reward value: $${rewardAmt}`);
        console.log(`Current guess: ${playerGuess}`);
        if(JSON.stringify(playerGuess) === JSON.stringify(wordToGuess)){
            console.log(`Congrats! You guessed the word ${wordToGuess}!!!!!!`); 
            console.log(`Total reward won: $${rewardAmt}`);
        }
    } 
    else if (guess === wordToGuess[1]){
       
        console.log(`Your guessed letters are: ${guessedLetters}`);
        console.log(`Congrats you guessed ${guess} correctly`)
        playerGuess[1] = guess;
        rewardAmt = rewardAmt + Math.floor(Math.random() * 999);
        console.log(`Current reward value: $${rewardAmt}`);
        console.log(`Current guess: ${playerGuess}`);
        if(JSON.stringify(playerGuess) === JSON.stringify(wordToGuess)){
            console.log(`Congrats! You guessed the word ${wordToGuess}!!!!!!`); 
            console.log(`Total reward won: $${rewardAmt}`);
        }
    } 
    else if (guess === wordToGuess[2]){
        console.log(`Your guessed letters are: ${guessedLetters}`);
        console.log(`Congrats you guessed ${guess} correctly`)
        playerGuess[2] = guess;
        rewardAmt = rewardAmt + Math.floor(Math.random() * 999);
        console.log(`Current reward value: $${rewardAmt}`);
        console.log(`Current guess: ${playerGuess}`);
        if(JSON.stringify(playerGuess) === JSON.stringify(wordToGuess)){
            console.log(`Congrats! You guessed the word ${wordToGuess}!!!!!!`); 
            console.log(`Total reward won: $${rewardAmt}`);
        }
    } 
    else {
        if(guessedLetters.includes(guess)){
            const newReward = rewardAmt-200
            console.log(`Your guessed letters are: ${guessedLetters}`);
            console.log(`Try again! You have lost $200, your reward amount is: $${rewardAmt - 200}`);
        }
        else {
            guessedLetters.push(guess)
            console.log(`Your guessed letters are: ${guessedLetters}`);
            console.log(`Try again! You have lost $200, your reward amount is: $${rewardAmt - 200}`);
        }
        
    }
}


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.