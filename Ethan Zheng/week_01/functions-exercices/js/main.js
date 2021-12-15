console.log("Functions loaded lol");


//The Fortune Teller
//define functions

const tellFortune = function (x, y, z, n) {
    return `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.` ;  
};

//call functions
const firstFortune = tellFortune("deadbeat", "New Zealand", "no one", "ten");
console.log(firstFortune);
const secondFortune = tellFortune("teacher", "Seattle", "someone", "no");
console.log(secondFortune);
const thirdFortune = tellFortune("artist", "China", "Xi Ji Ping", "two");
console.log(thirdFortune);

//The Puppy Age Calculator

//define functions
const calculateDogAge = function (puppyAge, conversionRate) {
    const calculatedHumanAge = puppyAge * conversionRate;
    return `Your doggie is ${calculatedHumanAge} years old in dog years`;
};
//call functions
const firstDogAge = calculateDogAge(1, 7);
console.log(firstDogAge);
const secondDogAge = calculateDogAge(3, 3);
console.log(secondDogAge);
const thirdDogAge = calculateDogAge(10, 9);
console.log(thirdDogAge);

//The Lifetime Supply Calculator

//define global variable
const maxAge = 80;
//define functions
const calculateSupply = function (age, amountPerDay) {
    const remainingAge = maxAge - age;
    const lifetimeSupply = remainingAge * amountPerDay;
    return `You will need ${Math.round(lifetimeSupply)} to last you until the ripe old age of ${maxAge}`;
};

//call function
const firstSupply = calculateSupply(12, 2);
console.log(firstSupply);
const secondSupply = calculateSupply(55, 4);
console.log(secondSupply);
const thirdSupply = calculateSupply(22, 0.8);
console.log(thirdSupply);

//The Temperature Converter

//define global variables if needed
let celsius = 36;
//define functions
const celsiusToFahrenheit = function (celciusTemp) {
    fahrenheitTemp = celciusTemp * (9/5) + 32;
    return fahrenheitTemp;
}
const fahrenheitToCelcius = function (fahrenheitTemp) {
    celciusTemp = (fahrenheitTemp - 32) * (5/9);
    return celciusTemp;
}

//call functions
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}\xB0C is ${fahrenheit}\xB0F`);
celsius = fahrenheitToCelcius(fahrenheit);
console.log(`${fahrenheit}\xB0F is ${celsius}\xB0C`);



//Temperature Converter bonus - NEED TO FINISH
//define variables by user input

 //   const userTempCel = document.getElementById("fah").value;
 //   const userTempFah = document.getElementById("cel").value;
//



