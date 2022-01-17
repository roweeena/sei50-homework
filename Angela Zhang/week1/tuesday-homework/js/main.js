//HOMEWORK 14-12-21

// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), 
//square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber= function(number){
    const resultsSquareNumber=(number*number).toFixed(2);
    console.log(`The result of squaring the ${number} is ${outputSquareNumber}.`);
    return resultsSquareNumber;
}
const outputSquareNumber= squareNumber(3);
console.log("--------------------------");

// Write a function called halfNumber that will take one argument (a number), 
//divide it by 2, and return the result. 
//It should also log a string like "Half of 5 is 2.5.".

const halfNumber= function(number2){
    const resultHalfNumber= number2 / 2;
    console.log(`Half of 5 is ${outputHalfNumber}.`);
    return resultHalfNumber;
}

const outputHalfNumber= halfNumber(5);
console.log("--------------------------");



// Write a function called percentOf that will take two numbers, figure out what 
//percent the first number represents of 
//the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(number1,number2){
    const outputPercentage= 100*(number1/number2);
    console.log(``)
}




// Write a function called areaOfCircle that will take one argument (the radius), 
//calculate the area based on that, 
//and return the result. It should also log a string like "The area for a circle 
//with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const calculateAreaOfCircle = function (radius){
    const areaOfCircle= (Math.PI * (radius*radius)).toFixed(2);
    console.log(`The area for a circle with radius 2 is ${outputAreaOfCircle}.`);
    return areaOfCircle;
}
const outputAreaOfCircle = calculateAreaOfCircle(2);



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, 
//using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

//let squaredNumber= Math.pow(2,2);
//console.log(squareNumber);
//--> online example does not work. web console shows the funtion and not the result

const finalCalculation =function(number){
    const halfNumber = halfNumber(number);
    const squareNumber=squareNumber(halfNumber);
    const areaCircle=calculateAreaOfCircle(halfNumber);
    const percentageArea= areaCircle/360;
    return percentageArea;
}

const outputFinalCalculation = finalCalculation(2);
console.log (outputFinalCalculation);


// Exercises: if/else statements
// Which number's bigger?
// Write a function named greaterNum that:

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output 
//to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum= function(x,y){
    if(x>y){ 
    console.log(`The greater number of ${x} and ${y} is `);
};
}//closing bracket of greatNum

greaterNum(5,3);


// The World Translator
// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. 
//It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.






// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 
//receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.




// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the 
//result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// const assignGrade=funtion(numberScore){
//     if(numberScore>90){
//         console.log(`Grade Score A`)}
//         elseif (numberScore<90 && numberScore>80){
//         console.log(`Grade Score B`)}
//         elseif(numberScore<80 && numberScore>70){
//             console.log(`Grade Score C`)}
//         elseif(numberScore<70 && numberScore>60){
//             console.log(`Grade Score D`)}
//         else(numberScore<60){
//             console.log(`Grade Score F`)}
// }//closing assignGrade 

// assignGrade(65);

console.log(`--------------------------`);
console.log(`WARM UP EXCERCISE`);






