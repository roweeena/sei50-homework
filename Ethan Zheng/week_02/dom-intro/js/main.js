console.log("DOM JS Loaded!")

//Functions review!

//Functions in JS are 'first class'
    //They live in variables, i.e. they are "values"/data


const x = 1;
const sayHello = function () {
    console.log("%cHello from sayHello()", 'color:green');
    return "GOODBYE";
}


//CALLBACK FUNCTIONS -------------------------------------------------------------
// Write a new function that will run another function for us; we will give it the function to run for us as an argument, and it will run it "nicely"

const runNicely = function (functionToRunNicely) {

    console.log("Hello! I am runNicely(), and I am about to run the function you have given me. I hope that is to your liking!");

    functionToRunNicely();

    console.log("It was a real pleasure to run your function for you. Goodbye from runNicely().")
}

runNicely(sayHello);

runNicely( function() {console.log('anonymous!')}); //inline function




const myButton = document.querySelector('button#eventExample');

myButton.addEventListener('click', function() {
    console.log('YOU FOOL AHAHAHAHAHAHA', Math.random());
});

myButton.addEventListener('mouseover', function() {
    console.log('do it. click me. you wouldnt', Math.random());
});


let count = 0;

setTimeout (function () {
    console.log('do it. click me. you wouldnt', Math.random());
}, 10000)

//Animations

const billImg = document.querySelector('#bill');

billImg.style.top = '0px';

setInterval( function() {
    //billImg.width += 1;
    const currentTopOffset = parseInt (billImg.style.top);
    const newTopOffset = currentTopOffset + 1;
    billImg.style.top = newTopOffset + 'px';
},5); 





//DOM ACCESS -----------------------------------------------------------------

//grab tags from the page via JS and manipulate them

const firstPara = document.getElementById("intro");                 //Obtains the DOM node itself

const firstParaText = document.getElementById("intro").innerText;   //Obtains the text assosciated with the id. Use this to edit text

const firstParaHTML = document.getElementById("intro").innerHTML;   // Obtains the html script assosciated with the id. Use this to edit html

const allParagraphs = document.getElementsByTagName("p");           //Returns an array of all the elements associated with the tag <p>



const loopPrint = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }

}

loopPrint (allParagraphs);



//HTML5 DOM Access

document.querySelector('#intro');       //Returns the first node that matches the associated tag/class/id  given

document.querySelectorAll(".special");  //Returns the all node that matches the associated tag/class/id given as an array


let introStyle = document.querySelector('#intro').style; //returns the style node associated with intro. Use this to dynamically change styles of html elements

introStyle.color = "black";

let imgSrc = document.querySelector("img").src; //returns a string value of the img's url. Use this to change an image

//Creating DOM Nodes

//Create a new "detached" tag
const newP = document.createElement('p');

//Add new content
newP.className = "pew-pew"
newP.innerHTML= "<strong>This is a new paragraph</strong>";

//Style new content
newP.style.color = "lightblue";
newP.style.border = '2px dashed red';

//Add element to body
document.body.appendChild(newP); //adds to the end of parent tag


const newImgTag = document.createElement('img');
newImgTag.src = 'https://placebear.com/200/300';
newImgTag.alt = 'A couple of bears';
newImgTag.style.border = '2px dashed pink';

const newLinkTag = document.createElement('a');
newLinkTag.href = 'http://www.placebear.com';

newLinkTag.appendChild(newImgTag);
firstPara.appendChild(newLinkTag);







