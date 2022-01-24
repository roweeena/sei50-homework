console.log("jQuery JS Loaded!")

// Get the paragraph with the id of 'intro'
const $introPara = $('#intro');
console.log('$introPara', $introPara);

// Set some CSS
// -first one property at a time
$introPara.css('background-color', 'white');

// - and now several properties at once,
// using an object as the argument
$introPara.css({
    fontSize: '18pt',
    FontFamily: 'Comic Sans MS'
});

//Select and modify on the same line
$('p').css('background-color', 'hotpink');
$('p').fadeOut(5000);
$('p').fadeIn(5000);

$('p')
    .css('background-color', 'beige')
    .fadeOut(5000)
    .fadeIn(5000);


const $img = $("<img>");
$img.attr('src', 'http://www.placekitten.com/200/200');
$img.attr('alt', 'Adorable kitty');
$('h1').append($img);