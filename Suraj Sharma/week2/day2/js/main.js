//console.log('hello, world');
// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
//cat walk function start
function catWalk() {
    // 10px speed from left to right
  img.style.left = (parseInt(img.style.left) + 10) + 'px';
}// calling the function
window.setInterval(catWalk, 50);




function catWalk() {
    let currentLeft = parseInt(img.style.left);
    // again 10px to move left to right same speed
    img.style.left = (currentLeft + 10) + 'px';
    // if statement to check width of the window 
    if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
      }
    }
    window.setInterval(catWalk, 5000);
//     //Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever
//     let walkForwards = true;
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);
  // if  to check walkforward and current left is greter  than pixels
  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  // if walkforward is not and current left is less than 0 
  if (!walkForwards && (currentLeft < 0)) {
    walkForwards = true;
  }
  // head is goes right and bum back backward
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 5000);