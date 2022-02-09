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
console.log('Week 7!');

// const reverse = function(arr){
//   let reverseArr = [];
//
//   arr.forEach( a => {
//     //console.log('element:', `${a}`)
//     reverseArr.unshift(a) //takes the last elements and puts it at the front
//   })
//   return reverseArr
// }
//
// console.log(reverse( [1, 2, 3, 4] )); //=> [ 4, 3, 2, 1 ]

// const flatten = function(arr){
//   let flatArr = [];
//
//   arr.forEach(a =>{
//     console.log(`element: ${a}`)
//
//     if (Array.isArray(a)){ //returns true or false if the argument passed is an Array
//       //concatenate the 2 arrays
//       flatArr = flatArr.concat(a)
//       console.log(flatArr)
//     } else {
//       //if not an array
//       flatArr.push(a)
//     }
//   })
//   return flatArr
// }
//
// console.log(flatten( ["Hello", ["World", 42] ] ))// => [ "Hello", "World", 42 ]


//BONUS!!

const flattenBonus = function(arr, flatArr = []){ //default parameter value: can call the function with 1 parameter and it won't error out
  //MAGIC solution 1 - ES6
  //let flatArr = []
  // return arr.flat(Infinity); //this flattens the array no matter the deep the level/nesting is

  // solution 2 - recursion (don't stress!  you aren't expected to understand this straight away!! )
  console.log("----function is called")
  console.log("arr:", arr);
  console.log("this is a flat arr:", flatArr);

  arr.forEach(a =>{
    console.log(`element: ${a}`);
    if (Array.isArray(a)){
      flattenBonus(a, flatArr) //call itself to recursively test if the element is an arry
    } else {
      flatArr.push(a)
      console.log("flattened Array:", flatArr);
    }
  })
  return flatArr;
}

console.log(flattenBonus( ["Hello", [[["World"], 42]]] ))
