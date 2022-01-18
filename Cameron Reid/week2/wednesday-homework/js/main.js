const cat = document.querySelector("#cat");
cat.style.left = "0px"; 
let partyHappened = false;
const middleOfPage = window.innerWidth / 2;

const walkLeft = function(){
    cat.style.transform = "scaleX(-1)";  //flip image to face left

    const walkLeftID = setInterval(function() {
        
        const currentOffsetInt = parseInt(cat.style.left);
        cat.style.left = currentOffsetInt - 10 + "px";

        if(currentOffsetInt < 0){
            clearInterval(walkLeftID);
            walkRight();
        }
    }, 50);
};

const walkRight = function(){
    cat.style.transform = "scaleX(1)";  //flip image to face left

    const walkRightID = setInterval(function() {
        
        const currentOffsetInt = parseInt(cat.style.left);
        cat.style.left = currentOffsetInt + 10 + "px";

        if(currentOffsetInt >= window.innerWidth - cat.clientWidth ){
            clearInterval(walkRightID);
            walkLeft();
        }
    }, 50);
}

walkRight();

//SUPER CLEAN AND REFINED CODE VVVVVVVVVVVVVVVVVVV

// This variable is like a flag that we toggle between 1 and -1
// to indicate the direction of travel... we multiply it by
// our step value on line 48 below,
// and it also happens to work for the CSS scaleX() transform
let walkDirection = 1;

setInterval( function(){

  const currentOffsetInt = parseInt(cat.style.left) + (walkDirection * 10);
  cat.style.left = currentOffsetInt  + 'px';

  // When should we stop walking to the right?
  // if( currentOffsetInt >= window.innerWidth-cat.clientWidth ){
  //   cat.style.transform = 'scaleX(-1)';
  //   walkOffset = -10;
  // } else if( currentOffsetInt <= 0 ){  // we've hit the left edge
  //   cat.style.transform = 'scaleX(1)';
  //   walkOffset = 10;
  // }

  if(
    currentOffsetInt > window.innerWidth-cat.clientWidth
    || currentOffsetInt < 0
  ){
    // Because of the choice of values for walkDirection,
    // we do *the same thing* regardless of which edge we have
    // hit - just flip the variable from positive to negative
    // or vice versa. This is shorter code.... but is it harder
    // to understand than the longer but more explicit if-else
    // version above?
    walkDirection *= -1;
    cat.style.transform = `scaleX(${ walkDirection })`;
  }

}, 40 ); // end of setInterval