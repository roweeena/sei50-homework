console.log(`Leap Year Calculator
╔════════════════════╗
║ December ░░░░ 2021 ║
╟──┬──┬──┬──┬──┬──┬──╢
║░░│░░│░░│01│02│03│04║
╟──┼──┼──┼──┼──┼──┼──╢
║05│06│07│08│09│10│11║
╟──┼──┼──┼──┼──╔══╗──╢
║12│13│14│15│16║17║18║
╟──┼──┼──┼──┼──╚══╝──╢
║19│20│21│22│23│24│25║
╟──┼──┼──┼──┼──┼──┼──╢
║26│27│28│29│30│31│░░║
╚══╧══╧══╧══╧══╧══╧══╝`)

// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
// How to structure it...
// - We want a custom function called isLeapYear

const isLeapYear = function (yearInput){
    if(yearInput%4===0 && yearInput%100!==0 && yearInput%4===0){
        console.log(`${yearInput} is a leap year`)
    } else if (yearInput%1000==0){
        console.log(`${yearInput} is a leap year`);
    } else {
        console.log(`${yearInput} is not a leap year...`)
    }


}
isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2100);
isLeapYear(2012);
isLeapYear(2200);
isLeapYear(45678);
isLeapYear(600);

