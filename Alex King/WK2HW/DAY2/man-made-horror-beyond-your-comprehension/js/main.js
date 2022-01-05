
const garf = document.querySelector('.garf');


// garf.style.fill = #d7e074;

let xPos=0;
let speedX = 4;

let yPos=0;
let speedY = 4;

const moveGarf = setInterval( function(){
    xPos+=speedX;
    garf.style.left = xPos+"px";
    yPos+=speedY;
    garf.style.top = yPos +"px";
    

    let garfColor = function(){
        let hexColor = "#" + Math.random().toString(16).slice(2,8); // googled this ... 16 for hexidecimal 0-9 abcd...
        // console.log(hexColor)
        garf.style.fill = hexColor;
    }    

    // need 2 if's because only one speed is changing to maintain "random" movement
    if(xPos + garf.clientWidth>=window.innerWidth ||  xPos <= 0){ // x-axis
        speedX = -speedX;
        garfColor();
    }
    if(yPos + garf.clientHeight >= window.innerHeight || yPos <=0){ // y-axis
        speedY = -speedY;
        garfColor();
    }

},1000/60) //closing moveGarf

// const cattyLeft = setInterval( function(){
//     xPos += speedX; 
//     garf.style.left = xPos + "px";


//     if(xPos + garf.clientWidth>=window.innerWidth || xPos <= 0 && garf.style.transform !== "scaleX(-1)"){
//         speedX = -speedX;
//         garf.style.transform = "scaleX(-1)";

//     } else if (xPos + garf.clientWidth>=window.innerWidth || xPos <= 0 && garf.style.transform == "scaleX(-1)"){
//         speedX = -speedX;
//         garf.style.transform = "scaleX(1)";
//     }

// },1000/60)