console.log("Homework loaded");

// The Calculator
// Part 1

//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number){
    const squareNumberOutput = number * number;
    console.log(`The result of squaring ${number} is ${squareNumberOutput}.`)
    return squareNumberOutput;
};

squareNumber(6)

//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const  halfNumber  = function(number){
    const halfNumberOutput = number / 2;
    console.log(`The result of dividing ${number} by 2 is ${halfNumberOutput}.`);
    return halfNumberOutput;
}

halfNumber(6)

//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(numberOne,numberTwo){
    const output = 100*(numberOne/numberTwo);
    console.log(`${numberOne} is ${output}% of ${numberTwo}`);
    return output;
}

percentOf(1,4)

//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius){
    const area = (Math.PI * (radius * radius)).toFixed(2); 
    console.log(`The area of the circle is ${area}.`);
    return area;
}

areaOfCircle(6)

//     Bonus: Round the result so there are only two digits after the decimal.

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).

const fourOperations =  function(number){
    const output = number/2;
    const outputSquared = squareNumber(output);
    const area = areaOfCircle(output);
    const percentageArea = percentOf(area, outputSquared);
    return percentageArea;
}

console.log(fourOperations(6));

// js-homework-2.md
// Strings

// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

const DrEvil = function(amount){
    if (amount === 1000000){
        return amount + " dollars (pinky)";
    } else {
        return amount + " dollars";
    }
}

console.log(DrEvil(1000000))

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
//   Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(stringOne,stringTwo){
    const stringOneSlice = stringOne.slice(2);
    const stringTwoSlice = stringTwo.slice(2);
    const stringOneFirstTwoLetters = stringOne.slice(0,2)
    const stringTwoFirstTwoLetters = stringTwo.slice(0,2)
    return stringTwoFirstTwoLetters + stringOneSlice + " " + stringOneFirstTwoLetters + stringTwoSlice;
}

console.log(mixUp("dog","dinner"))

// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

// debugger;

const fixStart = function(string){
    const firstLetter = string.slice(0,1);
    const censoredString = string.replaceAll(firstLetter, "*");
    return firstLetter + censoredString;
}

console.log(fixStart("babble"))

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end,
// unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it
// unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(string){
    const stringLength = string.length
    if (stringLength >= 3){
        if (string.slice(-3) == "ing"){
            return string + "ly"
        }else {
            return string + "ing"
        }
    } else {
        return string;
    }
};  // verbing()

console.log(verbing("walk"));
console.log(verbing("swimming"));
console.log(verbing("go"));

// Not Bad

// Create a function called notBad that takes a single argument, a string.

//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function(string){
    const regex = /not|bad/g;
    const searchForNotAndBad = string.match(regex);
    if (searchForNotAndBad.indexOf("not") < searchForNotAndBad.indexOf("bad")){
        string.replace(/not*bad/i,'good')    // action to swap 'not' and 'bad' for 'good'.
    }else {
        return string
    }
}

console.log(notBad("This dinner is not bad!"));

// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'



// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

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


const plingPlangPlong = function(number){
    let result = '';              //initialise

    if (number % 3 === 0) {
        result = result + "pling";
    }

    if (number % 5 === 0) {
        result = result + "plang";
    }

    if (number % 7  === 0){
        result = result + "plong";
    }
    
    if (result.length === 0){
        result = number.toString();
    }

    return result;
}


console.log(plingPlangPlong(28))
console.log(plingPlangPlong(1755))
console.log(plingPlangPlong(105))
console.log(plingPlangPlong(34))


