console.log(`JS :)`);


// # Exercises: if/else statements

// ## Which number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1, num2){
    let biggerNum = null;
    if (num1 > num2){
        biggerNum = num1;
    } else{
        biggerNum = num2;
    }
    console.log(`The greater number of ${num1} and ${num2} is ${biggerNum}`);
    return biggerNum;
}

greaterNum(1,10);
greaterNum(4000,100);


// ## The World Translator

// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function(langCode){
    if (langCode === 'es'){
        return 'Hola Mundo'

    } else if ( langCode === 'de'){
        return 'Hallo Welt'

    } else{
        return `Hello, World`
    }
}

console.log(helloWorld('es'))
console.log(helloWorld('de'))
console.log(helloWorld('en'))
console.log(helloWorld('a'))

// ## The Grade Assigner

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// - Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score){
    if(score >= 90){
        return 'A'
    }else if(score >= 80){
        return 'B'
    }else if(score >= 70){
        return 'C'
    }else if(score >= 60){
        return 'D'
    }else if(score >= 50){
        return 'E'
    }else{
        return 'F'
    }
}

console.log(assignGrade(10));
console.log(assignGrade(54));
console.log(assignGrade(67));
console.log(assignGrade(73));
console.log(assignGrade(82));
console.log(assignGrade(99));

// ## The Pluralizer

// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(noun, number){
    if (number === 1){
        return `${number} ${noun}`
    } else if (number > 1){
        return `${number} ${noun}s`
    }
}

console.log(pluralize('cat', 4));

console.log(pluralize('cat', 1))


