// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the 
// largest of them. Use the if-then-else construct available in Javascript. You'll have to 
// remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2) {
        // simply checks if number 1 is larger than number 2 invoked in the function
        return num1 
    } else if (num2 > num1) {
        // simply checks if number 2 is larger than number 1 invoked in the function
        return num2 
    } else { 
        // here the only remaining option is that they are the same, so lets the user know we cant help as they are identical numbers
        return 'Both numbers are the same.'
    }
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = (num1, num2, num3) => {
    max = Math.max(num1, num2, num3);
    return max
    }

console.log(maxOfTwoNumbers(5,5))
console.log(maxOfThreeNumbers(9,7,6))

// Write a function that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise.

const vowels = [['a'],['e'],['i'],['o'],['u']]

const findVowel = (letter) => {
    if (letter.length == 1) {
      return /[aeiou]/.test(letter);
    } else if (letter.length >= 2) {
        return 'Only input one letter to see if it is a vowel.'
    }
  }

console.log(findVowel('gf'))
console.log(findVowel('s'))
console.log(findVowel('a'))

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all 
// the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and 
// multiplyArray([1,2,3,4]) should return 24.


// define the array
funArray = [1, 2, 3, 4] 

// take array and use reduce function to combine the numbers in the array, and add 0 to provide a value if the initial array is empty
const sumArray = funArray.reduce(add, 0); 
function add(accumulatedValues, i) {
  return accumulatedValues + i;
}

console.log(sumArray);

// did it all within a function this time
const multiplyArray = (array) => { 
    let xNum=1;
    for (let i=0; i<array.length; i++) {
        xNum = xNum * array[i];
    } 
    return xNum;
}
console.log(multiplyArray[1,2,3]);

// Bonus
// Define a function reverseString that computes the reversal of a string. 
// For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = (str) => {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseString("hello"))

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// I actually took a string and turned it in to an array with this function()
const findLongestWord = (str) => { 

    // here is where the string is split
    let strSplit = str.split(' '); 

    // here I will consistently repopulate theLongestWord with the highest number as I loop through
    let theLongestWord = 0; 

    // checks if the current word length is LONGER than the current longestWord
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > theLongestWord){ 
      theLongestWord = strSplit[i].length;
       }
    }
    return theLongestWord;
  }

console.log(findLongestWord("I am a JavaScript superstar legend in the making"));

// Write a function filterLongWords that takes an array of words and an number i and 
// returns the array of words that are longer than i.

const filterLongWords = (array, num) => { 
    // build an empty array that we can fill up with words that are longer than the number chosen
    longList = []
    
    // finds out if the word in the array the loop is looking at is LONGER than the number specified in the invoking of the function 
    for (i=0; i<array.length; i++) {
        if (array[i].length > num) 
        longList.push(array[i])

        // returns the full list of longer words after looping through all
        } return longList 
    }

console.log(filterLongWords(['gangster','hero','heroine','sweeeet','aye'],6))

console.log('----- Above this line are tests for all bonus homework ------')
console.log('-------------------- HANGMAN STARTS HERE --------------------')

console.log('Hang Man')

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word 
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

const wordArrays = [['d','a','n'],['p','e','a'],['g','e','o','r','g','e']];
const randomWord = wordArrays[(Math.floor(Math.random() * 3))];
let hiddenWord = [];
let correctGuesses = 0;
let reward = 0;
let wrongGuesses = 0;

// this function turns the random array in to the hidden version for the purpose of the game
const makeHiddenWord = (randomWord) => { 
    for (i=0; i<randomWord.length; i++) {
        hiddenWord.push('_')
    }
} // end of makeHiddenWord()

// initialise the game by building the hiddenWord
makeHiddenWord(randomWord) 

const guessLetter = (letter) => {

    // if they already have the letter, we don't want them to receive rewards so we tell them to bugger off
    if (hiddenWord.includes(letter)) {
        console.log('Hey silly, you already got that one!')

    // if they got it wrong, lets start to kill them
    } else if (randomWord.includes(letter) === false) { 
    wrongGuesses += 1;

    // we better tell them they're almost dead, and how many chances they got. See the function drawHangMan()
    console.log(`Nah, not there. Here's where you're up to: ${hiddenWord}`);
    drawHangMan(wrongGuesses); } else {

    // convert the letter to lower case so everything can be uniform
    letter = letter.toLowerCase()

    // generate random reward thats different each time between 0-3000 dollars
    randomRewardAmount = (Math.floor(Math.random() * 3000)) 

    // loop the guesses over each letter (str) in the array
    for (i = 0; i < randomWord.length; i++) { 
        if (correctGuesses === randomWord.length) {

            // If they keep trying to play OR they win - lets tell them and let them know how much they've won!
            console.log(`You won! The word was ${randomWord.join('')}. Your total reward is: ${reward}.`)
        }

        // if their letter is in there, lets tell them, show them the word so far as well as their reward!
        else if (randomWord[i] === letter) { 
            hiddenWord[i] = letter;
            reward += randomRewardAmount
            console.log(`Congratulations! You got a letter correct.
${hiddenWord}
You just got ${randomRewardAmount}. Your total is ${reward}`)
            correctGuesses++
        } 
    }
}
}

// simply draws the hangman in line with how many incorrect answers they have guessed
const drawHangMan = (wrongGuesses) => { 
    switch(wrongGuesses) {
        case(1):
        console.log(`1 wrong. 5 chances left.
        _|___`)
        break;
        case(2):
        console.log(`2 wrong. 4 chances left.
         |
         |     
         |
        _|___`)
        break;
        case(3):
        console.log(`3 wrong. 3 chances left.
        _______
        |/
        |
        |
        |
        |
        |
       _|___`)
        break;
        case(4):
        console.log(`4 wrong. 2 chances left.
        _______
        |/      |
        |       |
        |       |
        |       ??? 'help!'
        |
        |
       _|___`)
        break;
        case(5):
        console.log(`5 wrong. 1 chances left.
        _______
        |/      |
        |       
        |        _
        |       (_)  (HEEEELLLPPP!!!)
        |       _|/
        |        |
       _|___     /L`)
        break;
        case(6):
        console.log(`You've died.
        _______
        |/      |
        |      (_) “I shall hear in heaven"
        |      _|/  - Beethoven's last words
        |       |   
        |      / L
        |
       _|___`)
    }
}

console.log(`Want to play Hangman? Make a guess of any alphabetical letter by typing guessLetter('your letter here'.`) // we could prompt() but is a bit whack without GUI
