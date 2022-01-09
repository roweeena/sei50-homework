console.log("Leap Year Loaded");

//function that checks if a year is a leap year

const isLeapYear = function (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('1997');
console.log(isLeapYear(1997));
console.log('1996');
console.log(isLeapYear(1996));
console.log('1900');
console.log(isLeapYear(1900));
console.log('2000');
console.log(isLeapYear(2000));





