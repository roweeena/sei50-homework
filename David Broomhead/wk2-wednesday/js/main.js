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
const cat = document.querySelector('img');

//     Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
cat.style.position = 'absolute';
cat.style.left = '10px';

//     Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
catWalk = function(){
    let position = parseInt(cat.style.left);
    if(position > 1000){
        position = 10
    }
    const newPosition = position + 10;
    cat.style.left = newPosition + "px";
    testPosition(newPosition);
}

//     Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
window.setInterval(catWalk,50)

//     Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.


//     Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

//     Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

//     Bonus #4: Pretty much go nuts or whatever.
