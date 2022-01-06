const $cat1 = $('#cat-1');

$cat1.css('left', '0px'); // The value set in the CSS file won't be visible to JS
let walkingRight = true;
const screenWidth = globalThis.screen.availWidth;
const screenHeight = globalThis.screen.availHeight;

console.log("the screen width should be:", screenWidth);
// console.log("the screen width should be:", document.body.clientWidth);

function walk(direction) { //direction needs to be positive or negative. 
    const moveIncrement = 10 * direction;
    const currentTopOffset = parseInt($cat1.css('left'));
    const newTopOffset = currentTopOffset + moveIncrement;
    $cat1.css('left', newTopOffset + 'px');
}

function walkRightThenLeft() {
    // console.log(`cat.left = ${parseInt(cat1.style.left)} & availWIdth ${screenWidth}`);
    if (walkingRight) {
        walk(1);
    } else {
        walk(-1);
    }

    if (parseInt($cat1.css('left')) > screenWidth - 100) {
        walkingRight = false;
    } else if (parseInt($cat1.css('left')) < 0) {
        walkingRight = true;
        console.log('changed walkingright to true')
    }
}

setInterval(walkRightThenLeft, 10);
console.log($());

//create new cat
// const catArr = [];

// catArr.push($('<img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">'))
// catArr[0].attr('id')

// when the cat hits the right hand side of the screen then flip image and walk back


// Populate this page with several cats. of differing sizes and varieties whenever a cat hits the wall.