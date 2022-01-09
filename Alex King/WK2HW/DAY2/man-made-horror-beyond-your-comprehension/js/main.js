
const garf = document.querySelector('.garf');
// changing color only works with an svg file!
// garf.style.fill = #d7e074;

//adjust sound volume 
document.getElementById('ding').volume = 0.25
document.getElementById('bgm').volume =0.15

// console.log($("#cat"))
// $("#cat").css('border',"1px solid crimson")

$("#cat").hover( function(){
    $("body").css({
        'background-image':'url("/Users/calicoalex/GA/homework/Alex King/WK2HW/DAY2/man-made-horror-beyond-your-comprehension/propagandaGarf.png")',
        'background-size': 'cover'})
}, function(){
    $("body").css({'background': 'black'},100)

})  

let xPos=0;
let speedX = 3;

let yPos=0;
let speedY = 3;

let zPos = 200;
let zSpeed = 3;



new Audio(ding);

const moveGarf = setInterval( function(){
    xPos+=speedX;
    garf.style.left = xPos+"px";
    yPos+=speedY;
    garf.style.top = yPos +"px";
    // zPos+=zSpeed;
    // garf.style.width = zPos +"px";

    
    let garfColor = function(){
        let hexColor = "#" + Math.random().toString(16).slice(2,8); // googled this ... 16 for hexidecimal 0-9 abcd...
        // console.log(hexColor)
        garf.style.fill = hexColor;
    }  
    
    // const widthNumb = parseInt(garf.style.width);
    // if (widthNumb >= 250){
    //     zSpeed = -zSpeed;
    //     // zSpeed/0.25s
    //     // console.log('shrink')
    //     garfColor();
    //     document.getElementById('ding').play();
    // } else if (widthNumb < 50){
    //     zSpeed = -zSpeed;
    //     // console.log('text')
    //     // speed = speed +0.25;
    //     garfColor();
    //     document.getElementById('ding').play() 
    // } // closing z-axis (front-back)

    // need 2 if's because only one speed is changing to maintain "random" movement
    if(xPos + garf.clientWidth >=window.innerWidth ||  xPos <= 0){ // x-axis
        speedX = -speedX;
        garfColor();
        document.getElementById('ding').play()
    } // clost x-pos
    if(yPos + garf.clientHeight >= window.innerHeight || yPos <=0){ // y-axis
        speedY = -speedY;
        garfColor();
        document.getElementById('ding').play()
    } // clost y-pos

},2000/144) //closing moveGarf


// let reverseCat = 1
// const cattyLeft = setInterval( function(){
//     xPos += speedX; 
//     garf.style.left = xPos + "px";

//     if(xPos + garf.clientWidth>=window.innerWidth || xPos <= 0)
//         {
//         speedX = -speedX;
//         reverseCat = -reverseCat;
//         garf.style.transform = `scaleX(${reverseCat})`;
//     }

// },1000/144)