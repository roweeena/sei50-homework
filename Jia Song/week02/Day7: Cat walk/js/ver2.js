const imagesInfo = [
  // {
  //   element: allImages[0],
  //   speedX: 3,
  //   speedY: -5
  // }
];


// 1. get all the animation elements, and set random initial values
const allImages = document.querySelectorAll(".images-wrapper > img");

for(let item of allImages) {

  // to get random direction
  let plusOrMinus = Math.random() < 0.5 ? 1 : -1;

  const imageObj = {
    element: item,
    // speed will be between -10 and 10
    speedX: Math.round(Math.random() * 10) * plusOrMinus,
    speedY: Math.round(Math.random() * 10) * plusOrMinus,
  }
  // push image's info object to "imageInfo" array
  imagesInfo.push(imageObj);

  // set random position between 0 and browser edge
  item.style.left = Math.round(Math.random() * (window.innerWidth - item.offsetWidth)) + 'px';
  item.style.top = Math.round(Math.random() * (window.innerHeight - 300)) + 'px';

}


// 2. create a function to move images
const moveImage = function(image) {
  // get current position
  let positionX = parseInt(image.element.style.left);
  let positionY = parseInt(image.element.style.top);

  // update current position
  positionX += image.speedX;
  positionY += image.speedY;

  // move the element
  image.element.style.left = `${positionX}px`;
  image.element.style.top = `${positionY}px`;

  // flip the image if speedX is positive value
  image.element.style.transform = `scaleX(${Math.sign(image.speedX) * -1})`;

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
      // for every images
      for(let item of imagesInfo) {
        // start animation
        moveImage(item);
        // make it visible
        item.element.style.opacity = 1;
      }
    }, 20);

    isAnimationRunning = true;
  }else {
    // if animation is running, stop it
    clearInterval(moveImagesID);

    // make all images opacity down
    for(let item of imagesInfo) {
      item.element.style.opacity = 0.6;
    }

    isAnimationRunning = false;
    console.log("Animation stopped");
  }
}


// 4. connect to eventListener
const controlButton = document.querySelector("#controlButton");

controlButton.addEventListener("click", function() {
  controlAnimation();
});


// start setInterval when js loaded
controlAnimation();