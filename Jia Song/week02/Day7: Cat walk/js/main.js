// animation 1: dancing cat
const dancingCat = document.querySelector(".dancingCat");

dancingCat.style.left = "100px"
let goingRight = true;

const moveDancingCat = setInterval(function(){
  const currentPosition = parseInt(dancingCat.style.left);

  // if current position is bigger than window width, change direction to left
  if(currentPosition > window.innerWidth - dancingCat.width) {
    goingRight = false;
  }

  // if current position is smaller than 0, change direction to right
  if(currentPosition < 0) {
    goingRight = true;
  }

  // move the dancing cat
  if(goingRight) {
    dancingCat.style.left = `${currentPosition+20}px`;
  }else {
    dancingCat.style.left = `${currentPosition-20}px`;
  }
}, 50);


// animation 2: cat with trombone
const tromboneCat = document.querySelector(".tromboneCat");

tromboneCat.style.left = "1100px"
let goingRight2 = true;

const moveTromboneCat = setInterval(function() {
  const currentPosition = parseInt(tromboneCat.style.left);

  if(currentPosition > window.innerWidth - tromboneCat.width) {
    goingRight2 = false;
  }

  if(currentPosition < 0) {
    goingRight2 = true;
  }

  // move the trombone cat 
  if(goingRight2) {
    tromboneCat.style.left = `${currentPosition+10}px`;
    tromboneCat.classList.add("flip");
  }else {
    tromboneCat.style.left = `${currentPosition-10}px`;
    tromboneCat.classList.remove("flip");
  }
}, 50);


// animation 3: baby riding cat
const ridingCat = document.querySelector(".ridingCat");

ridingCat.style.left = "0px";
ridingCat.style.top = "100px";
let goingRight3 = true;

const moveRidingCat = setInterval(function() {
  const currentPositionX = parseInt(ridingCat.style.left);
  const currentPositionY = parseInt(ridingCat.style.top);

  if(currentPositionX > window.innerWidth - ridingCat.width) {
    goingRight3 = false;
  }

  if(currentPositionX < 0) {
    goingRight3 = true;
  }

  if(goingRight3) {
    ridingCat.style.left = `${currentPositionX+10}px`;
    ridingCat.style.top = `${currentPositionY+5}px`;
    ridingCat.classList.add("flip");
  }else {
    ridingCat.style.left = `${currentPositionX-10}px`;
    ridingCat.style.top = `${currentPositionY-5}px`;

    ridingCat.classList.remove("flip");
  }
}, 50);


// animation 4: js logo falling
const js_logo = document.querySelector(".js_logo");
js_logo.style.bottom = 0;

const moveJSLogo = setInterval(function() {
  const currentPosition = parseInt(js_logo.style.bottom);

  js_logo.style.bottom = `${currentPosition + 5}px`;

  if(currentPosition > window.innerHeight) {
    js_logo.style.bottom = "-100px"
  }
}, 50);


// animation 5: ruby logo falling
const ruby_logo = document.querySelector(".ruby_logo");
ruby_logo.style.top = 0;

const moveRubyLogo = setInterval(function() {
  const currentPosition = parseInt(ruby_logo.style.top);

  ruby_logo.style.top = `${currentPosition + 3}px`;

  if(currentPosition > window.innerHeight + 100) {
    ruby_logo.style.top = "-100px"
  }
}, 50);


// animation 6: CSS logo falling
const css_logo = document.querySelector(".css_logo");
css_logo.style.top = 0;

const moveCssLogo = setInterval(function() {
  const currentPosition = parseInt(css_logo.style.top);

  css_logo.style.top = `${currentPosition + 10}px`;

  if(currentPosition > window.innerHeight + 100) {
    css_logo.style.top = "-150px"
  }
}, 50);


