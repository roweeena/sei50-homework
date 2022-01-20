console.log("JS loaded");
const scorecard = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};

let scoreArray = Object.keys(scorecard);
let allergenArray = Object.values(scorecard);
let allergen = [];
let checkAllergies = function (score) {
  if (score <= 0 || score > 255 || Number.isInteger(score) == false) {
    console.log("Wrong Number, you don't have allergies");
    return;
  }
  for (let i = scoreArray.length - 1; i >= 0; i--) {
    if (score >= scoreArray[i]) {
      score -= scoreArray[i];
      allergen.push(allergenArray[i]);
    }
  }
  console.log(`You have the following allergens: ${allergen}`);
  allergen = [];
};
checkAllergies(100);
checkAllergies(200);
checkAllergies(120);
checkAllergies(125);
checkAllergies(85);
checkAllergies(34);
checkAllergies(29);
checkAllergies(128);
checkAllergies(64);
checkAllergies(32);
checkAllergies(16);
checkAllergies(8);
checkAllergies(4);
checkAllergies(2);
checkAllergies(1);
checkAllergies(50.5);
