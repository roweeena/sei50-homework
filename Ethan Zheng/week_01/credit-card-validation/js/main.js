console.log("Credit Card Validation");

//conditions for valid number
//16 digits, no more, no less
//At least two or more unique numbers
//Sum of all digits must be greater than 16
//Final Digit must be even


//BUGS - FIXED- Non-number characters are allowed
    //fixing this made a new bug where non-numeric characters are replaced by NaN

let checkUniqueIntegers = false;

const findSum = function (array) {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum = arraySum + array[i];
    }
}


const validateCreditCard = function (cardNo) {
    //remove non-number characters
    const noHyphenCard = cardNo.replaceAll(/[^0-9]/g, "");   //causes a bug where non-numeric characters are not removed, but replaced with NaN

    //convert string into array
    const cardArrray = noHyphenCard.split('').map(Number);
    console.log(cardArrray); //debug
    //check array.length === 16
    if (cardArrray.length !== 16) {
        return false;
    }

    //loop through the array, checking if any integer doesn't match the first
        //if there isn't a matching integer, break
    for (let i = 1; i < cardArrray.length; i ++) {
        if (cardArray[i] !== cardArrray[0]) {
            checkUniqueIntegers = true;
            break;
        }
    }
    //if (array.sumOf() <16) return false, else return true
    if (findSum(cardArray) < 16 || checkUniqueIntegers === false || cardArray[15] % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

validateCreditCard("1234-5678-9123-4567")
validateCreditCard("1234-5678-9123-456b")
validateCreditCard("1234-5678-9123-456712")

