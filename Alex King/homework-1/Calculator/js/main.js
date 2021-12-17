// The Calculator
// Part 1

//     Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//     Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//     Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//     Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//     Bonus: Round the result so there are only two digits after the decimal.
const squareNumber = function(baseNumberPow){
    const outputNumberPow=Math.pow(baseNumberPow,2);
    console.log(`The result of squaring the number ${baseNumberPow} is ${outputNumberPow}.`);
    return outputNumberPow;
}
squareNumber(9);

// half number 
const halfNumber = function(baseNumberHalf){
    const outputNumberHalf=baseNumberHalf/2;
    console.log(`Half of ${baseNumberHalf} is ${outputNumberHalf}.`);

}
halfNumber(3);

const percentOf = function(firstBaseNumberPerc,secondBaseNumberPerc){
    const outputNumberPerc=firstBaseNumberPerc/secondBaseNumberPerc*100;
    console.log(`${firstBaseNumberPerc} is ${outputNumberPerc}% of ${secondBaseNumberPerc}`)
}

percentOf(10, 5);

const areaOfCircle = function(circleRadius){
    const outputRadius=(Math.PI*Math.pow(circleRadius,2)).toFixed(2);
    console.log(`The area of a circle with r=${circleRadius} is ${outputRadius}`)
    return outputRadius;
}

areaOfCircle(4);

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).

const calculateStuff = function(inputNumber){
    const numberHalf=inputNumber/2;
    const numberSQR=Math.pow(numberHalf,2);
    const numberCirc=Math.PI*Math.pow(numberSQR,2);
    const numberPerc=numberCirc/numberSQR*100;
    console.log(`#1 ${numberHalf}, #2 ${numberSQR}, #3 ${numberCirc}, #4 ${numberPerc}`);
}

calculateStuff(5);
