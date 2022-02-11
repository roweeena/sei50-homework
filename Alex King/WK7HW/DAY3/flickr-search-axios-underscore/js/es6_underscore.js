

// const bros = [ 'Groucho', 'Harpo', 'Chico ']

// // 2 styles of using Underscore:

// // #1:
// _.each(bros, (item) =>{
//     console.log('_.each:',item)
// })
// console.log('############')

// // #2:

// _(bros).each((item, i)=>{
//     console.log('_():',i, item)
// })
// console.log('############')

// const groucho = {
//     name: 'Groucho',
//     instument: 'Guitar',
//     vice: 'cigars'
// }

// _(groucho).each( (val, key, index) => {
//     console.log(`${key}: ${val}`, index)
// });
// console.log('############')
// //ES6 version:
// bros.forEach( (item) => console.log('ES6:',item));

// // groucho.forEach((item)=>{
// //     console.log(`error, you can't forEach an object`)
// // })

// console.log('ES6 Arrow functions')


// console.log('map() =========')

// const nums = [1,2,3,4,5,6];

// const output = _(nums).map((item) => item*2)

// console.log(output)

// const mapped = nums.map((item) => item*2)
// console.log(mapped)

// reduce() (aka 'inject' in Ruby) takes an input array,
// and "boils it down" to a single value, by repeatedly 
// applying the code you git it in your callback function 

// const sum = _(nums).reduce((runningTotal, item) => {
//     console.log('running total:', runningTotal)
//     console.log('item:', item)
//     const newTotal = runningTotal + item;
//     console.log('newTotal:', newTotal)
//     return newTotal;
// },0)

// ES6.reduce()

// const es6Sum = nums.reduce( (runningTotal,item) => 
//     runningTotal + item

// ,'')
// console.log(es6Sum)

// ActiveRecord-style Underscore methods
// - for search through data, usually an array of objects

// const brothers =[
//     {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age:44, nums:[1,2,3,5]},
//     {name: 'Harpo', instrument: 'harp', vice: 'mutism', age:42, nums:[1,2,3]},
//     {name: 'Chico', instrument: 'guitar', vice: 'infidelity', age:39, nums:[1,2,3,5]}
// ];

// Like ActiveRecord's Brother.find_by(instrument: 'guitar', age:39 )
// const guitarist = _(brothers).findWhere({instrument:'guitar', age:39});
// console.log('guitarist:', guitarist)

// ES6 equivalent: slightly different, in that it DOES NOT assume the array elements are all
// objects; so instead of passing in a "search criteria object" as an object as argument, you have to give
// a test function: the first array element which causes the function to return true is the 
// final return value of the .find() itself
// const es6Guitarist = brothers.find( (item) => {
//     return item.instrument === 'guitar'
// })
// console.log(es6Guitarist)

// const allGuitarists = _(brothers).where({instrument: 'guitar'});
// console.log(allGuitarists)

// ES6 Version: filter()
// as with .find(), it requires you to provide a test function (a.k.a "preducate function")
// const es6AllGuitarists = brothers.filter((bro)=> bro.instrument==='guitar')
// console.log(es6AllGuitarists)

// How do I just get a t/f answer as to whether any element in the array
// passes some test?
// const areThereAnyHarpists = brothers.some(bro => bro.instrument = 'harp')
// console.log(areThereAnyHarpists)

// const isEveryoneAbove30 = brothers.every(bro => bro.age >30)
// console.log(isEveryoneAbove30)