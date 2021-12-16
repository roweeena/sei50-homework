console.log(`JS :)`);
console.log(`##################################################################################################`)
console.log(`To play Word Guesser, pass a single character string argument into the guessLetter() function`)
console.log(`##################################################################################################`)
////////////////// Welcome to "The Word Guesser" ///////////////////////`);

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

const answer = ['F','O','X']; 
const userInput = ['','','']; 

const guessLetter = function(letter){ 
    console.log(`You guessed ${letter}`)
    for(i = 0; i < answer.length; i++){ // looping through the full answer array
        if(letter.toUpperCase() === answer[i]){ //converting user input to upper case and comparing to the equivelant index in the answer
            console.log(`found one :)`); 
            userInput[i] = answer[i]; // fill in the userInput array with the string from appropriate position in the answer array
            console.log(`So far you have "${userInput.join('')}"`);
        }
    }
    if (userInput.join() === answer.join()){ //check win condition by first converting both arrays to strings
        console.log(`congratuations ${answer.join('')} is correct`);
    } else {
        console.log(`try again`);
    }
};

// guessLetter('a');
// guessLetter('b');
// guessLetter('c');
// guessLetter('d');
// guessLetter('e');
// guessLetter('f');
// guessLetter('g');
// guessLetter('h');
// guessLetter('i');


//############################## Wheel of Fortune ################################


console.log(`To play Wheel of Fortune , pass a single character string argument into the wofGuessLetter() function`)

console.log(`##################################################################################################`)
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.


const wofAnswer = ['F','O','X']; 
const sliceWofAnswer = wofAnswer.slice()
const wofUserInput = ['','','']; 

let wofPrize = 0

// random amount generator
const randomAmount = function(){
    return Math.floor(Math.random()*10)
}

const wofGuessLetter = function(letter){ 
    let roundWin = false
    const stakes = randomAmount(); //call the function to generate the at stake amount for the round
    console.log(`You guessed ${letter}`)

    for(i = 0; i < wofAnswer.length; i++){ // looping through the full wofAnswer array
        if(letter.toUpperCase() === sliceWofAnswer[i]){ //converting user input to upper case and comparing to the equivelant index in the wofAnswer
            roundWin = true;
            console.log(`found one :)`); 
            wofUserInput[i] = sliceWofAnswer.splice(i, 1,''); // splice out the letter from the sliced answer and put it in the user array. this is to avoid guessing the same letter multiple times
        }
    } 

    
    if (roundWin === true){ // checking the win condition to decide how to increment the total winnings.
        if (wofPrize <= 0){
            wofPrize = stakes
        } else{ 
            wofPrize = wofPrize * stakes
        } 
    } else{
        wofPrize = wofPrize - stakes; // would be nice to make this not let the prize total go into negative...
    };

    console.log(`So far you have "${wofUserInput.join('')}" and your winnings are $${wofPrize}`);
   
    if (wofUserInput.join() === wofAnswer.join()){ //check game win condition by first converting both arrays to strings
        console.log(`congratuations ${wofAnswer.join('')} is correct! You won $${wofPrize}`);
    } else {
        console.log(`try again`);
    }
};



// ## Bonus: Make it like Hangman:
console.log(`To play Hangman , pass a single character string argument into the hangmanGuessLetter() function`)

console.log(`##################################################################################################`)

// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


const hangmanAnswer = ['F','O','X']; 
const sliceHangmanAnswer = hangmanAnswer.slice();
const hangmanUserInput = [`_`,`_`,`_`]; 

const guessedLetters = []
let hangmanState = 0;

const hangmanGuessLetter = function(letter){ 
    let roundWin = false
    console.log(`You guessed ${letter}`)

    if( guessedLetters.includes(letter.toUpperCase())){ // check the previously guessed letters and if it exisits then exit
        console.log(`You already tried ${letter}`);
        return;
    }
    guessedLetters.push(letter.toUpperCase()); // add the letter into the into the guessed letter array

    for(i = 0; i < hangmanAnswer.length; i++){ // looping through the full hangmanAnswer array
        if(letter.toUpperCase() === sliceHangmanAnswer[i]){ //converting user input to upper case and comparing to the equivelant index in the hangmanAnswer
            roundWin = true;
            console.log(`found one :)`); 
            hangmanUserInput[i] = sliceHangmanAnswer.splice(i, 1,''); // splice out the letter from the sliced answer and put it in the user array. this is to avoid guessing the same letter multiple times
        }
    } 

    if (roundWin === false){
        hangmanState = hangmanState + 1;
    }

    console.log(`So far you have "${hangmanUserInput.join('')}" and you have guessed ${guessedLetters.join()}     ${hangmanState}`);
   
    if (hangmanUserInput.join() === hangmanAnswer.join()){ //check win condition by first converting both arrays to strings
        console.log(`congratuations ${hangmanAnswer.join('')} is correct! YOU WIN :D`);

    } else {
        console.log(`try again`);
    }

    if (hangmanState === 6){
        console.log(`you lost!
        +---+
        |   |
        O   |
       /|\\  |
       / \\  |
            |
      =========`)
    }
};








// ---

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
console.log(`############################################ MAX OF TWO ######################################################`)
const maxOfTwoNumbers = function(num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(`${maxOfTwoNumbers(5,10)}`)
console.log(`${maxOfTwoNumbers(9,10)}`)

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
console.log(`############################################ MAX OF THREE ######################################################`)
const maxOfThree = function(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

console.log(`${maxOfThree(99,10,1)}`)
console.log(`${maxOfThree(9,4,1)}`)
console.log(`${maxOfThree(88,3000,-10)}`)


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log(`############################################ VOWEL CHECKER ######################################################`)

const vowelCheck = function(character){
    const vowels = [a,e,i,o,u];
    vowels.includes(character.toLowerCase());
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
console.log(`######################################## SUM AND MULTIPLY ARRAYS ################################################`)

const testArray = [1,2,3,4]

const sumArray = function(array){
    let result = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
   return result;
}

sumArray(testArray)

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(word){
    const wordLetters = word.split('');
    const reverseArray = wordLetters.reverse();
    const joinReversedArray = reverseArray.join('');
    return joinReversedArray;
}

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.