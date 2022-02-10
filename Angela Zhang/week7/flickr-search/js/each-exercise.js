 console.log("Welcome to AJAX");

const sayHello = function(){
    console.log('Oh Hello!');
    // no 'return' statement in JS means default return of undefined
}; // sayHello

const runNicely = function( functionToRun ){
    console.log("hi let me run nicely etc....");

    functionToRun();

    console.log("it was so nice etc....");
};

runNicely( sayHello );


runNicely( function(){

    console.log('This is an inline/anonymous function');
});

// //each loop
// arr.forEach( function(item){
//     console.log( item );
// });

// // What is Ruby's equivalent of an anonymous function?
// arr.each do |item|
//     puts item

// end

//Write your implementation of each method:

const each = function( array, callback ){
    //you do this
    for( let i = 0; i < array.length; i++){
        const currentItem = array[i];
        callback( currentItem,i );

    } // for loop

}; // each()

const arr = [ 'first','second','third' ];

each(arr, function(item, index ){
    console.log(`Inside callback:, item ${index}`, item);
})




//Output:
//Inside callback: first
//Inside callback: second
//Inside callback: third