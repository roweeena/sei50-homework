console.log("hello");

const $mainMeow = $('#main-meow'); 

let moveOffset = 10;
let direction = 1
let theHunt
let lapCount = 0

// STARTS THE CAT MOVING 
const startHunting = function (speed){
    theHunt = setInterval(function(){ // triggering assigning the timer ID to theHunt variable so it can be stopped

        let mainMeowPos = parseInt($mainMeow.css('left')); // declaring a variable that stores the cats left offset
        // console.log(mainMeowPos)
    
        $mainMeow.css('left',`${mainMeowPos + moveOffset}px`); // adding to the cats offset by the increment declared in the moveOffset variable
        
        if (window.innerWidth < mainMeowPos + moveOffset + parseInt($mainMeow.css('width')) // checking right edge
            || mainMeowPos + moveOffset < 0){ // checking left egde
            changeDirections();
            lapCount++;

            // console.log(lapCount)
            randomBgdColor()
            makeKittens(randomNumber(lapCount)); // makes a random amount of kittens, max number set by the lap counter
            
            if (lapCount%10 === 0){ // every 10 laps make the kittens smaller
                makeThemSmaller()
            }
        };
    
    }, speed)
}

// STOP theHunt INTERVAL
const pauseHunting = function (){
    clearInterval(theHunt)
}

// FACES THE CAT IN THE OTHER DIRECTION AND REVERSES MOVE OFFSET
const changeDirections = function(){
    moveOffset *= -1;
    direction *= -1;
    $mainMeow.css('transform', `scaleX(${direction})`);
}

// MAKES THE KITTENS SMALLER BY 1PX
const makeThemSmaller = function(){
    $('.kitten').css('width', `${parseInt($('.kitten').css('width')) - 1}px`)
}

// GENERATES AN AMOUNT OF KITTENS AND RANDOMLY PLACES THEM ON THE PAGE
const makeKittens = function(num){

    for (let i = 0; i < num; i++){
        const $newKitty = $('<img class="kitten">'); // make an image

        $newKitty.attr('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif'); // assign it a source

        $newKitty // set the css size, postiion and direction
            .css('width', '80px')
            .css('top', `${randomNumber(window.innerHeight - 80)}px`) // position is random with the max taking the 
            .css('left', `${randomNumber(window.innerWidth - 80)}px`) // window dimensions and deducting the kitten size
            .css('transform', `scaleX(${direction})`); // take the direction based on the cats direction

        $('#kitten-box').append($newKitty) // place the kitten in the box
    }
}

// GENERATES A RANDOM INTEGER UP TO A GIVEN MAX
const randomNumber = function(maxNum){
    return Math.floor(Math.random() * maxNum)
}

// CHANGES THE BODY BGD COLOR TO  A RANDOM RGB
const randomBgdColor = function(){
    $('body').css({
        background: `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
    })
}


startHunting(10)
