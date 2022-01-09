console.log("hi");

// # Simple Pig Latin

// Create a function that will translate your input to Pig Latin!

// ### Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Since we're keeping it fairly simple, leave punctuation marks untouched (we'll keep the space between punctuation marks and the word). 
// We'll also keep it case insensitive.

// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"


const oink = function(input){
    let newPig
    let newWordArray = []
    const wordArray = input.split(" ")
    // console.log(wordArray)

    for (let i = 0; i < wordArray.length; i++){

        if (!/[^a-zA-Z]/.test(wordArray[i])){ //check 
            const firstLetter = wordArray[i].slice(0, 1);
            // console.log(firstLetter)
            const restOfWord = wordArray[i].slice(1);
            // console.log(restOfWord)
            newWordArray[i] = `${restOfWord}${firstLetter}ay`
            
        } else{
            newWordArray[i] = wordArray[i]
        }  
    }
    
    newPig = newWordArray.join(' ')

    console.log(newPig)

    return newPig
}
