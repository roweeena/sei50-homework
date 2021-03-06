console.log('friday');


// # Leap Year Warmup Exercise

// ## Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:


// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

const isLeapYear = function(year){
    let maybeLeapYear = false;

    if (year % 4 === 0 && year % 100 != 0){
        maybeLeapYear = true;
    }
    
    if (year % 400 === 0){
        maybeLeapYear = true
    }

    if (maybeLeapYear){
        console.log(`It is true that ${year} is a leap year`)
    } else{
        console.log(`It is false that ${year} is a leap year`)
    }

    return maybeLeapYear
}

const

// debugger
isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);

// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true


// How to structure it...
// - We want a custom function called isLeapYear