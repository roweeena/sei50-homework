 const imagesInfo = [
  // {
  //   element: allImages[0],
  //   speedX: 3,
  //   speedY: -5
  // }
];

// 1. iterate all the animation elements, and set random initial values
$(".images-wrapper > img").each(function() {
    const imageObj = {
      element: this,
    }
    imagesInfo.push(imageObj);
  
    // set random position between 0 and browser edge
    $(this).css({
      "left": `${Math.round(Math.random() * (window.innerWidth - this.width))}px`,
      "top": `${Math.round(Math.random() * (window.innerHeight - 300))}px`
    })
})

// 1-1. set default speed 10
const setSpeed  = function(speedVal) {
  for(let image of imagesInfo) {
    // to get random direction
    let plusOrMinus = Math.random() < 0.5 ? 1 : -1;

    // speed will be between "-speedVal" and "speedVal"
    image.speedX = Math.round(Math.random() * speedVal) * plusOrMinus;
    image.speedY = Math.round(Math.random() * speedVal) * plusOrMinus;
  }
}
setSpeed(10);



// 2. create a function to move images
const moveImage = function(image) {
  // get current position
  let positionX = parseInt(image.element.style.left);
  let positionY = parseInt(image.element.style.top);

  // update current position
  positionX += image.speedX;
  positionY += image.speedY;

  // move the element
  $(image.element).css({
    "left": `${positionX}px`,
    "top": `${positionY}px`,
    // flip the image if speedX is positive value (when they're going right side)
    "transform": `scaleX(${Math.sign(image.speedX) * -1})`
  });
  

  // when the image touches the edge, change a direction
  if(positionX + image.element.width > window.innerWidth || positionX < 0) {
    image.speedX = -image.speedX;
  }
  if(positionY + image.element.height > window.innerHeight || positionY < 0) {
    image.speedY = -image.speedY;
  }

  console.log("Animation is running");
}


// 3. create a function for setInterval and clearInterval
let isAnimationRunning = false;
// setInterval ID to clear
let moveImagesID;

const controlAnimation = function() {
  if(!isAnimationRunning) {
    // start animation
    moveImagesID = setInterval(function() {
      for(let item of imagesInfo) {
        moveImage(item);
      }
    }, 20);

    // make it visible
    $(".images-wrapper > img").fadeTo(100, 1);

    isAnimationRunning = true;
  }else {
    // if animation is running, stop it
    clearInterval(moveImagesID);

    // make all images opacity down
    $(".images-wrapper > img").fadeTo(100, 0.6);


    isAnimationRunning = false;
    console.log("Animation stopped");
  }
}


// 4. connect to eventListener
$("#controlButton").click(function() {
  controlAnimation();
});

$("#speedRange").on("input", function() {
  setSpeed(this.value);
});

// start setInterval when js loaded
controlAnimation();