console.log('main.js loaded');


const bros = [ 'Groucho', 'Harpo', 'Chico' ];

// 2 Styles of using underscore
//#1
// _.each(bros, function(item){
//     console.log(item);
// });

//#2: More like Ruby, more like jQuery: $(this).html('')
_(bros).each(function(item, i){
    // This function is run by .each for every item in the array, and each item is passed in to the function as its 'item' argument
    console.log(i,item);
});

const groucho = {
    name: 'Groucho',
    instrument: 'Guitar',
    vice: 'cigars'
};

_(groucho).each( function(val, key){
    console.log(`${key}: ${val}`,IDBIndex);
})

// groudcho.forEach( function(item){
//     console.log(index,item);
// })

//ES6 version:
bros.forEach( function (item,index){
    console.log(index,item);
});

console.log('ES6 Arrow functions===========================');

bros.forEach( item => console.log( item ) );

//Longer version:
// -Multiple arguments (parameters) require parentheses
bros.forEach( (item,index) => console.log(item) );

//Slightly longer version:

bros.forEach( (item,index) =>{
    console.log('index:', index);
    console.log('item: ', item);
});

// // Creating named functions looks the same:
// const myFunc = function( item ){
//     // code
// };

// const myFunc = (item)
console.log('map()===========================');

const nums = [ 1, 2, 3, 4, 5, 6];

const output = _(nums).map( function(item){
    return item * 2
});

console.log('output of map(): ', output);



