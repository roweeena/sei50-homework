console.log('sum of arrays');
/*
function sumOfArray (array1, array2) {
    const sumArray = array1.concat(array2);
    let total = 0;
    sumArray.forEach(function (elem) {
        total += elem;
        console.log(total);
    })
    return total;
}
*/
const example1 = [4, 10, 23.5, 1];
const example2 = [6, 101, 0.4, 5];
const example3 = [1, 2, 3, 4, 5];


//In JS, there exists an 'arguments' object that conatins all the arguments passed through
//a function call. It acts like an array.
function variadicSum () {
    let bigArray = [];
    for (let i = 0; i < arguments.length; i++) {
        pushArray(bigArray, arguments[i]);
    }
    let total = 0;
    bigArray.forEach(function (elem) {
        total += elem;
        console.log(total);
    })
    return total;
}

console.log("Variadic Function test ------------");
console.log(variadicSum (example1, example2, example3));

//function to push elements of an array into another array
function pushArray (destination, source) {
    for (let i = 0; i < source.length; i++) {
        destination.push(source[i]);
        console.log(destination);
    }
}

function variadicSum2 () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {

        for (let j = 0; j < arguments[i].length; j++)
        result += arguments[i][j];
    }
    return result;
}

console.log("Variadic Function 2 test ------------");
console.log(variadicSum2 (example1, example2, example3));