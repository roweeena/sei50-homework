// import * as dat from 'dat.gui';

// const gui = new dat.GUI();
console.log(dat.GUI)
// # Text Soup 2: The Widgeting

// Using the solution for the original text soup, and the [dat.gui](https://davidwalsh.name/dat-gui) Javascript library, add GUI controller elements to the Text Soup page to allow real-time control of the following paramaters from within the browser:

// - fade in time (i.e. a range from 1 to 5000 milliseconds)
// - fade out time
// - font size

// To get started, look at the examples on the package page linked to above (but note the hint at the bottom of this file about the easier style of defining your controlled variables using an object).

// ### BONUS:
// - add a controller to change the add word interval (consider [.add](https://github.com/dataarts/dat.gui/blob/master/API.md#GUI+add) and [.onFinishChange](https://github.com/dataarts/dat.gui/blob/master/API.md#Controller+onFinishChangehttps://github.com/dataarts/dat.gui/blob/master/API.md#Controller+onFinishChange))
// - add a controller to change the text colour using the colour controller ([.addColor](https://github.com/dataarts/dat.gui/blob/master/API.md#GUI+addColorhttps://github.com/dataarts/dat.gui/blob/master/API.md#GUI+addColor))
// - add a text field controller, and use the word(s) from the text field in between every other random word that is added
// - add a button controller which clears all words off the screen when pressed
// ### HINTS:
// - To make sure you have the up-to-date Text Soup warmup solution in your fork of the homework repo, and to copy it to a new folder to work on, run these commands in iTerm:
// ```
// cd ~/sei/homework

// git pull

// # copy the previous solution to where ever you keep your warmups
// # make sure these paths are correct for you

// cp -r ~/sei/homework/warmups/week_03/day01_text_soup/ ~/sei/homework/your_name/textsoup2  

// # Add dat.gui to the js folder within this warmup
// curl https://raw.githubusercontent.com/dataarts/dat.gui/master/build/dat.gui.js >js/dat.gui.js

// atom .
// ```
// Now you have a copy of the Text Soup warmup in a new folder in your projects folder. We're making this copy so you don't work directly on my warmup solution code in the homework repo, which would cause a merge conflict next time you commit. Remember to link to this new `js/dat.gui.js` file with a `<script>` tag in your `index.html`.

// **IMPORTANT**: Don't use the constructor-style example in the dat.gui help page I linked to. It will be simpler to just use an object to store your controller variables, like so:
// ```js
// const controllers = {
//   fadeInSpeed: 100,
//   // etc..
// };

// const gui = new dat.GUI();
// gui.add(controllers, 'fadeInSpeed', // etc...
// ```
console.log('hello')

$(function(){

    const gui = new dat.GUI();

    // 
    const controls = {
        fadeIn: 2000,
        fadeOut: 2000,
        fontSize: 30,

        wordTimerInterval: 100,
        addWord:"",
        color:#FFF
        // refresh: ()=>{
            // $('.word').remove();
        // }
    }

    gui.add(controls, "fadeIn", 0, 5000);
    gui.add(controls, "fadeOut", 0, 5000);
    gui.add(controls, "fontSize", 0, 5000);
    gui.addColor(controls, "color") // colour picker
    // gui.add(controls, "addWord");
    // gui.add(controls, "refresh");


    const $hiddenText = $('#hidden-text').html();

    console.log($hiddenText);

    const wordArray = $hiddenText.split(' ');

    const randomWord = function(arr){

        const random = Math.floor(Math.random()* arr.length);

        return arr[random]
    };

    const randomInt = function(max){
        return Math.floor(Math.random() * max)
    };
    
    
    setInterval(function(){
        const $newDiv = $('<div class="words">');
        $newDiv.html(randomWord(wordArray));
        $newDiv.css({
        position: 'absolute',
        fontSize:`${controls.fontSize}px`,
        top: randomInt(window.innerHeight) - parseInt($newDiv.css('height')) + 'px',
        left: randomInt(window.innerWidth) - parseInt($newDiv.css('width')) + 'px',
        color: `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`,
        transform: `rotate(${randomInt(360)}deg)`
        
    })
    $('body').append($newDiv);
    }, 100)

    

});