let lettersOfTheWord =["W",'H','A','T','E','V','E','R'];
let guessedLetters = lettersOfTheWord.map(()=>'_');
var count=0;
var award=0;
function guessLetter(letter){
    for(let i=0; i<lettersOfTheWord.length;i++){
        if (letter===lettersOfTheWord[i] && guessedLetters[i]==='_'){
            guessedLetters[i]=letter;
            console.log("You entered:" + letter);
            console.log(`The current guessed letters: ${guessedLetters.toString()}`);
            console.log("Congradulations! You found a new letter.");
            count++;
            award=Math.floor(Math.random()*1000)+1;; 
            console.log(award);           
            break;
        }
    }
 
    if (!(lettersOfTheWord.includes(letter)))  {
        console.log("You entred: " + letter);
        console.log("WRONG LETTER");
    }

    if (count===lettersOfTheWord.length){
        console.log("Congradulations! You win!");
    }

}

guessLetter("W");
guessLetter("H");
guessLetter("A");
guessLetter("T");
guessLetter("O");
guessLetter("V");
guessLetter("R");
guessLetter("E");
guessLetter("E");
