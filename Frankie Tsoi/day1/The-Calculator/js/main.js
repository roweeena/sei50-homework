// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(number){
    const squareResult = number*number;
    return squareResult;
};
const number = 3;
const logSquareResult = squareNumber(number);
console.log(`The result of the squaring the number ${number} is ${logSquareResult}.`);



// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(aNumber){
    const equalNumber = aNumber / 2
    return equalNumber;
};
const aNumber = 6;
const logEqualNumber = halfNumber(aNumber)
//console.log('Half of', aNumber, 'is', halfNumber(aNumber));
console.log(`Half of ${aNumber} is ${logEqualNumber}.`);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2){
    const perResult = 100*(num1/num2);
    return perResult;
}
 const num1 = 3;
 const num2 = 4;
 const logPerResult = percentOf(num1, num2);
 console.log(`${num1} is ${logPerResult}% of ${num2}.`);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
    const areaResult = Math.PI*(radius*radius);
    return areaResult.toFixed(2);
}
const radius = 2;
const logAreaResult = areaOfCircle(radius);
console.log(`The area for a circle with radius ${radius} is ${logAreaResult}.`);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const finalCal = function(numberA){
    const halfNumber = numberA/2;
    const square = halfNumber*halfNumber;
    const area2 = Math.PI * (square*square);
    const pec2 = 100*(area2/100);
    return pec2.toFixed(2); 
}   
const numberA = 8;
const logFinalCal = finalCal(numberA);
console.log(`the final outcome is ${logFinalCal}`);




