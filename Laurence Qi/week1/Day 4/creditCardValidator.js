// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

const checkConditions = (cardNum) => {
    // return (cardNum[cardNum.length - 1] % 2 === 0)
    return !(cardNum.length !== 16) && !cardNum.includes(NaN) && isDiffDigits(cardNum) && (cardNum[cardNum.length - 1] % 2 === 0) && !(cardNum.reduce((a, b) => a + b, 0) <= 16);
}

// break down all the conditionals into individual functions

const isDiffDigits = (cardNum) => {
    let prevState = true;
    for (let i = 0; i < cardNum.length - 1; i++) {
        prevState = cardNum[i] === cardNum[i + 1] && prevState;
    }

    return !prevState;
}

const isLastDigitEven = (cardNum) => {(cardNum[cardNum.length - 1] % 2 === 0)};
const isSumOfDigitsLargerThan16 = (cardNum) => {!(cardNum.reduce((a, b) => a + b, 0) <= 16)}

const creditCard = {
    cardNum: "8888-8888-8888-8878",
    // cardNum: "a923-3211-9c01-1112",
    validate: function () {
        numArr = this.cardNum.replace(/-/g, "").split("").map(element => parseInt(element)); //TODO: learn the regex for this. 
        return checkConditions(numArr);
    }
}

console.log(creditCard.validate());