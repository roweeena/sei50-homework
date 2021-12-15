// The Word Guesser -----------------------------------------------------------------------------------

const word = ["A", "P", "P", "L", "E"];
const resultArr = ["_", "_", "_"];

let reward = 0;

const guessLetter = function(guessedLetter) {
// 0. transform input to uppercase
  let inputLetter = guessedLetter.toUpperCase();

  // validate input
  if(inputLetter.length !== 0) {
    console.log(`Please enter 1 letter`);
  }

  if(resultArr.includes(inputLetter)) {
    console.log(`You've already had ${inputLetter}`);
    return null;
  }




// 1. check if any letter in guessedLetter is matched, and if it is, update resultArr array, and foundLetter

  let matchedLetter = null;

  // check matching with nested loop
  for(let i=0; i<word.length; i++) {

    if(word[i] === inputLetter){
      // update resultArr array with the found letter
      resultArr[i] = inputLetter;
      // update matchedLetter value
      matchedLetter = inputLetter;
    }

  }


// 2. print the result
  // convert resultArr array to string.
  let result = resultArr.join(" ");

  // if the user find the letter
  if(matchedLetter !== null) {
    // bonus: calculate reward
    let howMany = word.filter(letter => letter === matchedLetter).length;
    reward += howMany * 1000;

    console.log(`
      Result: ${result}
      Congratulation! You found ${matchedLetter} letter!

      REWARD: $${howMany * 1000}
    `);

    // initialize variable value
    matchedLetter = null
  }else {
    // subtract reward
    reward -= 100;

    console.log(`
      Result: ${result}
      WRONG!

      You lost $${200}
    `);
  };


// 3. count how many letters are left
  let foundLetterCount = 0;

  // iterate resultArr array to find how many letters were found.
  for(let i=0; i<resultArr.length; i++) {
    if(resultArr[i] !== "_") {
      foundLetterCount++;
    }

    // if all of the letters in resultArr array are not "_", then finish the game.
    if(foundLetterCount === word.length) {
      console.log(`You found all letters!😊`);
    }
  }

  // if there are still letters to be found
  if(foundLetterCount < resultArr.length) {
    console.log(`You need to find ${word.length - foundLetterCount} more letters.`);
  }

  console.log(`TOTAL REWARD $${reward}`)
}
// guessLetter("A");



// Array and Functions Bonus Material -----------------------------------------------------------
// question 1
const maxOfTwoNumbers = function(num1, num2) {
  if(num1 >= num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
// console.log(maxOfTwoNumbers(1,2));

// question 2
const maxOfThree = function(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
// console.log(maxOfThree(1,2,3));

// question 4
const sumArray = function(arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
// console.log(sumArray([1,2,3,4]));

const multiplyArray = function(arr) {
  return arr.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
}
// console.log(multiplyArray([1,2,3,4]));

// question 5
const reverseString = function(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("abc"));

// question 6 
const findLongestWord = function(arr) {
  let longest = "";

  for(let i=0; i<arr.length; i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}
// console.log(findLongestWord(["apple", "pineapple", "cherry", "mango"]));

// question 7
const filterLongWords = function(arr, i) {
  let resultArr = [];

  for(let j=0; j<arr.length; j++) {
    if(arr[j].length > i) {
      resultArr.push(arr[j]);
    }
  }

  return resultArr;
}
// console.log(filterLongWords(["apple", "pineapple", "cherry", "mango"], 5));