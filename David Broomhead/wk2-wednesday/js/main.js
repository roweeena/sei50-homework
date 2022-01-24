console.log("cat homework")

// Exercises: Animation
// The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
  
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
//  </body>
// </html>

//     Create a new Javascript file and link to it with a script tag at the bottom.

//     Create a variable to store a reference to the img.



const cat = document.querySelector('img'); //find img element in HTML (only 1 image)
const catPixelWidth = cat.clientWidth;  //?? does not work even though works in firefox console.
let offset = 10; //number of pixels cat will move by each iteration

cat.style.position = 'absolute';  //modify css position of cat image to absolute
cat.style.left = '10px'; //modify css position of cat image 10px to right of left margin

catWalk = function(){
    const position = parseInt(cat.style.left); //takes integer 10 from left position
    if(position >= (window.innerWidth - 296)){   //296 is width of image as cat.clientWidth not working
    //if the position of the cat is greater than the right side of the screen (discounting by width of cat image)    
        offset = -offset; //inverse negativity of the offset value
        cat.style.transform =  'scaleX(-1)'; //flip cat on x axis
    }else if(position < 5){ //if the position of the cat is less than 5 pixels from left of screen
        offset = -offset; //inverse negativity of the offset value
        cat.style.transform =  'scaleX(1)'; //flip cat image on x axis
    }
    const newPosition = position + offset; //change the position of the cat by the offset amount, resulting in new position 10 pixels to left or right
    cat.style.left = newPosition + "px";
    //add "px" string to position so it can be understood by css property
}

window.setInterval(catWalk,50) //runs catWalk function every 50ms





//     Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.


//     Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

//     Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

//     Bonus #4: Pretty much go nuts or whatever.
