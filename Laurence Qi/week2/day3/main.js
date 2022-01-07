// generate cat img elements from 0 to 199, with minor differences in 
for (let i = 0; i < 200; i++) {
    const $currentCat = $('<img src="http://www.anniemation.com/clip_art/images/cat-walk.gif">');
    $currentCat.attr('id', 'cat' + i);
    $currentCat.css({
            left: i * 10 + 'px',
            top: i * 30 - 20 + 'px', //minus 20 is to get the top cat closer to the height of the frame
            position: 'absolute'
        }) //TODO: Is there a way to generate a custom property that doesn't have to affect the actual DOM node

    $('body').append($currentCat);
}

//setting the initial conditions
const screenWidth = globalThis.screen.availWidth;
const screenHeight = globalThis.screen.availHeight;
const $cat = $('img');
const isWalkingRights = new Array($cat.length).fill(true); //TODO: could you suggest a better name for this. 
const isWalkingDowns = new Array($cat.length).fill(true);
const speeds = generateSpeeds();

function generateSpeeds() {
    currentSpeeds = new Array($cat.length);

    for (let i = 0; i < $cat.length; i++) {
        currentSpeeds[i] = i + 1;
    }

    return currentSpeeds
}

// basic walking function that increments the cat 
//TODO: Should I put my functions at the top or the bottom. 
function walk($specificCat, speedRight, speedBottom) { //Speed can be positive or negative 
    const currentLeftOffset = parseInt($specificCat.css('left'));
    const newLeftOffset = currentLeftOffset + speedRight;
    $specificCat.css('left', newLeftOffset + 'px');

    const currentTopOffset = parseInt($specificCat.css('top'));
    console.log("current topoffset value", currentTopOffset);
    const newTopOffset = currentTopOffset + speedBottom;
    $specificCat.css('top', newTopOffset + 'px');
}

// produces the direction value for the code
function walkRightThenLeft() { // TODO: abstract this to do an each for the individual cats to dictate if they are individually going left or right
    // console.log(`cat.left = ${parseInt(cat1.style.left)} & availWIdth ${screenWidth}`);
    $cat.each(function(i) {
        isWalkingRights[i] ? walk($(this), speeds[i]) : walk($(this), -1 * speeds[i]);
        let xdirection;
        if (isWalkingRights[i]) {

        }


        if (parseInt($(this).css('left')) > screenWidth - 255) {
            isWalkingRights[i] = false;
        } else if (parseInt($(this).css('left')) < 0) {
            isWalkingRights[i] = true;
        }

        if (parseInt($(this).css('top')) > screenHeight - 150) {
            isWalkingDowns[i] = false;
        } else if (parseInt($(this).css('left')) < 0) {
            isWalkingDowns[i] = true;
        }
    })
}

setInterval(walkRightThenLeft, 20); // refresh rate of program.