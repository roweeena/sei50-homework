// generate cat elements from 0 to 199
for (let i = 0; i < 30; i++) {
    const $currentCat = $('<img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">');
    $currentCat.attr('id', 'cat' + i);
    $currentCat.css({
        left: i * 10 + 'px',
        top: i * 30 + 'px',
        position: 'absolute'
    })

    $('body').append($currentCat);
}

const $cat = $('img');
const walkingRights = new Array($cat.length).fill(true);
const speeds = new Array($cat.length);
for (let i = 0; i < $cat.length; i++) {
    speeds[i] = i + 1;
}

console.log('The $cat object is as follows:', $cat);

console.log('the $cat length is:', $cat.length);

const screenWidth = globalThis.screen.availWidth;
const screenHeight = globalThis.screen.availHeight;

// console.log("the screen width should be:", screenWidth);

function walk($specificCat, speed) { //direction needs to be positive or negative. 
    const moveIncrement = speed;
    const currentTopOffset = parseInt($specificCat.css('left'));
    const newTopOffset = currentTopOffset + moveIncrement;
    $specificCat.css('left', newTopOffset + 'px');
}

function walkRightThenLeft() { // TODO: abstract this to do an each for the individual cats to dictate if they are individually going left or right
    // console.log(`cat.left = ${parseInt(cat1.style.left)} & availWIdth ${screenWidth}`);
    $cat.each(function(i) {
        if (walkingRights[i]) {
            walk($(this), speeds[i]);
        } else {
            walk($(this), -1 * speeds[i]);
        }


        if (parseInt($(this).css('left')) > screenWidth - 255) {
            walkingRights[i] = false;
        } else if (parseInt($(this).css('left')) < 0) {
            walkingRights[i] = true;
            console.log('changed walking right to true')
        }
    })
}

// need to perform the walkRightThenLeft on the .each property. 

setInterval(walkRightThenLeft, 20);
//create new cat

// when the cat hits the right hand side of the screen then flip image and walk back


// Populate this page with several cats. of differing sizes and varieties whenever a cat hits the wall.