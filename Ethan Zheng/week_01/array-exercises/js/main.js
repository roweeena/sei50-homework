console.log('array and function exercises loaded');
//This includes the simon says warm up

//declare functions

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

const maxOfThreeNumbers = function (num1, num2, num3) {
    return Math.max(num1, num2, num3);   
}

const vowelCheck = function (letter) {
    const reference = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return reference.includes(letter);
}

const sumArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

const multiplyArray = function (array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}


//BONUS

const reverseString = function (string) {
    const backwardsString = [];
    for (let i = 0; i < string.length; i++) {
        backwardsString[string.length - 1 - i] = string[i];
    }
    return backwardsString.join('');

}

const findLongestWord = function (array) {
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    return maxLength;
}

const filterLongWords = function (array, minLength) {
    const longerWords = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > minLength) {
            longerWords.push(array[i]);
        }
    }
    return longerWords;
}

//WARMUP - Simon Says
//# Warmup - Simon Says
//Create a function that takes an input and returns Simon's response as follows:
//Simon answers 'Sure.' if you ask him a question.
//He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//He says 'Fine. Be that way!' if you address him without actually saying anything.
//He answers 'Whatever.' to anything else.

const simonSays = function (greeting) {
    if (greeting.endsWith('?') === true) {
        console.log("Sure.");
    } else if (greeting === '') {
        console.log("Fine. Be that way!");
    } else if (greeting === greeting.toUpperCase()) {
        console.log("Woah, chill out!");
    }  else {
        console.log("Whatever");
    }
}


