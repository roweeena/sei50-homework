for (let i = 0; i < 100; i++) {
    const $currentCat = $('<img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">');
    $currentCat.attr('id', 'cat' + i);
    $currentCat.css('left', i * 20 + 'px')
    $currentCat.css('top', i * 20 + 'px')
    $currentCat.css('position', 'absolute')

    $('body').append($currentCat);
}

const $cat = $('img');
console.log($cat);

let walkingRight = true;
const screenWidth = globalThis.screen.availWidth;
const screenHeight = globalThis.screen.availHeight;

console.log("the screen width should be:", screenWidth);
// console.log("the screen width should be:", document.body.clientWidth);

function walk($specificCat, direction) { //direction needs to be positive or negative. 
    const moveIncrement = 10 * direction;
    const currentTopOffset = parseInt($specificCat.css('left'));
    const newTopOffset = currentTopOffset + moveIncrement;
    $specificCat.css('left', newTopOffset + 'px');
}

function walkRightThenLeft() { // TODO: abstract this to do an each for the individual cats to dictate if they are individually going left or right
    // console.log(`cat.left = ${parseInt(cat1.style.left)} & availWIdth ${screenWidth}`);
    if (walkingRight) {
        $cat.each(function() {
            walk($(this), 1);
        });
    } else {
        $cat.each(function() {
            walk($(this), -1);
        });
    }

    if (parseInt($cat.css('left')) > screenWidth - 100) {
        walkingRight = false;
    } else if (parseInt($cat.css('left')) < 0) {
        walkingRight = true;
        console.log('changed walking right to true')
    }
}

// setInterval($cat.each(function() {}))
// need to perform the walkRightThenLeft on the .each property. 

setInterval(walkRightThenLeft, 10);
//create new cat




// when the cat hits the right hand side of the screen then flip image and walk back


// Populate this page with several cats. of differing sizes and varieties whenever a cat hits the wall.