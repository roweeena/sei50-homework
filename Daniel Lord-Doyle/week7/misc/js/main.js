console.log('Main JS Loaded')

const bros = ['Groucho','Bingo','Bongo']

// underscore version

_(bros).each(function(bro){
    console.log(bro)
})

// ES6 version

bros.forEach(function (bro) {
    console.log(bro)
})

// object

const groucho = {
    name: 'Groucho',
    instrument: 'Guitar',
    vice: 'cigars'
}

// underscore

_(groucho).each(function(val, key) {
    console.log('key: ', key)
    console.log('val: ', val)
})

bros.forEach(function(item,index){
    console.log(index, item)
})

// es6 arrow
console.log('es6 arrow')
bros.forEach( item => console.log (item) )

console.log('es6 arrow multiple function calls')
bros.forEach( (item, i) => console.log (i, item) )

// slightly longer version
bros.forEach((item, index)=> {
    console.log('item', item)
    console.log('index', index)
})

// with arrows you get implicit return unless you have curly brackets / accolades / llaves / french brackets

//named functions look the same

const myFunc = function(item) {
    //code
}

const myFunc1 = item => {
    //none
}

const myFunc2 = () => {
    // no arguments requires empty parentheses
}

// map
// underscore

console.log('=========map===============')

// map transforms an input array of values, and turns it in to an output array of values according to what your callback function returns from each iteration (it is a loop)

const nums = [1,2,3,4,5,6];

const output = _(nums).map( function(number){
    return number*2
})

console.log(output)

const es6MapOutput = nums.map(item=> item*2);
console.log(es6MapOutput)

const uppercaseBros = bros.map ( b => b.toUpperCase() )
console.log(uppercaseBros)

console.log('============reduce=============')

const sum = _(nums).reduce( function (runningTotal, item) {
    console.log('running total', runningTotal)
    console.log('item', item)
    const newTotal = runningTotal + item;
    return newTotal
} )

console.log('reduce sum', sum)

// reduce in es6

const es6sum = nums.reduce( (x,y) => x+y )

console.log(es6sum)

// ActiveRecord-style Underscore methods - usually arrays of objects

const brothers = [
    { name: 'Groucho', instrument: 'guitar', vice: 'cigars',     age: 44, nums: [1,2,3,4,5], },
    { name: 'Harpo',   instrument: 'harp',   vice: 'mutism',     age: 42, nums: [1,2,3], },
    { name: 'Chico',   instrument: 'guitar', vice: 'infidelity', age: 39, nums: [1,2,3,4,5] },
];


// like AR's .find_by(instrument: 'guitar', age: 39)

const guitarist = _(brothers).findWhere( {instrument: 'guitar'} );
console.log('guitarist', guitarist);

// es6

const es6guitarist = brothers.find(function(item){
    return item.instrument === 'guitar;'
})

console.log(es6guitarist)

// like ARs where (find all matching rows)

const allGuitarists = _(brothers).where({instrument:'guitar'});
console.log('allGuitarists',allGuitarists)

// es6 version: filter()

const es6AllGuitarists = brothers.filter(bro => bro.instrument === 'guitar');
console.log('es6AllGuitarists', es6AllGuitarists);

// how to just get a true/false answer as to whether ANY element in the array passes some test?

const areThereAnyHarpists = brothers.some(bro => bro.instrument === 'harp')
console.log(areThereAnyHarpists)

const isEveryoneAbove30 = brothers.every( bro => bro.age > 30 )
console.log(isEveryoneAbove30)

console.log('main.js loaded')