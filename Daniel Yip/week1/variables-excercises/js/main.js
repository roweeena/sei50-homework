console.log("JS loaded!");
console.log(2 + 2);



// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. 
const numbOfChildren = 10;
const partnersName = "Tamara";
const geoLocation = "Antarctica";
const jobTitle = "Astronaut";
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
console.log("You will be an " + jobTitle + " in " + geoLocation + ", and married to " + partnersName + " with " + numbOfChildren + " kids.");






// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
const currentYear = 2021;
// Store their birth year in a variable.
const birthYear = 1904;
// Calculate their 2 possible ages based on the stored values.
const possibleAge = currentYear - birthYear;
const possibleAge2 = possibleAge - 1;
// Output them to the screen like so: "They are either NN or NN", substituting the values.

console.log("They are either " + possibleAge + " or " + possibleAge2);
console.log(`They are either ${possibleAge} of ${possibleAge2}`);


// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
const currentAge = 31;
// Store a maximum age into a variable.
const maxAge = 100;
// Store an estimated amount per day (as a number).
const estAmountPerDay = 3;
// Calculate how many you would eat total for the rest of your life.
const yearsRemaining = maxAge - currentAge;

const amountForRestOfLife = estAmountPerDay*currentAge*365.25;
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X"

console.log("You will need " + amountForRestOfLife + " to last you to the ripe old age of " + maxAge);
console.log(`You will need ${amountForRestOfLife} to last you to the ripe old age of ${maxAge}`);


// The Temperature Converter
// It's hot out! Let's make a converter.

// Store a celsius temperature into a variable.
const celciusTemp = 10;
// Convert it to fahrenheit and output "NN°C is NN°F".
const cToF = (celciusTemp * 9/5) + 32;

console.log(celciusTemp + "\xB0C is " + cToF + "\xB0F");
console.log(`${celciusTemp}\xB0C is ${cToF}\xB0F`);


// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const fahrenheitTemp = 100;
const fToC = (fahrenheitTemp - 32) * 5/9;

console.log(`${fahrenheitTemp}\xB0F is ${fToC}\xB0C`);


console.log(`hello ${fahrenheitTemp}`);


// (0°C × 9/5) + 32 = 32°F

// (32°F − 32) × 5/9 = 0°C








// debugger

const sayHello = function(){
    console.log("hello");
}

sayHello()
