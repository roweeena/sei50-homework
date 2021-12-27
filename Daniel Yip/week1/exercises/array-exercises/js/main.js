console.log(`JS :)`);

// # Exercises: Arrays

// ## Your top choices

// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

const pizzaToppings = ['Pepperoni', 'Prawn', 'Potato', 'BBQ Chicken', 'Garlic' ]

// - For each choice, log to the screen a string like: "My #1 choice is blue."

for (let i = 0; i < pizzaToppings.length; i++){
    console.log(`my #${i + 1} choice is ${pizzaToppings[i]}`)
}

// - **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.

// ___

// ## Extra Challenges to Achieve Array Mastery

const rainbowColors = [];// Starting with an empty array called `rainbowColors`:

rainbowColors.push('orange'); // * Add "orange" to the end of the array
rainbowColors.unshift('red'); // * Add "red" to the start of the array
rainbowColors.push('yellow'); // * Add "yellow" to the end
rainbowColors.push('green', 'blue', 'indigo', 'violet');    // * Add "green", "blue", "indigo", and "violet" to the end of the array 
                                                    //   * Try and do this using _one_ method
console.log(rainbowColors.length); // * Log out the length of the array
console.log(rainbowColors[1]); // * Log out the second item
console.log(rainbowColors[rainbowColors.length -1]); // * Log out the last item (make this flexible/dynamic!)
console.log(rainbowColors.indexOf('blue')); // * Log out the index of the string "blue"

// * Bonus: Find out the difference between `.slice` and `.splice`
//   * Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)

const twoColors = rainbowColors.slice(1,3);

//   * Starting with this array `var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates *destructively* using _slice_ or _splice_ (whichever one is appropriate)

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(3, 2)

nums.splice(4, 1)

// * Bonus: Work with arrays of arrays

//   * Starting with this array `var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];`
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

//   * Access "inner array first item" and print it out"
console.log(arrOfArrs[0][0]);

//   * Print "third" by using a dynamic index
console.log(arrOfArrs[1][arrOfArrs[1].length-1])

//   * Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
for (i = 0; i < arrOfArrs[1].length; i++){
    console.log(arrOfArrs[1][i])
}