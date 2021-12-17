console.log("JS loaded");



// ######################################################################################################
// The Fortune Teller
// ######################################################################################################
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."

const tellFortune = function(numKids, partnerName, geoLocation, jobTitle){
    return `You will be a ${jobTitle} in ${geoLocation}, and marriesd to ${partnerName} with ${numKids} kids.`
};

// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

const peteFortune = tellFortune(1, "Paula", "Sydney", "Fireman");
console.log(peteFortune);

const johnFortune = tellFortune(2, "Jess", "Melbourne", "Web Developer");
console.log(johnFortune);

const frankFortune = tellFortune(3, "Tracey", "Brisbane", "Astronaut");
console.log(frankFortune);




// ######################################################################################################
// The Puppy Age Calculator
// ######################################################################################################
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:

// takes 1 argument: your puppy's age.
// calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// returns a string that looks like this: "Your doggie is NN years old in dog years!"
const calculateDogAge = function(pupAge){
    ageInHumanYrs = pupAge * 7;
    return `Your doggie is ${ageInHumanYrs} years old in human years`

};

// Call the function three times with different sets of values.
// Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

const pup1Age = calculateDogAge(1);
console.log(pup1Age);

const pup2Age = calculateDogAge(2);
console.log(pup2Age);

const pup3Age = calculateDogAge(3);
console.log(pup3Age);

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.


// ######################################################################################################
// The Lifetime Supply Calculator
// ######################################################################################################
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:

// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a fixed maximum age).
// returns a string that looks like this: "You will need NN to last you until the ripe old age of X"

const calculateSupply = function(age, amountPerDay){
    const amountReq = Math.ceil(((100 - age) * 365.25) * amountPerDay);
    console.log(amountReq);
    return `You will need ${amountReq} to last until the ripe old age of 100`
};

// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable;
const person1 = calculateSupply(10, 1)
console.log(person1)

const person2 = calculateSupply(20, 5)
console.log(person2)

const person3 = calculateSupply(30, 5)
console.log(person3)

// Bonus: Accept floating point values for amount per day, and round the result to a round number.


// ######################################################################################################
// The Temperature Converter
// ######################################################################################################
// It's hot out! Let's make a converter.

// Create a function called celsiusToFahrenheit which:
// Takes a celsius temperature as its argument.
// Converts it to fahrenheit and returns this value from the function

const celciusToFahrenheit = function(cTemp){
    return (cTemp * 1.8) + 32
}

// Call the funtion this way:
// Create a variable called celsius and store a temperature value in it
const celcius = prompt("what is the temp in celcius?");

// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".

const fahrenheit = celciusToFahrenheit(celcius);
console.log(`${celcius}°C is ${fahrenheit}°F`)

// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.

const fahrenheitToCelsius = function(fTemp){
    return (fTemp - 32) * (5/9);
}

console.log(fahrenheitToCelsius(fahrenheit))


// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.