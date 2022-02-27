// console.log("HELLO")

// # Isogram Finder

// An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).

// - There must be no repeating letters anywhere in the string.

// - The strings are case insensitive. Different Cased letters are still counted.

// ```js
// isIsogram("Dermatoglyphics") // true 
// isIsogram("isogram") // true
// isIsogram("aba") //false
// isIsogram("moOse") // false, 
// isIsogram("isIsogram") // false 
// isIsogram("") // true
// ```
// Write a program that when given a string will detect if the string is or is not an isogram. Shortest program wins.

isIsogram = (input) => {
// console.log(input.split())
let str = input.toLowerCase().split('')
console.log(str)
    // for (let i = 0; i < str.length; i++){
    //     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
    //         return false
    //     }
    // }
    // return true
    // console.log( !/(.).*\1/.test(str))
    // console.log(!(/([a-zA-Z]).*?\1/).test(str) )

// RO'S SOLUTION!!!!!!!!!!!

//  return new Set(input.toLowerCase().size) === str.length

}

console.log(isIsogram("Dermatoglyphics")) // true 
console.log(isIsogram("isogram")) // true
console.log(isIsogram("aba")) //false
console.log(isIsogram("moOse")) // false, 
console.log(isIsogram("isIsogram")) // false 
console.log(isIsogram("")) // true