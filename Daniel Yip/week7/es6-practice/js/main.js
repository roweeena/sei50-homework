console.log("hello");

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 }
];


// Iterate through numbers and log each number to the console

// const iterateLog = arr => arr.forEach(num, console.log(num));

const iterateLog = arr => {
  arr.forEach(num => {
    console.log(num);
  });
};

iterateLog(numbers)


// Iterate through numbers and multiply each one of them by 5

// const iterateMultiply = arr => {
//   times5 = arr.map(num => {
//     return num * 5
//   })
//   console.log(times5);
// }
const iterateMultiply = arr => arr.map(num => num * 5)
console.log(iterateMultiply(numbers));


// Iterate through numbers and reduce it by adding them together

const iterateReduce = arr => arr.reduce((acc, num) => acc + num)
console.log(iterateReduce(numbers));

// Get an array of all of the people in people that have the username "E"
const findE = arr => arr.filter(person => person.username === 'E')

// const findE = function(arr){
//   return arr.filter(function(person){
//     console.log(person.username);
//     return person.username === 'E'
//   })
// }

console.log(findE(people));

// Find the first object in people that has the id of 3

// Find the first person who has an age of less than 50
// Get an array of all of the people with an age of over 60
// Remove all of the people with an age less than 40