console.log('Paintr JS loaded',$(this));
/*
1. when the user moves the mouse around,

2. draw a coloured circle at the mouse position
    2a. get the mouse position for the latest move event.
    2b. create a <div>and add it to the DOM at that position
    2c. use CSS to style up the div to look like a coloured circle

*/
let hue=0;//we increment this inside drawCircle()
let prevMouseX=0;//remember the last mouse pos, to calculate speed
const drawCircle=function(xPos,yPos){
    const mouseXSpeed=xPos-prevMouseX;
    const r=Math.random()*255;
    const g=Math.random()*255;
    const b=Math.random()*255;

    //const circleSize=Math.random()*150;
    // const circleSize=xPos/2;
     const circleSize=Math.abs(mouseXSpeed)*2;
    const $circle=$('<div class="circle"></div>');
    $circle.css({
        top:yPos-(circleSize/2),
        left:xPos-(circleSize/2),
        width: circleSize,
        height: circleSize,
        // backgroundColor:`rgb(${r},${g},${b})`
        backgroundColor:`hsl(${hue},100%,50%,30%)`
    });
    $(document.body).append($circle);


    $circle.animate({
        top:window.innerHeight +'px',
        // left:window.innerWidth +'px'
    },3000,function(){
        $(this).remove();
    });

    hue+=10;
    // prevMouseX=xPos;//remember the pos for the next time
};//draw circle ends

$(document).on('mousemove',function(ev){
   
    const x=ev.originalEvent.clientX;
    const y=ev.originalEvent.clientY;
    console.log("ev:",ev.originalEvent)
    if(ev.originalEvent.shiftKey===true){
        drawCircle(x,y);
    }
    prevMouseX=x;
});