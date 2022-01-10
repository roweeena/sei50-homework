// console.log(`JS loaded`, $);

/*

1. When the user moves the mouse around,


2. draw a coloursed circle at the mouse position
    
    a. get the mouse position for the latest move event
    
    b. create a div and add it to the DOM at that position
    
    c. use css to style up the div to look like a coloured circle
    

*/

let hue = 0

let prevMouseX = 0;


const drawCircle = function( xPos, yPos ){
    
    // const circleSize = Math.random() *100;
    // const circleSize = xPos * 0.25;

    

    const mouseXSpeed = xPos - prevMouseX;

    const circleSize = Math.abs(mouseXSpeed) *3;



    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    const $newDiv = $('<div class="circle">');

    $newDiv.css({
        position: 'absolute',
        top: yPos - circleSize/2 + 'px',
        left: xPos - circleSize/2 + 'px',
        width: circleSize + 'px',
        height: circleSize + 'px',
        borderRadius: '50%',
        // background: `rgb(${r}, ${g}, ${b}`,
        background: `hsla(${hue}, 100%, 50%, 20%`,

        // background: 'url("http://www.anniemation.com/clip_art/images/cat-walk.gif")',
        // backgroundSize: 'contain',
        // opacity: `${Math.random()* 100}%`      

    })

    
    $('body').append($newDiv)

    $newDiv.animate({
        top: window.innerHeight + 'px',
        left: window.innerWidth + 'px'
    }, 3000, function(){
        $(this).remove()
    });

}; //drawCircle()

let drag = false;

$(function(){
    console.log('DOM ready!')

    $(document).on('mousemove', function(ev){

        const x = ev.originalEvent.clientX;
        const y = ev.originalEvent.clientY;

        // console.log('ev', ev.originalEvent);

        if (drag === true){
            drawCircle(x, y);
        }

        prevMouseX = x

        hue += 10
       

        // console.log('mouse moved!', ev.originalEvent.clientX, ev.originalEvent.clientY);

    }) // on mousemove

    $(document).on('mousedown', function(){
        drag = true
        console.log('down');
    })
    
    $(document).on('mouseup', function(){
        drag = false
        console.log('up');
    })

}); // $(document).ready()



