/*

let lettersOfTheWord =["W",'H','A','T','E','V','E','R'];
let guessedLetters = lettersOfTheWord.map(()=>'_');
// guessedLetters = new Array(lettersOfTheWord.length).fill('_');

var count=0;
var award=0;
var alreadyGuessed=[];
var wrongLetters=[];

// function checkGuessed(letter){
//     const noGuess =  new Set (letter);
//     return letter.length !== noGuess.size;
// }

function guessLetter(letter){
    for(let i=0; i<lettersOfTheWord.length;i++){
        if (letter===lettersOfTheWord[i] && guessedLetters[i]==='_'){
            guessedLetters[i]=letter;
            console.log("You entered:" + letter);
            console.log(`The current guessed letters: ${guessedLetters.toString()}`);
            console.log("Congradulations! You found a new letter.");
            count++;
            money=Math.floor(Math.random()*1000)+1;; 
            console.log("You get $"+money);     
            award=award+money;      
            break;
        }
    }

    if (!(lettersOfTheWord.includes(letter)))  {
        console.log("You entred: " + letter);
        console.log("WRONG LETTER");
        //var wrongLetters=[];
        wrongLetters.push(letter);
        console.log('wrong letter', wrongLetters);
        // if( wrongLetters.checkGuessed(letter) ===true){
        //     console.log("You have already guessed this number");
        // }
        // wrongLetters.forEach(function(letter){
        //     if (alreadyGuessed[letter])
        //     console.log("already guessed");
        // })
        money=Math.floor(Math.random()*1000)+1;
        console.log("You lost $"+ money);
        award=award-money;

    }

    if (count===lettersOfTheWord.length){
        console.log("Congradulations! You win!");
        console.log("You get $"+ award);

    }

}

guessLetter("W");
// guessLetter("H");
// guessLetter("A");
// guessLetter("T");
guessLetter("O");
// guessLetter("O");
// guessLetter("V");
// guessLetter("R");
// guessLetter("E");
// guessLetter("E");

*/


console.log("Word Guesser");
const secretWordLetters= ['T','E','S','T'];
const guessedLetters=['_','_','_','_'];

const guessLetter = function(userGuess){
    console.log('in guessLetter(), argument userGuess= ', userGuess);
    for(let i=0;i<secretWordLetters.length;i++){
        const currentSecretLetter =secretWordLetters[i];
        console.log("serect letter:", currentSecretLetter);
    }

};

guessLetter('X');