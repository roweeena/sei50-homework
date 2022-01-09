const guessLetter = (word, guesses) => {
    let failAttempts = 0;
    let globalArr = word.split(""); // Generates the global arr
    // Generates the globalArr length of "_" in wordProgress
    const underScoreGenerate = () => {
        let wordProgress = [];
        for (let i = 0; i < globalArr.length; i++) {
            wordProgress.push("_");
        }
        return wordProgress;
    }

    guesses.map( guess => {
        globalArr.includes(guess) ? switchLetter(guess) : guessAgain(guess);
    })
    
//     // When Guess is correct: Switch all values of the "_" in the respective position of the guess values.
//     const switchLetter = (guess) => {//TODO: do debugging with this!
//         let currentIndex;

//         do { // fill in every matching letter in the relevant space. 
//             currentIndex = globalArr.indexOf(guess);
//             globalArr[currentIndex] = "_";
//             wordProgress[currentIndex] = guess;
//         } while (globalArr.indexOf(guess) !== -1)
//         console.log(`${guess} was a correct letter`);

//         if (!wordProgress.includes("_")) {
//             console.log("Congrats you are correct!");
//         }
//     }

//     //When Guess is wrong: Increase fail Attempts
//     const guessAgain = (guess) => {
//         failAttempts++;
//         console.log(`Sorry ${guess} is not in here. Try Again!`);
        
//     }

//     let wordProgress = underScoreGenerate();// While loop that takes in a guess, check if that letter is there

//     guesses.forEach(guess => {
//         globalArr.includes(guess) ? switchLetter(guess) : guessAgain(guess); // Replaces "_" if correct until no more  //TODO: change this to be a function of the onclick button. in html
//         console.log(wordProgress);
//     });
}

const globalWord = "FOX";
const guesses = ["G","F", "Y", "P", "O", "N", "X"];
guessLetter(globalWord, guesses);
