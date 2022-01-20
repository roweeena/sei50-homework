console.log('DOM JS Loaded');
const x=1;
const f=function(){
    console.log('Hello!');
};
const sayHello= function(){
    console.log('%chello from sayHello()','color:green');
    return "GOODBYE"
};
//write a new function that will run ANOTHER function for us; we will give it the function to run for us as an argumentm and it will run it "nicely"

const runNicely= function(functionToRunNicely){
    debugger;
    console.log("hello i am runNicely(),and i am about to run the function you have given me, i hope that is to your likeing!")



    //run the provided function
    functionToRunNicely();

    console.log('it was a real pleasure to run the function for you, goodbye from runNicely().');
};

////end of callback functions preview

//DOM access methods:
//grab tags from the page via js and manipulate them

const firstPara=document.getElementById("intro");
document.children[0].children[1].children;
console.log('first para:',firstPara);

const allParagraphs=document.getElementsByTagName('p');
console.log('all P tags:',allParagraphs);
for(let i=0;i<allParagraphs.length;i++){
    const currentPara=allParagraphs[i];
    console.log(i,currentPara.innerHTML);
}
document.getElementsByTagName('a')
const allSpecial = document.getElementsByClassName('special');
console.log('all .special calss tags:', allSpecial);

//// Add a new image to the page

const newImgTag=document.createElement('img');
//set the essential attributes:
newImgTag.src='http://www.placebear.com/300/300';
newImgTag.alt='a cuddly huge bear';
newImgTag.style.border='2px dashed pink';
//attach the new tag to the actual DOM
document.body.appendChild(newImgTag)

firstPara.appendChild(newImgTag);

//create a link tag to wrap the image in 
const newLinkTag=document.createElement('a');
newLinkTag.href='http://www.placebear.com';

//Now append the img tag to the a tag
newLinkTag.appendChild(newImgTag);
firstPara.appendChild(newLinkTag);

const button=document.querySelector('#eventExample');
console.log(button);
button.addEventListener('click',function(){
    console.log('i was clicked');
    console.log(Math.random());
}

);