console.log('WK7 Warmup 1')

// ## Arrays - Flatten and Reverse
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
// - Make two functions
//   - reverse
//   - flatten
// ```js
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// ```
// You only need to make flatten work to one level deep! You should be able to flatten this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `
// ## Bonus
// Make one that flattens any array that you pass into it: ` ["Hello", [[["World"], 42]]] ` -> `[ "Hello", "World", 42 ]`


function reverseArr(inputArr){
    // output = inputArr.slice().reverse().forEach((item) => {
    //     // console.log(item)
    // });

    newArr = []
    inputArr.forEach( (a) => {
        newArr.unshift(a)
    });
    console.log(newArr)

    console.log(inputArr.reverse())

};

arr = [1, 2, 3, 4]
reverseArr(arr)


function flattenArr(inputArr){
    flatArr = []

    inputArr.forEach( (a) =>{

        if (Array.isArray(a)){
            flatArr = flatArr.concat(a);
            console.log(flatArr)

        } else {
            flatArr.push(a)
        }
    });
    return flatArr
    // console.log(inputArr.flat(Infinity));

};

arr2 = ["Hello", ["World", 42] ];
flattenArr(arr2)



function reflatten(inputArr, flatArr = []){
    // console.log(inputArr.flat(Infinity));
    inputArr.forEach( (a) =>{
        if (Array.isArray(a)){
            reflatten(a, flatArr)
        } else {
            flatArr.push(a)
            return flatArr
        }
    });
    
    console.log(flatArr) 
};

arr3 = ["Hello", [[["World"], 42]]];
reflatten(arr3);