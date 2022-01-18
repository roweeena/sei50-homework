console.log('JS Loaded')

// 1. when user moves mouse around:
// 1. draw a coloured circle at the mouse position
// 1a. get the mouse position for the latest move event
// 1b. create a div and add it to the DOM at that mouse position
// 1c. use css to style up the div to look like a coloured circle
// 

let hue = 0; // we will increment inside function
let prevMouseX = 0;

const drawCircle = function (xPos, yPos) {

    const mouseXspeed = xPos - prevMouseX;
    console.log('x speed: ', mouseXspeed)

    // const circleSize = Math.random() * 50;
    // const circleSize = xPos * 0.5
    // const tparency = Math.random() * 25;

    // abs converts negative to positive
    const circleSize = Math.abs(mouseXspeed)*1.3;

    const $circle = $('<div class="circle">');
    $(document.body).append( $circle )

    $circle.css({
        top: yPos - (circleSize/2) + 'px',
        left: xPos - (circleSize/2) + 'px',
        backgroundColor: `hsla(${hue}, 100%, 50%, 25%)`,
        width: circleSize + 'px',
        height: circleSize + 'px',
    })

    $circle.animate({

        top: window.innerHeight + 'px',
        left: window.innerWidth + 'px'

    }, 2000, function() {
        $(this).remove()
    })

    hue++

    prevMouseX = xPos;

}; //draw circle ends


$(document).on('mousemove', function( ev ) {
    // console.log('mouse moved!', ev.originalEvent.clientX, ev.originalEvent.clientY)
    const x = ev.originalEvent.clientX;
    const y = ev.originalEvent.clientY;

    if (ev.originalEvent.shiftKey === true) {
        drawCircle (x, y);
    }


    
})