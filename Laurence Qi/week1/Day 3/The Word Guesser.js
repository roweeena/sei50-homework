const guessLetter = (word) => {
    let failAttempts = 0;
    let secretWordLetters = word.split(""); // Generates the global arr

    // When Guess is correct: Switch all values of the "_" in the respective position of the guess values.
    const switchLetter = (guess) => {//TODO: do debugging with this!
        let currentIndex;

        do { // fill in every matching letter in the relevant space.  //TODO: Use ReplaceAll
            currentIndex = secretWordLetters.indexOf(guess);
            secretWordLetters[currentIndex] = "_";
            wordProgress[currentIndex] = guess;
        } while (secretWordLetters.indexOf(guess) !== -1)
        console.log(`${guess} was a correct letter`);
    }

    //When Guess is wrong: Increase fail Attempts
    const guessAgain = (guess) => {
        failAttempts++;
        console.log(`Sorry ${guess} is not in here. Try Again!`);
    }

    let wordProgress = new Array(secretWordLetters.length).fill("_"); // Generates the secretWordLetters length of "_" in wordProgress
    
    //for each guess checks if the work matches and uses the switchLetter & guessAgain methods.
    for (i = 0; i < guesses.length; i++){ 
        secretWordLetters.includes(guess) ? switchLetter(guess) : guessAgain(guess); // Replaces "_" if correct until no more  

        if(!wordProgress.includes("_")) { //TODO: change this to a counter method. 
            console.log("Congrats you found the word!");
            break;
        }
        console.log(wordProgress);
    }
}

const globalWord = "GOOFY";
const guesses = ["G", "F", "Y", "P", "O", "N", "X"];
guessLetter(globalWord, guesses);