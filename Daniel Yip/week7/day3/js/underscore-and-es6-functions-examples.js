// console.log("main.js loaded");

// example data

const bros = ["Groucho", "Harpo", "Chico"];

// 2 sytles of using Underscore:

// #1
_.each(bros, function (item) {
  console.log(item);
});

// #2: more like Ruby, more like jQuery: $(this).html('')
_(bros).each(function (item, i) {
  // This function is run by .each for every item in the array, and each item is passed into the funcation as its 'item' argument
  console.log(i, item);
});

const groucho = {
  name: "Groucho",
  instrument: "Guitar",
  vice: "cigars",
};

_(groucho).each(function (val, key) {
  console.log("object item:", key, val);
});

// ES6 version:
bros.forEach(function (item) {
  console.log(item);
});

console.log("ES6 Arrow Functions ============================================");

// Simplest version:
// - no parentheses around single argument (they are optional)
// - no curly brackets around the function body
// -function body can only be a single expression
// - implicit return of the expression's value!!!!
bros.forEach((item) => console.log(item));

// Longer version:
bros.forEach((item, index) => console.log(index, item));

// Slightly longer again:
//  - curly brackets are REQUIRED for more than one statment in the function body
//  - no more implicit return; need to use "return" keyword whenever curly brackets are involved
bros.forEach((item, index) => {
  console.log("index:", index);
  console.log("item:", item);
});

// Creating named functions looks the same:

// const myFunc = function (item) {
//   // code
// }

// const myFunc = items => {

// }

console.log("map()========================================================================");

// map() trasforms an input array of values into an output array of values accoring to what yur callback functon returns from each itteration.

const nums = [1, 2, 3, 4, 5, 6];

const output = _(nums).map(item => {
  return item * 2;
})

console.log('Output of map()', output);

// Use a for loop to do .map manually
const handmadeOutput = [];
for (let i = 0; i < nums.length; i++) {
  const item = nums[i];
  const result = item *2;
  handmadeOutput.push(result)
}

console.log('handmade', handmadeOutput);

// using .map() with arrow function + implicit return

const mapArrowOutput = _(nums).map(item => item *2)
console.log('mapArrowOutput', mapArrowOutput);


// ES6 map:

const es6MapOutput = nums.map(item => item * 2);
console.log('es6MapOutput', es6MapOutput);

const uppercaseBros = bros.map(b => b.toUpperCase());
console.log('uppercaseBros', uppercaseBros);


console.log('reduce()==========================================================================');

// reduce() takes an input array and boils it down to a single value by repeatedly applying the code you give it in your callback function. As with map(), reduce() cares about the return value from your callback


const sum = _(nums).reduce(function (runningTotal, item) {
  console.log('_______________');
  console.log('runningTotal:', runningTotal);
  console.log('item:', item);
  const newTotal = runningTotal+item;
  console.log('newTotal', newTotal);
  return newTotal; //optionl second arg as starting value for 'runningTotal'
}, 100);

console.log('reduce sum:', sum);


// es6 .reduce():

const es6Sum = nums.reduce(function (runningTotal, item) {
  return runningTotal + item;
}, 5000);


console.log('es6Sum', es6Sum);

// ActiveRecord-style Underscore methods
//  - for search thorugh data, usually and array of objects (commonly seen in api results)


const brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44, nums: [1,2,3,5] },
  { name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42, nums: [1,2,3] },
  { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39, nums: [1,2,3,5] },
];

// Like ActiveRecord's Brother.find_by(instrument: 'guitar', age: 39 )

const guitarist = _(brothers).findWhere( {instrument: 'guitar', age: 39} )

console.log( guitarist );


// ES6 equivelent: slightly different, in that it does NOT assume the array elements are all objects, so instead of passing in a "search criteria object" as argument, you have to test a function: the first array element which causes the function to return true is the final return value of the .find() itself


const es6Guitarist = brothers.find(function (item) {
  return item.instrument === 'guitar';
})

// const es6Guitarist = brothers.find(item => item.instrument ==='guitar');

console.log('es6Guitarist', es6Guitarist);

// Like ActiveRecord .where: find ALL matching rows, i.e. Message.where( user_id: 3)

const allGuitarists = _(brothers).where({instrument: 'guitar'})
console.log('allGuitarists', allGuitarists);

// es6 version

const es6AllGuitarists = brothers.filter( bro => bro.instrument === 'guitar')
console.log('es6AllGuitarists', es6AllGuitarists);

const areThereAnyHarpists = brothers.some(bro => bro.instrument === 'harp')











