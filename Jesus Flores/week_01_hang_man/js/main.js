/* Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
 */


//GAME OPTIONS
const wordToGuess = ["H", "A", "R", "R", "Y", "P", "O","T","T","E","R"];
const guessingWord = ['_', '_', '_', '_', '_', '_', '_','_', '_', '_', '_'];
const trackingLetters = [];
let attempts = 5;
let rewards = 0;//Each correct letter is worth 100$ and -50$ each wrong letter

//Prompt modal to type the letter
const enterLetter = function() {
    let letter = prompt("Please enter a letter");
    return letter;
}


const guessingGame = function() {
	//If attemtps === 0 we exit the function since is game over and show hangman image on the console
    if (attempts === 0)return console.log('%c ', 'font-size:600px; background:url(https://i.pinimg.com/originals/cc/59/a9/cc59a93480ce24678205b9e5f3dffc3f.jpg) no-repeat;');
    
    const letter = enterLetter();
    if(trackingLetters.includes(letter)){ //We check if the letter has been used already even if right and/or wrong.
	    console.log(`You already use the letter: ${letter}`)
	    return guessingGame(); 
    } 
    let isLetter = false;
    //we loop through the array wordToGuess to see if the letter exists in the array.
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) { //if we find the letter in the array, we assing the letter to the array guessingWord in the same index(i) position
            guessingWord[i] = letter;
		    rewards += 100;
            isLetter = true;
        }
    }
    
    trackingLetters.push(letter); //Add the letter to trackingLetters array for trackiong(duh!)
    checkingLetterSentence(wordToGuess, guessingWord, isLetter);
   }


const checkingLetterSentence = function(array1, array2, isLetter){
	 if (isLetter) { // isLetter === true the letter used exist in our array wordToguess
		if (compareArrays(array1, array2)) { //we check if sentence is already completed since we "don't know" the word
		    console.log(guessingWord);
		    return console.log(`You have won ${rewards}$`);
		}		
		console.log(guessingWord);
		setTimeout(function() { 
		  guessingGame(); //isLetter === true but the sentence  hasn't been guessed yet, hence we ask for a new letter calling guessingGame() 
		}, 800);
	 } else { // if the letter introduced is wrong, we substract attemps - 1, and rewards - 50$ and ask for a new letter calling guessingGame() 
		attempts = attempts - 1;
		rewards = rewards - 50;
		console.log(`Wrong letter, remaining attempts: ${attempts}`);
		setTimeout(function() {
		    guessingGame(); 
		}, 800);
	 }
}
//FUNCTION TO COMPARE ARRAYS TO CHECK IF THE SENTENCE HAS BEEN GUESSED 
const compareArrays = function(array1, array2) {
    if (array1.toString() === array2.toString()) {
        return true;
    }
    return false;
}
