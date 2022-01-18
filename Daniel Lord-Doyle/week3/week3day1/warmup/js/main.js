// ## Text Soup

// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.

// #### Hints:

// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.

storyArray = $("div").html().split(" ")
console.log(storyArray)

// - Re-use the `getRandomElementFromArray()` function we wrote at the end of week 1 to pick a random word from the array.

const getRandomNumber = (max) => {
return ( Math.floor ( Math.random() * max ) )
}

const getRandNumInArray = (array) => {
return ( Math.floor ( Math.random() * array.length ) )
}
const getRandElementInArray = (array) => {
let randomIndex = getRandomNumber(array.length);
console.log(array[randomIndex])
return array[randomIndex];
}

const wordToInput = getRandElementInArray(storyArray)

const randomHeight = Math.floor(Math.random() * (innerHeight - 200))
const randomWidth = Math.floor(Math.random() * (innerWidth - 300))
const randomSize = Math.floor(Math.random() * 100 + 40)

// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM. 

$(document).on('click', function() {
    const $newWord = $(document.createElement('div')).attr('id', 'randomWord').html(wordToInput)
    $("body").append($newWord)
    $('div#randomWord').css ({
        fontSize: randomSize,
        color: 'red',
        top: randomHeight,
        left: randomWidth,
})
})

// #### Bonus:
// - Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.

$(document).ready(function () {
    $('div#randomWord').fadeIn(1000).removeClass('hidden');
});

// - Try random colours, random font sizes, rotation, whatever floats your boat.



