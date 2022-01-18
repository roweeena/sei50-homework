console.log('Painter JS loaded', $);

//1. When the user moves the mouse around,
//2. Draw a coloured circle at the mouse position
    //2a. Get the mouse position for the latest move event
    //2b. Create a <div> and add it to the DOM at that position
    //2c. Use CSS to style up the div to look like a coloured circle


const drawCircle = function (xPos, yPos) {
    const circleSize = 100;
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    //Make a div to add to the page at the mouse position
    const $circle = $('<div class="circle"></div>');
    $circle.css({
        left: (xPos - circleSize / 2) + 'px',
        top: (yPos - circleSize / 2) + 'px',
        backgroundColor: `rbg(${r}, ${g}, ${b})`,
        width: circleSize + 'px',
        height: circleSize + 'px',
    });
    $(document.body).append($circle);
}

$(document).ready (function () {
    console.log('DOM ready');

    $(document).on('');
    $(document).on('mousemove', function(event) {

        const x = event.originalEvent.clientX;
        const y = event.originalEvent.clientY;
        drawCircle(x, y); //pass the mouse coordinates to our draw function
    })
}); //$(document).ready()