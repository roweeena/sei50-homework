console.log('hello')
// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their lengths and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).

const arr1 = [2, 6.4, 3];
const arr2 = [3, 3.6, 2];
const arr3 = [1.25, 7.70, 1.05];

let arrSum = 0

// function addArr(array1,array2){
//     // console.log(array[1])
//     for(let i = 0; i<array1.length;i++){
//         let num = array1[i]
//         arrSum+=array1[i] 
//     }
//     // for(let i = 0; i<array2.length;i++){
//     //     arrSum+=array2[i] 
//     // }
//     array2.forEach( num =>{
//         arrSum+=num
//     })
//     console.log(arrSum)
// }

// addArr(arr1,arr2)

function addArr(...arrInput){ // can this be done with one loop?
    for(let i = 0; i<arrInput.length;i++){
        for (let j = 0;j<arrInput[i].length;j++){
            arrSum+=(arrInput[i][j])
        }
    } console.log(arrSum)
} 
addArr(arr1,arr2,arr3)




