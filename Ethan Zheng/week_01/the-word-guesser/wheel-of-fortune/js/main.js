console.log('The Word Guesser - Wheel of Fortune ver. loaded.');
console.log('Please enter one letter in the English Alphabet.'); //I'm not programming for the edge case where they use a foreign character
//The Word Guesser
//A simple word guessing game where the use gets infinite tries to guess a word
//A budget hangman or Wheel of Fortune without monetary incentive


//define global variables here

let money = 0;
//initialising array containing the correct word
const wordAnswer = [
    //word is 'defenestration' - the act of throwing someone out of a window
    'd',
    'e',
    'f',
    'e',
    'n',
    'e',
    's',
    't',
    'r',
    'a',
    't',
    'i',
    'o',
    'n'
];
//initialising empty array - this is where the player logs their answers
const wordGuess = [];
//I'm not typing out 13 '_'
for (let i = 0; i < wordAnswer.length; i++) {
    wordGuess[i] = '_';
}

//declare functions here

const rewardCalculator = function (multiplier) {
    const reward = (Math.floor(Math.random() * 99) + 1) * multiplier;  //generates random integer between 1 and 100
    money = money + reward * multiplier;
    console.log("You've earned $" + (reward) + "!");
}

//function that prints wordguess
const printWordGuess = function () {
    console.log(wordGuess.join(''));
}

//function that checks for win condition
const winCondition = function () {
    let blankCharCounter = 0;   //this will keep track of how many unknown letters are left
    for (let i = 0; i < wordGuess.length; i++) {
        if (wordGuess[i] === '_') {
            blankCharCounter++;
        }
    }
    console.log(`You have ${blankCharCounter} unknown letter(s) left to find.`);
    if (blankCharCounter === 0) {
        return true;
    } else {
        return false;
    }
}
//function that checks how many letters


//guessLetter will take one char as an argument, iterate through wordAnswer
//to check if the guessed letter matches any letters in that array.
//it should then record the index of each match, probably in a new temporary array
//Using the tempArray, it will then store the char in their correct positions in wordGuess
const guessLetter = function (playerGuessAny) {
    const playerGuess = playerGuessAny.toLowerCase();   //case-proofing the function
    const indexOfCorrectLetters = [];                   //this is the array where the correct index's are stored
    for (let i = 0; i < wordAnswer.length; i++ ) {
        if (playerGuess === wordAnswer[i]) {
            indexOfCorrectLetters.push(i);
        }
    } //indexOfCorrectLetters should now contain the index of each instance playerGuess matches the same letter
      //in wordAnswer. Its length should also match the number of correct matches
    
    if (indexOfCorrectLetters.length > 0) {
        for (let i = 0; i < indexOfCorrectLetters.length; i++) {
            wordGuess[indexOfCorrectLetters[i]] = playerGuess;
        } //this loop will fill the correct letter in the correct positions of wordGuess
        console.log("Congratulations on finding the new letter '" + playerGuess + "'!");
        rewardCalculator(indexOfCorrectLetters.length);   
    } else {
        console.log(`Oof, ${playerGuess} isn't in the word.`);
    }
    //print wordGuess
    printWordGuess();
    const checkWin = winCondition();

    //check if the win conditions are fulfilled here
    if (checkWin === true) {
        console.log("Mission Accomplished, you've successfully thrown someone out the window.");
        console.log("You'll see $" + money + " in your bank account in 5 - 10 business days.");

        return 'WIN';
    } else {
        console.log("Keep trying, you'll get there one day.")
        return 'TRY AGAIN';
    } 
}




