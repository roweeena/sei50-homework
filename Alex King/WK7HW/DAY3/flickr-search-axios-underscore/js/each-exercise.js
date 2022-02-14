// const { each } = require("jquery");


const sayHello = function(){
    console.log('Oh Hello!')
};

const runNicely = function( functionToRun ){
    console.log('Hi let me run nicely etc...')
    functionToRun();
    console.log ('It was so nice etc etc...')
}; // runNicely()

runNicely( sayHello )


const arr = ['first','second','third']

const each = function( array, callback ){
    // callback()
    // console.log(array, callback())
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i].toUpperCase();
        // console.log(currentItem.toUpperCase());
        // INSTEAD of just assuming we always print out 
        // each item from the array,
        // WE USE THE CALLBACK FUNCTION PROVIDED
        // and WE GIVE IT THE ITEM
        callback( currentItem, i )
    }

};

each(arr, function(item, index){
    // arr.forEach((a) => {
        // console.log( 'Inside callback: ', a.toUpperCase() )
    // })
    console.log(`Inside callback, item ${index}:`, item)
});

// OUTPUT:
// FIRST
// SECOND
// THIRD