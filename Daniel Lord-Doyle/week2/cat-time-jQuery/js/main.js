$catImage = $('#walkingcat')

$catImage.css({
    bottom: 0,
})

let walkingright = 0;
let walkingup = 0;

catWalkX = (speed) => {

    // debugger

    const intervalID = setInterval( () => {
        const currentLeftOffset = parseInt($catImage.css('left'));
        //walking right. I only want you to walk right IF 
        if (walkingright === 0) {
            const newLeftOffset = currentLeftOffset + speed;
            $catImage.css('left', newLeftOffset);

        } else {
            const newLeftOffset = currentLeftOffset - speed;
            $catImage.css('left', newLeftOffset);
        }
        if (parseInt($catImage.css('left')) <= 0) {
            clearInterval (intervalID)
            $catImage.css('transform', 'rotate(90deg)')
            walkingright -= 1
            catWalkY(speed)
        } else if (parseInt($catImage.css('left')) >= (window.innerWidth - $catImage.prop('width'))) {
            clearInterval (intervalID)
            $catImage.css('transform', 'rotate(270deg)')
            walkingright += 1
            catWalkY(speed)
        }
    }, 50);
    
}

catWalkY = (speed) => {

    // debugger

    const intervalID = setInterval( () => {
        const prevBottomX = parseInt($catImage.css('bottom'));
        //walking up. I only want you to walk right IF 
        if (walkingup === 0) {
            const newBottomX = prevBottomX + speed;
            $catImage.css('bottom', newBottomX);

        } else {
            const newBottomX = prevBottomX - speed;
            $catImage.css('bottom', newBottomX);
        }
        if (parseInt($catImage.css('bottom')) <= 0) {
            clearInterval (intervalID)
            $catImage.css('transform', 'none')
            walkingup -= 1
            catWalkX(speed)

        } else if (parseInt($catImage.css('bottom')) >= (window.innerHeight - $catImage.prop('height'))) {
            clearInterval (intervalID)
            $catImage.css('transform', 'rotate(180deg)')
            walkingup += 1
            catWalkX(speed)
        }
    }, 50);
    
}

catWalkX(30)


// un refactored code

// catwalkUp = (speed) => {

//     const intervalID = setInterval( () => {
//         const prevBottomX = parseInt($catImage.css('bottom'));
//         const newBottomX = prevBottomX + speed;
//         $catImage.css('bottom', newBottomX);

//         if (newBottomX >= window.innerHeight - $catImage.prop('height')) {
//             clearInterval (intervalID)
//             $catImage.css('transform', 'rotate(180deg)')
//             catWalkX(speed)
//         }

//     }, 50);
// }

// catwalkDown = (speed) => {

//     const intervalID = setInterval( () => {
//         const prevBottomX = parseInt($catImage.css('bottom'));
//         const newBottomX = prevBottomX - speed;
//         $catImage.css('bottom', newBottomX);

//         if (newBottomX <= 0) {
//             clearInterval (intervalID)
//             $catImage.css('transform', 'none')
//             catwalkRight(speed)
//         }

//     }, 50);
// }


// catwalkRight = (speed) => {    

//     const intervalID = setInterval( () => {
//         const currentLeftOffset = parseInt($catImage.css('left'));
//         const newLeftOffset = currentLeftOffset + speed;
//         $catImage.css('left', newLeftOffset);

//         if (newLeftOffset >= (window.innerWidth - $catImage.prop('width'))) {
//             clearInterval (intervalID)
//             $catImage.css('transform', 'rotate(270deg)')
//             catwalkUp(speed)
//         }

//     }, 50);
// }

// catwalkLeft = (speed) => {    

//     const intervalID = setInterval( () => {
//         const currentLeftOffset = parseInt($catImage.css('left'));
//         const newLeftOffset = currentLeftOffset - speed;
//         $catImage.css('left', newLeftOffset);

//         if (newLeftOffset <= 0) {
//             clearInterval (intervalID)
//             $catImage.css('transform', 'rotate(90deg)')
//             catwalkDown(speed)
//         }

//     }, 50);
// }