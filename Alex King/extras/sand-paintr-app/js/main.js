console.log('Paintr JS loaded', $(this));

// https://codepen.io/Gthibaud/pen/rmqEzM?editors=0110 <== inspiration
/*
1. When the user moves the mouse around,
2. Draw a coloured circle at the mouse position
    2a. get the mouse position for the latest move event
    2b. create a <div> and add it to the DOM at that position
*/

// TO DO: 
// make squares stay at bottom,
// don't let squares inside eachother 
let currentPos = 0;

let board = [
    [0, 0, 0, 0, "sand", 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];


function sandFall(){
    let particlePos = board[currentPos].indexOf("sand");
    board[currentPos][particlePos] = 0;
    currentPos++;
    board[currentPos][particlePos] = "sand";
    // console.log(board[1][4]);
    // console.log(board[2][4]);
    // console.log(board[3][4]);
    console.log(board); // why does this one give me the final result?? 
    setTimeout(function(){
        if (currentPos < 3){
            sandFall();
        };
    },1000);
};


// sandFall()


// let sandTimer = setInterval (function sandFall(){
//     // for (let i = 0; i<board.length; i++){
//     //     console.log(board[i].indexOf("sand"))
//     // }
//     // board
//     let whereParticle = board[currentPos].indexOf("sand")
//     board[currentPos][whereParticle] = 0;
//     currentPos++ 
//     board[currentPos][whereParticle] = "sand"
//     console.log(board)
//     if (currentPos === 5){
//         clearInterval(sandTimer)
//     }
// }, 1000);
// let timer = setInterval (1000)

// let hue = 0; // increment this incide drawCircle

// let prevMouseX = 0;
// let zoom = 0;

// const drawCircle = function (xPos, yPos) {
//     // const circleSize = xPos/3;
//     const circleSize = 1000
    


//     const mouseXSpeed = xPos - prevMouseX;

//     // const circleSize = Math.abs(mouseXSpeed)*5;

//     const r = Math.random() * 255;
//     const g = Math.random() * 255;
//     const b = Math.random() * 255;

//     // HSL - Hue, Saturaioon, Lightness
//     // hsl(360, 100%, )


//     // Make a div to add to the page at pos
//     const $circle = $('<div class="circle">')
//     $circle.css({
//         top: (yPos - circleSize / 2) + 'px',
//         left: (xPos - circleSize / 2) + 'px',
//         // backgroundColor: `rgba(${r}, ${g}, ${b}, 0.829)`,
//         // backgroundColor:`hsla(${hue}, 100%, 50%,20%)`,
//         backgroundColor: yellow,
//         width: circleSize + 'px',
//         height: circleSize + 'px',

//     })
//     $(document.body).append($circle);

//     $circle.animate({
//         top: window.innerHeight - 'px',
//         // left:window.innerWidth +'px',
//     },20000, function(){
//         //runs when animation is complete
//         $(this).remove();
//     }) 
//     hue++;
   

// }// drawCricle

// $(function () {
//     console.log('DOM ready!');
    
//     $(document).on('click', function (ev) {
        
//         // console.log('mouse moved!', ev.originalEvent.clientX, ev.originalEvent.clientY)
//         const x = ev.originalEvent.clientX;
//         const y = ev.originalEvent.clientY;
        
//         // console.log('ev', ev.originalEvent)
        
        
//         if (ev.originalEvent.shiftKey) {
//             drawCircle(x, y);
//         }
//         prevMouseX=x // remember xPos for next cirlce
        
//     }); // on mousemove
    
// });