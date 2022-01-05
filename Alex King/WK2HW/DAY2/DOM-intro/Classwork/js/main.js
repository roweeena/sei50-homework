console.log('Dom intro');

// Functions review

// Functions in JS are first class



// const x = 1;
// const f = function(){ console.log(`Hello!`); };


// const sayHello = function(){
//     console.log('%cHello from sayHello()', 'color: orange');
// };



// Write a new function that will run another 
// function for us; we will give it the function to run for
// us as an argument, and it will run it "nicely"
// const runNicely = function(functionToRunNicely){

//     // debugger;

//     console.log('%cHello! I am runNicely(), and I am about to run the function you have given me. I hope that is to your liking!', 'color:plum')

//     // run the provided function
//     functionToRunNicely(); // this is running the input as a function. ie if the input is a function, it outputs as the function

//     console.log('It was a real pleasure to run your function for you. Goodbye from runNicely().');

// }; // runNicely()

// runNicely(function(){console.log(`testtest`); (console.log('test2test2'))}) // finding function in function to output given function. can have multiple outputs

//end of callbacks preview 

const firstPara = document.getElementById('intro')

const allParagraphs = document.getElementsByTagName('p')
firstPara.style.color = "orange";
// firstPara.innerHTML += '<h1>test test</h1>';
// firstPara.style.fontSize = "30px";

const newImgTag = document.createElement('img');
newImgTag.src = 'http://www.placebear.com/300/300';

newImgTag.style.border = '2px dashed pink'

document.body.appendChild(newImgTag)
// document.body.prepend(newImgTag)

const newLinkTag = document.createElement('a');
newLinkTag.href = "http://placebear.com"

newLinkTag.appendChild(newImgTag);

firstPara.appendChild(newLinkTag);



// const newPara = document.createElement('p');
// newPara.innerHtml = 'text text text';

// newPara.style.color="orange";
// newPara.style.fontFamily="Comic Sans";

// document.body.appendChild(newPara);



// console.log(`all paragraphs`, allParagraphs)

// for(let i = 0; i<allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]
//       console.log(i, currentPara.innerHTML)
//   }

// for(let i = 0; i<allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]
//       console.log(i, currentPara.id)
//   }

// document.querySelector('#intro')
// document.querySelector('/p/.special')
// document.querySelectorAll('p a') //a within p
// document.querySelectorAll('img','li','marquee')
// caniuse.com

// const body = document.getElementByTagName("body")[0];

// body.style.background="hotpink";
// body.style.fontFamily="Comic Sans";
// body.style.paddingTop="10px";

