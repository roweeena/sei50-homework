console.log("hi");

// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their lengths and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).
const a1 = [2, 6.4, 3];
const a2 = [3, 3.6, 2];
const a3 = [2, 2, 2];
const a4 = [2, 2, 2];
const a5 = [2, 2, 2];
const a6 = [2, 2, 2];
const a7 = [2, 2, 2];
const a8 = [2, 2, 2];


const arraySummer = function(arr1, arr2){
    let result = 0;
    
    for (const singleItem of arr1){
        result += singleItem;
    }

    for (const singleItem of arr2){
        result += singleItem;
    }
    console.log(result);
};

arraySummer(a1, a2)


const arraySummer2000 = function(...allArrs){
    let result = 0;
    
    for (const singleArr of allArrs){
            for(const singleItem of singleArr){
                result += singleItem;
            };     
    }
    
    console.log(`arrarsummer2000 = `, result);
};

arraySummer2000(a1, a2, a3, a4, a5, a6, a7, a8)