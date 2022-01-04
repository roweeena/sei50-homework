console.log('Functions exercise loaded.')

squareNumber = (firstNumber) => {
    squaredNum = firstNumber * firstNumber
    console.log(`The result of squaring this number is ${squaredNum}`)
}

squareNumber(4)

halfedNum = (numToHalf) => {
    halved = numToHalf /2
    console.log(`Half of ${numToHalf} is ${halved}`)
}

halfedNum(16)

percentOf = (firstValue, secondValue) => {
    calc = (secondValue/firstValue) * 100
    console.log(`${secondValue} is ${calc}% of ${firstValue}`)
}

percentOf(100,50)

areaOfCircle = (radius) => {
    calc = Math.PI * (radius*radius)
    console.log(`The area for a circle with the radius of ${radius} is ${(calc).toFixed(2)}.`);
}

areaOfCircle(10)


// DrEvil
// Create a function called DrEvil. It should take a single 
// argument, an amount, and return ' dollars', except it will 
// add '(pinky)' at the end if the amount is 1 million. 
// For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

DrEvil = (amount) => {
    if (amount !== 1000000) {
        console.log(`${amount} dollars`) // if number is not EXACTLY 1 million, simply print the amount with dollars
    } else if (amount === 1000000) {
        console.log(`${amount} dollars (pinky)`) // simply adds 'pinky' on if the value is EXACTLY 1 million
    }
} // end of DrEvil()

DrEvil(10)
DrEvil(1000000)

// MixUp
// Create a function called mixUp. It should take in two 
// strings, and return the concatenation of the two strings 
// (separated by a space) slicing out and swapping the first 
// 2 characters of each. You can assume that the strings are 
// at least 2 characters long. For example:
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

mixUp = (word1, word2) => {
    let first1 = word1.slice(0,2); // takes first 2 letters of first word
    let second1 = word2.slice(0,2); // takes first 2 letters of second word
    let first2 = word1.slice(2); // takes the remainder of the 1st word
    let second2 = word2.slice(2); // takes the remainder of the 2nd word
    return `${first1}${second2}
${second1}${first2}` // puts the start of the first word and the remainder of the 2nd word together
} // end of mixUp()

console.log(mixUp('dog','dinner'))

// FixStart
// Create a function called fixStart. It should take a 
// single argument, a string, and return a version where 
// all occurences of its first character have been replaced 
// with '*', except for the first character itself. You can 
// assume that the string is at least one character long. 
// For example:

// fixStart('babble'): 'ba**le'

fixStart = (password) => {
    firstLetter = password.slice(0,1); // parses first letter of password and saves in to a variable
    remainingLetters = password.slice(1,-1); // parses remainder of password so we can replace text within it
    let hiddenHalf = remainingLetters.replaceAll(firstLetter, "*"); // uses the remainingLetters to convert all characters that are the same as the first letter of the password in to *'s
    return firstLetter + hiddenHalf
} // end of fixStart()

console.log(fixStart('yayayayayayay'));

// Verbing
// Create a function called verbing. It should 
// take a single argument, a string. If its length 
// is at least 3, it should add 'ing' to its end, 
// unless it already ends in 'ing', in which case 
// it should add 'ly' instead. If the string length 
// is less than 3, it should leave it unchanged. 
// For example:
//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = (verb) => {
    if (verb.endsWith('ing')) {
        return verb += 'ly'; // if verb already ends with 'ing' add 'ly' to the string
    }
    else if (verb.length >= 3) {
        return verb += 'ing'; // if verb is more than 3 chars and doesn't end in 'ing' add 'ing' to it
    } else {
        return verb; // if its too short (less than 3 chars) do nothing!
    }
} // end of verbing()

console.log(verbing('walking'))

// Not Bad
// Create a function called notBad that takes a single argument, 
// a string.

// It should find the first appearance of the substring 'not' 
// and 'bad'.
// If the 'bad' follows the 'not', then it should replace the 
// whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
// just return the original sentence.

// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


const notBad = (sentence) => {
    let notPositionBefore = /not.*bad/; // defines the appearance of substring "not ... bad"
    if( notPositionBefore.test(sentence) ) { // finds out if it this substring is in the sentence provided in the notBad()
        let newSentence = sentence.replace(/not.*bad/, 'good') // if it's there, it will replace the entire string between the two identifiers with 'good'
        return newSentence // returns the updated sentence IF there was a 'not...bad' string in it
    } else {
        return sentence // otherwise it simply returns the given sentence
    }
} // end of notBad()

console.log(notBad('This dinner is not that bad!'))
console.log(notBad('This movie is not so bad!'))
console.log(notBad('This dinner is bad!'))


// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// callModulus = (num) => {
//     let result = ''
//     if (num % 3 === 0) {
//         result += 'pling '; // if the remainder of num / 3 = 0 write Pling
//     } if (num % 5 === 0) {
//         result += 'plang '; // if the remainder of num / 5 = 0 write Pling
//     } if (num % 7 === 0) {
//         result += 'plong '; // if the remainder of num / 5 = 0 write Pling
//     } if ((num % 3 !== 0) && (num % 5 !== 0) && (num % 7 !== 0)) {
//         result = `${num.toString()}` // if none of these, simply print the original number out
//     } return result
// }
// console.log(callModulus(1239));


// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.

// ### Examples

// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".