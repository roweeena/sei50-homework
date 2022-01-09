console.log("No soup for you");
// ## Text Soup
//
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// #### Hints:
// - Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at [Project Gutenberg](https://www.gutenberg.org/browse/scores/top), and paste the text into a hidden `<div>` element in your HTML file (use CSS to hide it).
// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// - Re-use the `getRandomElementFromArray()` function we wrote at the end of week 1 to pick a random word from the array.
// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.
//
//
// #### Bonus:
// - Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// - Try random colours, random font sizes, rotation, whatever floats your boat.

//2. helper functions to get random values

const getRandomValue = function(num){
  return Math.floor(Math.random() * num)
}

const getRandomElementFromArray = function(array){
  const randomIndex = getRandomValue(array.length)
  return array[randomIndex]
}

$(document).ready( function(){
  //1. get the contents of the div as a string and then split it
  const content = $('#words').html();

  const onlyWords = content.split(/[ ;:_.,?!'"()\-\n]+/)
  console.log(onlyWords)

  //3. main function
    const textSoup = function(){
      //a. get each from array and put into a new div
      const eachWord = getRandomElementFromArray(onlyWords)
      //b. create a new div
      const $wordDiv = $('<div class="word">')
      $wordDiv.text(eachWord)

      //c. set random position
      const xPos = getRandomValue(window.innerWidth)
      const yPos = getRandomValue(window.innerHeight)

      //d. set random position using css
      $wordDiv.css({
        top: yPos,
        left: xPos,
        color: `rgb(${getRandomValue(255)}, ${getRandomValue(255)}, ${getRandomValue(255)})`,
        transform: `rotate(${getRandomValue(360)}deg)`
      })

      $('body').append($wordDiv)


      //e. fade in and out, and remove so it doesn't clog the page
      $wordDiv.fadeIn(2000).fadeOut(2000, function(){
        $(this).remove()
      })
    } //textSoup()

  setInterval(textSoup, 100)
}) //documentReady()
