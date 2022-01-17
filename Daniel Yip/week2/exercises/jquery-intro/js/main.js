console.log("yes");

// Get the paragraph with the id of intro
const $introPara = $('#intro')

console.log('$introPara', $introPara);


//Set some CSS
// - first one thing at a time
$introPara.css('background-color', 'white');

//-and now several properties at once, using an object as the argument
$introPara.css ({
    fontSize: '18pt',
    fontFamily: 'Comic Sans MS'
});

// Select and modify on the same line
// $('p').css('background-color', 'hotpink').fadeOut(5000);

//Chaining multiple methods to the same query result
// $('p')
//     .css('background-color', 'hotpink')
//     .fadeOut(5000);

//This only gives you the HTML contents of the first match
// $('p').html();//GETTER

// //This works
// $('p').html('CHANGE ALL P TAGS')//SETTER

// Make a new imgae and append it to the first H1 tag

const $img = $("<img>");


//APPEND

// $img.attr({
//     src: 'http://www.placekitten.com/200/200',
//     alt: 'adorable kitten'
// });

// $('h1').append($img);

//APPEND TO
$img.attr({
    src: 'http://www.placekitten.com/200/200',
    alt: 'adorable kitten'
})
.appendTo('h1')