// # Isogram Finder
//
// An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).
//
// - There must be no repeating letters anywhere in the string.
//
// - The strings are case insensitive. Different Cased letters are still counted.
//
// ```js
// isIsogram("Dermatoglyphics") // true ;
// isIsogram("isogram") //true;
// isIsogram("aba") // false;
// isIsogram("moOse") // false;
// isIsogram("isIsogram") // false;
// isIsogram("") // true;
// ```
// Write a program in your language of choice that when given a string will detect if the string is or is not an isogram. Shortest program wins.


//SOLUTION 1:

// const isIsogram = function(str){
//   str = str.toLowerCase();
//
//   //split the string and sort into individual characters
//   let array = str.split('').slice().sort()
//
//   console.log('*****', array);
//   //loop through the array to find the duplicates
//
//   for (let i = 0; i < array.length; i++){
//     console.log( array[i], array[i + 1])
//     if(array[i] === array[i + 1]){
//       return false
//     }
//   }
//   return true
// }


//SOLUTION 2:

const isIsogram = function(str){
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("moOse")); //false
