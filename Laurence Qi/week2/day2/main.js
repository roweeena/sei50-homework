const cat1 = document.querySelector('#cat-1');

cat1.style.left = '0px'; // The value set in the CSS file won't be visible to JS
let walkingRight = true;

console.log(cat1.style)
console.log("the screen width should be:", globalThis.screen.availWidth);
// console.log("the screen width should be:", document.body.clientWidth);

function walk(direction) { //direction needs to be positive or negative. 
    const moveIncrement = 10 * direction;
    const currentTopOffset = parseInt(cat1.style.left);
    const newTopOffset = currentTopOffset + moveIncrement;
    cat1.style.left = newTopOffset + 'px';
}

function walkRightThenLeft() {
    console.log(`cat.left = ${parseInt(cat1.style.left)} & availWIdth ${globalThis.screen.availWidth}`);
    console.log(`walkingRight ${walkingRight}`);
    if (walkingRight) {
        walk(1)
    } else {
        walk(-1);
    }

    if (parseInt(cat1.style.left) > globalThis.screen.availWidth - 100) {
        walkingRight = false;
    }
}


setInterval(walkRightThenLeft, 10);

// when the cat hits the right hand side of the screen then flip image and walk back