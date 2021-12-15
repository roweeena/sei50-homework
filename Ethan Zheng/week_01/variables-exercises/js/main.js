console.log("JS loaded!!!!!!!");

//The Fortune Teller

//initialise variables
const numChildren = 6;
const partnerName = "Yahweh";
const geoLocation = "Somewhere over the Rainbow";
const jobTitle = "Sailor";

//console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");
console.log(`You will be a ${jobTitle} in 
${geoLocation}, and married to ${partnerName} 
with ${numChildren}.`);

//The Age Calculator

//initialise variables

const currentYear = 2021;
const birthYear = 1999;
const age = currentYear - birthYear;

console.log("They are either " + age + " or " + (age - 1));

//The Lifetime Supply Calculator

//initialise variables
const currentAge = 22;
const maxAge = 80;
const snackPerDay = 3;
let lifetimeSupply = (maxAge - currentAge) * 365 * 3;

console.log("You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge);

//The Temperature Converter

const celcius1 = 35;
const fahrenheit1 = celcius1 * (9/5) + 32;

const fahrenheit2 = 99;
const celcius2 = (fahrenheit2 - 32) * (5/9);

console.log(celcius1 + "\xB0C is " + fahrenheit1 + "\xB0F.");
console.log(fahrenheit2 + "\xB0F is " + celcius2.toFixed(1) + "\xB0C.");


const sayHello = function (name) {
    console.log("Hello! " + name + "!");

};
const doSomethingFancy = function () {
    console.log("Ooooo, Fancy");
};

sayHello("Pew Pew");
doSomethingFancy();

const squareNumber = function(x) {
    const square = x * x;
    console.log(square);
    return square;
};

const addNums = function(firstNum, secondNum) {
    const result = firstNum + secondNum;
    console.log(result);
    return result;
};

squareNumber(8);
addNums(squareNumber(5), 5);








