console.log("sumz for dayz");

// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.
//
// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```
//


// const sum = function(array1, array2){
//   let result = 0;

 // loop through each array and add up each number to the result
//   for (let i = 0; i < array1.length; i++){
//     let num = array1[i];
//     result += num
//     console.log(result);
//   }
//
//   array2.forEach(num =>{
//     result += num
//     console.log(result);
//   })
//   return result
// }
//
// console.log(sum([2, 6.4, 3], [3, 3.6, 2]))

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).
const sumMultiple = function(){
  let result = 0;

  console.log(arguments) // "arguments" is an object that is accessible inside functions - contains all of the arguments passed during function call

  for (let i = 0; i < arguments.length; i++){
    const array = arguments[i];
    console.log(array)
    for ( let j = 0; j < array.length; j++){
      console.log(array[j])
      result += array[j]
      console.log(result)
    }
  }

  return result
}

console.log(sumMultiple([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2])) //40
