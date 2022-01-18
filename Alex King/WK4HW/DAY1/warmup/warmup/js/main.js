// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

// ```
// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"
// ```


let allergies = [
  { allergy: "eggs", value: 1 },
  { allergy: "peanuts", value: 2 },
  { allergy: "shellfish", value: 4 },
  { allergy: "strawberries", value: 8 },
  { allergy: "tometoes", value: 16 },
  { allergy: "chocolate", value: 32 },
  { allergy: "pollen", value: 64 },
  { allergy: "cats", value: 128 },
]

// goes down value until num = an allergy value. the left over is stored into a new value and process repeats.

// function whatAllergy(num) {
//   const numValue = num
//   for (let i = 0; i < allergies.length; i++) {
//     for (let j = numValue; j > 0; j--) {
//       console.log(j)
//       // num = num - j;
//       if (j === allergies[i].value) {
//         console.log(`${allergies[i].value}: "${allergies[i].allergy}"`)
//         // console.log(num)
//         numValue - j;
//       }

//     }

//   }


// }

const allergyTest = function (num) {
  const scorecard = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  }

  const allergen = [];

  const scores = Object.keys(scorecard).map(Number) // optional: chain .map(number) to conert the values to numbers

  console.log(scores)

  if (num === 0) {
    return `no allergies !`
  } else {
    //loop through scores and check in num > score => subtract num from score
    for (let i = scores.length - 1; i >= 0; i--) {
      console.log(scores[i]);
      let score = scores[i];
      if (num >= score) {
        console.log('num', score)
        console.log('score', score)
        allergen.push(scorecard[score])
        num -= score
      }
    }
  }
  return `here is the list of things you're allergic to to ${allergen.join(', ')}`
}
console.log(allergyTest(34))















