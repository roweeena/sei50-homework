console.log("Pig Latin");

//Pig Latin - Create a function that will translate user input to pig latin
//Move the first letter of each word to the end of it, then add "ay" to the
//end of the word. Punctuation should be untouched, and the program should be
//case insensitive.


function pigLatin (input) {
    const splitInput = input.split(" ");
    const newString = [];
    for (let i = 0; i < splitInput.length; i++) {
        newString[i] = translateOneWord(splitInput[i]);
    }    

    return newString.join(" ");
}

function translateOneWord (input) {
    //search for first alphabet character and store it in a different variable
    const alphabetRegEx = /[a-zA-Z]/g;
    const firstChar = input[input.search(alphabetRegEx)];

    if (firstChar === undefined) {
        return input;
    }

    //create a new string without the stored character
    const newString = input.replace(firstChar, "");
    //add the first alphabet character to the new string at the end of it
    const newestString = newString.concat("", firstChar, "ay");
    //return the new string
    return newestString;
}


console.log(pigLatin("Ni Hao pew pew !"));


