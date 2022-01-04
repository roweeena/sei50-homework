// # Simple Pig Latin

// Create a function that will translate your input to Pig Latin!

// ### Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Since we're keeping it fairly simple, leave punctuation marks untouched (we'll keep the space between punctuation marks and the word). 
// We'll also keep it case insensitive.

// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"


const pigLatin = (sentence) => {
    // sep string by the spaces, 
    const sentenceArr = sentence.split(" ");

    // for each word move the first letter to the end
    let pigSentence = sentenceArr.map(word => {
        console.log(`word before: ${word}`);
        word = word.substring(2) + word.substring(0,2) + "ay";
        console.log(`word after: ${word}`);
        
        return word
    });

    console.log(pigSentence.join(" "));
    // add "ay" onto the  end of the word
}

pigLatin('this is a test case')