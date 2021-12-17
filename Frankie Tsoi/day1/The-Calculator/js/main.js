// // The Fortune Teller
// // Why pay a fortune teller when you can just program your fortune yourself?

// // Write a function named tellFortune that:

// // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

// // const tellFortune = function(numKids, partnerName, geoLocation, jobTile){
// //     console.log(`You will be a ${jobTile} in ${geoLocation}, and married to ${partnerName} with ${numKids}.`)
// // }
// // tellFortune(2,"Phoebe", "Central", "graphic designer")

// const tellFortune = function(numKids, partnerName, geoLocation, jobTile){
//     const output = `You will be a ${jobTile} in ${geoLocation}, and married to ${partnerName} with ${numKids} kids.`;
//     return output;
// };
// const fortune = tellFortune(2,"Phoebe", "Central", "graphic designer")
// console.log( fortune )

// // The Puppy Age Calculator
// // You know how old your dog is in human years, but what about dog years? Calculate it!
// // Write a function named calculateDogAge that:

// // takes 1 argument: your puppy's age.
// // calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// // returns a string that looks like this: "Your doggie is NN years old in dog years!"
// // Call the function three times with different sets of values.
// // Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// // Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// const calculateDogAge = function(puppysAgeInHumanYears, conversionRate){

//     const dogYears = puppysAgeInHumanYears * conversionRate;
//     return dogYears;

// };
// const humanAgeofDog = calculateDogAge(3,7);
// console.log('Human age of dog:', humanAgeofDog);

// const humanAgeOfSomeOtherDog = calculateDogAge(5,5.5)
// console.log('Human age of other dog:', humanAgeOfSomeOtherDog);

// // The Lifetime Supply Calculator
// // Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// // Write a function named calculateSupply that:

// // takes 2 arguments: age, amount per day.
// // calculates the amount consumed for rest of the life (based on a fixed maximum age).
// // returns a string that looks like this: "You will need NN to last you until the ripe old age of X"
// // Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// // Bonus: Accept floating point values for amount per day, and round the result to a round number.
// // The Temperature Converter
// // It's hot out! Let's make a converter.

// // Create a function called celsiusToFahrenheit which:

// // Takes a celsius temperature as its argument.

// // Converts it to fahrenheit and returns this value from the function

// // Call the funtion this way:

// // Create a variable called celsius and store a temperature value in it
// // Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// // Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// // Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.

// // BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.


// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareMyNumber = function(aNumber){
    return aNumber ** 2;
};
const squared = squareMyNumber(3);
console.log(`The result of squaring the number 3 is ${squared}`);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(aNumber){
    return aNumber / 2;
};
const total = halfNumber(5);
console.log(`Half of 5 is, ${total}`);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2){
    const result = 100*(num1 / num2);
    console.log(`${num1} is ${result}% of ${num2}`);
    return result;
}
percentOf(2,4);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
    const area = 3.1415926535 * (radius **2);
    return area.toFixed(2);
    
};

const circle = areaOfCircle(2);
console.log(`The area for a circle with radius ${circle}`);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

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


//WarmUps
const raindrops = function(number){
    if (number%3===0&&number%5===0&&number%7===0){
        console.log("PlingPlangPlong");
    }
    else if(number%5===0&&number%7===0){
        console.log("PlangPlong");
    }
    else if (number%3===0&&number%5===0){
        console.log("PlingPlang");
    }
    else if (number%3===0){
        console.log("Pling");
    } 
    else if (number%5===0){
        console.log("Plang");
    }
    else if (number%7===0){
        console.log("Plong");
    }
    else {
        string=number.toString();
        console.log(string);
    }
}

raindrops(18);
raindrops(15);

//Teacher warmups

// const raindrops = function(number){
//     let result = ''; // initialising
  
//     if (number % 3 === 0) {
//       result = result + "PLing";
//     }
  
//     if (number % 5 === 0){
//       result = result + "PLang";
//     }
  
//     if (number  % 7 === 0){
//       result = result + "PLong";
//     }
//     //console.log(result);
//     if (result.length === 0){
//       result = number.toString()
//     }
  
//     return result;
//   } // end of function
  
//   console.log(raindrops(18));
//   console.log(raindrops(10));
//   console.log(raindrops(15));

