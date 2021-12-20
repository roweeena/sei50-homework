// Strings

// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(demandAmount){
    if (demandAmount>=1000000){
        console.log(`${demandAmount} (pinky)`)
    } else {
        console.log(`${demandAmount}`);
    }
}
DrEvil(1000000);
DrEvil(10);
DrEvil(1000567908);

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(word1,word2){
   console.log(word1.slice(0,2)+word2.slice(2),word2.slice(0,2)+word1.slice(2) ); //slice the last 2 from word1, slice the first 2 from word2
}

mixUp('cat','dog');
mixUp('dog','dinner')



// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

// const fixStart = function
const fixStart = function(fixWord){
    const cutWord=fixWord.slice(0,1); //define the first letter of that occurs. 
    const replaceWord=fixWord.replaceAll(cutWord,"*"); //replace all occurences of first letter in word
    console.log(cutWord+replaceWord.slice(1));  //replace '*' from output and input original first letter <= no idea if this is lazy or not...
}
fixStart('abcabc')
fixStart('wakawakawaka')

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(verbInput) {
    const cutInput=verbInput.slice(0,-3);
 if (verbInput.length>=3&&!verbInput.endsWith('ing')){
     console.log(verbInput+'ing');
 } else if (verbInput.endsWith('ing')){
     console.log(cutInput+'ly');
 } else if(verbInput.length<=3){
     console.log(verbInput)
 }
}; // this one is quite easy, it's just long. '.includes' is useful for finding if a string includes a certain element. <= this is wrong here, we only want 'ing' if it is at the end! use .endsWith

verbing('walk');
verbing('swimming');
verbing('ba');



// Not Bad

// Create a function called notBad that takes a single argument, a string.

//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(sentenceExample){
    if (sentenceExample.indexOf('not')<sentenceExample.lastIndexOf('bad')){ //this is asking if the last occurence of 'bad' has a higher value than the first occurence than 'not'
        const sentenceEdit=sentenceExample.replace(/not.*bad/,"good"); // "/x.*y" = from x to y. This is important. You want to delete whatever is inbetween the first 'not' and last 'but', not just the individual words.
        console.log(sentenceEdit);
    }
};

notBad("I\'m not bad at table tennis")
notBad("Wow, this house is not so bad...")
notBad("This song is so bad!")