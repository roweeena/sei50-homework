console.log('Feeling 2022 in my bones');

// # Simple Pig Latin
//
// Create a function that will translate your input to Pig Latin!
//
// ### Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Since we're keeping it fairly simple, leave punctuation marks untouched (we'll keep the space between punctuation marks and the word).
// We'll also keep it case insensitive.
//
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"


const pigIt = function(str) {
  const result = []
  const array = str.split(' ')
  //console.log(array)

  for ( let i = 0; i < array.length; i++){
    //take care of punctuation
    if (array[i].includes("!") || array[i].includes("?")){
      //array[i] === "!"
      result.push(array[i])
    } else {
      const firstChar = array[i].charAt(0) // first char of the word at index i
      const restOfWord = array[i].substr(1) // rest of the word at index i
      console.log(`first character: ${firstChar}, rest of word: ${restOfWord}`)
      let newWord = restOfWord + firstChar + "ay"
      result.push(newWord)
    }
    //take care of everything else
  }
  return result.join(' ')
}

console.log(pigIt("Pig Latin is cool !"))
