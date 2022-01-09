console.log("yes");

// Functions review!

// Functions in JS are "first class":

// they live in variables, i.e. they are "valuses"/data

const x = 1;
const f = function(){console.log('Hello!');};


const sayHello = function(){
    console.log('%cHello from sayHello()', 'color: green');
}



// Write a new function that will run ANOTHER function
// for us; we will give it the function to run for 
// us as an argument, and it till ren it "nicely"

const runNicley = function(functionToRunNicley){
    console.log('Hello! I am runNicely(), and I am about the run the function you have given me. I hope that is to you liking!');

    // run the provided function
    functionToRunNicley()

    console.log('It was a real pleasure to run your function for you. Goodbye from runNicely().');
}


const firstPara = document.getElementById('intro');
console.log(`first para`, firstPara);

const allParagraphs = document.getElementsByTagName('p');
console.log('all P tags', allParagraphs)

const allSpecial = document.getElementsByClassName('special');
console.log('all .special class tags', allSpecial);


// add a new image to the page

// First create a blank 'detached' node
const newImgTag = document.createElement('img');

//set the essential attributes

newImgTag.src = 'http://www.placebear.com/300/200';
newImgTag.alt = 'A cuddly huge bear';
newImgTag.style.border = '2px solid pink';


//Now also create a link tag to wrap the image in

const newLinkTag = document.createElement('a')
newLinkTag.href = 'http://www.placebear.com';

// Now apend the img tag to the a tag
newLinkTag.appendChild( newImgTag );

firstPara.appendChild(newLinkTag);

// Attach the new taf to the acutal DOM
// document.body.appendChild(  newImgTag );

// firstPara.appendChild(newImgTag);


// Click event handler

// 1. Select the element from the Dom and save into variable
const button = document.querySelector('#eventExample');
console.log(button);


// 2. Attach out callback fun tion to this element using .addEventListener()

button.addEventListener('click', sayHello);

const newButton = document.createElement('button');
newButton.innerText = 'new button';
document.body.appendChild(newButton);

const billImg = document.querySelector('#bill')

billImg.style.opacity = 1.0;
billImg.style.top = '100px'

// setInterval(function(){
//     // billImg.width += 1;
//     // billImg.style.opacity -= 0.001;
//     const currentTopOffset = parseInt(billImg.style.top);
//     // console.log(currentTopOffset);
//     const newTopOffset = currentTopOffset + 1
//     billImg.style.top = newTopOffset + 'px'
// }, 25);