// # Simple Pig Latin

// Create a function that will translate your input to Pig Latin!

// ### Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Since we're keeping it fairly simple, leave punctuation marks untouched (we'll keep the space between punctuation marks and the word). 
// We'll also keep it case insensitive.

// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"



function pigLatin(input){
    let lowerInp = input.toLowerCase();
    let splitInp = lowerInp.split(' ');
    
    for (let i = 0; i < splitInp.length; i++){
        if (/^[a-zA-Z]+$/.test(splitInp[i])){ // excluding punctuation marks 
            splitInp[i] = splitInp[i].slice(1) + splitInp[i][0] + 'ay';
        }
    }

    let joinedInp = splitInp.join(' ');
    console.log(joinedInp.charAt(0).toUpperCase()+joinedInp.slice(1));
}

pigLatin(`it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout .`)