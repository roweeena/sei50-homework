console.log(`JS :)`);
console.log("")
console.log("")
console.log(`////////////////// Welcome to "The Calculator" ///////////////////////`);

console.log("############################## PART 1 ################################")

// Write a function called squareNumber that will take one argument (a number), square that number, and **return** the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(num){
    const result = Math.pow(num, 2);
    console.log(`The result of squaring the number ${num} is ${result}`);
    return result
};

squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and **return** the result. 
// It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num){
    const result = num/2;
    console.log(`Half of ${num} is ${result}`);
    return result;
};

halfNumber(99)

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and **return** the result. 
// It should also log a string like "2 is 50% of 4."
const percentOf = function(num1, num2){
    const result = (num1/num2)*100
    console.log(`${num1} is ${result}% of ${num2}`);
    return result;
}

percentOf(30, 200)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and **return** the result. 
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius){
    const result = Math.pow((Math.PI * radius), 2);
    console.log(`The area of a circle with the radius of ${radius} is ${result}`);
    const rounded = result.toFixed(2) // Bonus: Round the result so there are only two digits after the decimal.
    console.log(`The in accuratly rounded result would be ${rounded}`)
    return result
}

areaOfCircle(10)

console.log("")
console.log("")
console.log("############################## PART 2 ################################")

// Write a function that will take one argument (a number) and perform the flilowing operations, using the functions you wrote earlier:

const doAllTheThings = function(number){
    const half = halfNumber(number);// Take half of the number and store the result.
    const squareOfHalf = squareNumber(half).toFixed(2);// Square the result of #1 and store that result.
    const areaCircleFromSquare = areaOfCircle(squareOfHalf).toFixed(2);// Calculate the area of a circle with the result of #2 as the radius.
    const percentageCircleOfSquare = percentOf(areaCircleFromSquare, squareOfHalf)// Calculate what percentage that area is of the squared result (#3).
}

doAllTheThings(5)


console.log("")
console.log("")
console.log(`//////////////////////// It's Strings Time ///////////////////////////`);
console.log("############################## DrEvil ################################") // ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const drEvil = function(amount){
    if( amount === 1000000){
        console.log(`${amount} dollars (pinky)`);
    } else {
        console.log(`${amount} dollars`);
    }
};

drEvil(10);
drEvil(1000000);


console.log("############################## MixUp ################################")// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function(word, anotherWord){
    const newWord = `${anotherWord.slice(0,2)}${word.slice(2,word.length)}`;
    // console.log(newWord);
    const anotherNewWord = `${word.slice(0,2)}${anotherWord.slice(2,anotherWord.length)}`;
    // console.log(anotherNewWord);
    return `${newWord} ${anotherNewWord}`
};

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));


console.log("############################## FixStart ################################")/// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function(word){
    const firstLetter = word.charAt(0) //store the first letter
    // console.log(firstLetter);
    const wordWithoutFirstLetter = word.slice(1, word.length);// slice off the first letter
    // console.log(wordWithoutFirstLetter);
    const swappedCharachters = wordWithoutFirstLetter.replaceAll(firstLetter, '*');// replace all instances of the first letter
    // console.log(swappedCharachters);
    const newWord = `${firstLetter}${swappedCharachters}` // concat the first letter back on
    console.log(newWord);
    return newWord
}

fixStart('babble')


console.log("############################## Verbing ################################")/// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function(word){
    if(word.length < 3){
        console.log(word);
        return word;
    }
    if(word.length >= 3 && word.slice(-3) != 'ing'){
        const wording =`${word}ing`;
        console.log(wording);
        return wording;
    } else{
        const wordly = `${word}ly`
        console.log(wordly);
        return 
    }
}

verbing('walk');
verbing('swimming');
verbing('go')

console.log("############################## Not Bad ################################")/// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
const notBad = function(sentance){
    const lowerCaseSentance = sentance.toLowerCase() //convert string to lower case to enable .indexOf to find the words regardless of case
    const posOfNot = lowerCaseSentance.indexOf('not') // store the position of the first apperance of not
    // console.log(posOfNot)
    const posOfBad = lowerCaseSentance.indexOf('bad') // store the positiion of the first apperance of bad
    // console.log(posOfBad)
    if(posOfNot < posOfBad && posOfNot != -1 && posOfBad != -1){ //check if the position of not is before the possition of bad, and that both not and bad are in existiance
        const newSentance = sentance.replace((/not.*bad/i), 'good') // replace section of string between not and bad with good
        console.log(newSentance)
        return newSentance
    } else {
        console.log(sentance);
        return sentance;
    };
}

notBad('This dinner is not that bad!');
notBad('My dinner was NOT that BAD!');
notBad('This movie is NOT so BAD!');
notBad('This dinner is bad!');