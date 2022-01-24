console.log('cat0 walking homework');

// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called cat0Walk() that moves the cat0 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat0 should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat0 reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat0 reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat0 reaches the middle of the screen, replace the img with an image of a cat0 dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.

const cat0 = document.querySelector('.catA')
const cat1 = document.querySelector('.catB')
const cat2 = document.querySelector('.catC')
const cat3 = document.querySelector('.catD')
const maxWidth = window.innerWidth - 296;
const maxHeight = window.innerHeight - 296;
cat0.style.left = '0px';
cat1.style.top = '0px';
cat2.style.top = '0px';
cat3.style.left = '0px';

// const walkLeft = function(){
  
// cat0.style.transform = 'scaleX(-1)';

//   const walkLeftID = setInterval(function() {
//     const currentOffset = parseInt(cat0.style.left);
//       cat0.style.left = currentOffset - 10 + 'px';
//       if (currentOffset < 0){
//         clearInterval(walkLeftID);
//         walkRight();
//         }
//     }, 40)
// };

// const walkRight = function(){

//   cat0.style.transform = 'scaleX(1)';

//   const walkRightID = setInterval(function() {

//     const currentOffset = parseInt(cat0.style.left);

//     cat0.style.left = currentOffset + 10 + 'px';
//     if (currentOffset >= maxWidth){
//       clearInterval(walkRightID);
//       walkLeft();
//     }
//   }, 70)
// };
// walkRight()


const walkTop = function(){
  
  cat1.style.transform = 'rotate(90deg) scaleX(-1)';
  
  
    const walkTopID = setInterval(function() {
      const currentOffset = parseInt(cat1.style.top);
        cat1.style.top = currentOffset - 10 + 'px';
        if (currentOffset < 0){
          clearInterval(walkTopID);
          walkBottom();
          }
      }, 40)
  };
  
  const walkBottom = function(){
   
    cat1.style.transform = 'rotate(90deg) scaleX(1)';

    const walkBottomID = setInterval(function() {
  
      const currentOffset = parseInt(cat1.style.top);
  
      cat1.style.top = currentOffset + 10 + 'px';
      if (currentOffset >= maxHeight){
        clearInterval(walkBottomID);
        walkTop();
      }
    }, 40)
  };
  walkTop();

  
const walkTop2 = function(){
  
  cat2.style.transform = 'rotate(-90deg) scaleX(1)';
  
  
    const walkTopID2 = setInterval(function() {
      const currentOffset = parseInt(cat2.style.top);
        cat2.style.top = currentOffset - 10 + 'px';
        if (currentOffset < 0){
          clearInterval(walkTopID2);
          walkBottom2();
          }
      }, 40)
  };
  
  const walkBottom2 = function(){
   
    cat2.style.transform = 'rotate(-90deg) scaleX(-1)';

    const walkBottomID2 = setInterval(function() {
  
      const currentOffset = parseInt(cat2.style.top);
  
      cat2.style.top = currentOffset + 10 + 'px';
      if (currentOffset >= maxHeight){
        clearInterval(walkBottomID2);
        walkTop2();
      }
    }, 140)
  };
  walkTop2();




let walkDirection0 = 1;

setInterval( function(){

  const currentOffsetInt = parseInt(cat0.style.left) + (walkDirection0 * 10);
  cat0.style.left = currentOffsetInt  + 'px';

  if(
    currentOffsetInt > window.innerWidth-cat0.clientWidth
    || currentOffsetInt < 0
  ){
    walkDirection0 *= -1;
    cat0.style.transform = `scaleX(${ walkDirection0 })`;
  }

}, 40 );


let walkDirection3 = 1;

setInterval( function(){

  const currentOffsetInt = parseInt(cat3.style.left) + (walkDirection3 * 20);
  cat3.style.left = currentOffsetInt  + 'px';

  if(
    currentOffsetInt > window.innerWidth-cat3.clientWidth
    || currentOffsetInt < 0
  ){
    walkDirection3 *= -1;
    cat3.style.transform = `scaleX(${ walkDirection3 })`;
  }

}, 40 );





