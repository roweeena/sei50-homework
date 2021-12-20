// Which number's bigger?

// Write a function named greaterNum that:

//     takes 2 arguments, both numbers.
//     returns whichever number is the greater (higher) number.
//     Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(num1, num2){
    console.log(`the greater number of ${num1} and ${num2} is ${num1, num2}.`)
    if (num1>num2){
        console.log(num1);
        return num1;
    } else {
        console.log(num2)
        return num2;
    }
    

}
greaterNum(2,5)
greaterNum(7,4)



// The World Translator

// Write a function named helloWorld that:

//     takes 1 argument, a language code (e.g. "es", "de", "en")
//     returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
//     Call that function for each of the supported languages and log the result to make sure it works.
 
const helloWorld = function(translation='en'){
    if (translation==='jp'){
        console.log('こんにちは世界');
    } else if (translation==='fr'){
        console.log('Bonjour le Monde');
    } else {
        console.log('hello world');
    }
} //helloWorld function closer
helloWorld('jp');
helloWorld('fr');
helloWorld();


// The Grade Assigner

// Write a function named assignGrade that:

//     takes 1 argument, a number score.
//     returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
//     Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function(score){
    if (score>='90'){
        console.log("A");
    } else if (score>='80'){
        console.log('B')
    } else if (score>='70'){
        console.log("C");
    } else if (score>='55'){
        console.log('D');
    } if (score<='55'){
        console.log('F');
    }
}
assignGrade(88);
assignGrade(32);
assignGrade(64);
assignGrade(55);
assignGrade(90);


// The Pluralizer

// Write a function named pluralize that:

//     takes 2 arguments, a noun and a number.
//     returns the number and pluralized form, like "5 cats" or "1 dog".
//     Call that function for a few different combinations of noun & number, and log the result to make sure it works.
//     Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function(animalNumber,animalName){
    if (animalName==='deer'||animalName==='moose'||animalName==='sheep'||animalName==='fish'||animalName==='salmon'){
    console.log(`${animalNumber} ${animalName}`);
    } else if (animalNumber>1 && animalName==='goose'){
        console.log(`${animalNumber} geese`);
        } else if (animalNumber>1){
        console.log(`${animalNumber} ${animalName}\'s`);
        
    } else if (animalNumber===1){
        console.log(`${animalNumber} ${animalName}`);
    }
    
}

pluralize(1, 'cat');
pluralize(2, 'goose');
pluralize(20, 'dog');
pluralize(20, 'deer');
pluralize(0, 'salmon');