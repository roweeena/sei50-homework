console.log( " D A N C I N G C A T")

const catWalking = document.querySelector(".catCat");


catWalking.style.left = "0px";
catWalking.style.top = "150px";

const walkLeft = function(){
    catWalking.style.transform = 'scaleX(-1)';

    const walkLeftId = setInterval (function(){
        const currentOffsetInt = parseInt(catWalking.style.left);
        catWalking.style.left = currentOffsetInt - 10 + 'px';

        if(currentOffsetInt < 0){
            clearInterval(walkLeftId);
         
        //stop the cat in the middle     
        }if(currentOffsetInt <= (window.innerWidth/2 - 200)){
            clearInterval(walkLeftId);
             changeImage1()   // change the cat image to something else when the cat stops in the middle 
        }
    }, 50); 
};

// let newCat = document.querySelector('img')

const walkRight = function(){
    catWalking.style.transform = 'scaleX(1)';
    
    const walkRightId = setInterval (function(){
        const currentOffsetInt = parseInt(catWalking.style.left);
        catWalking.style.left = currentOffsetInt + 10 + 'px'
    
        if(currentOffsetInt >= window.innerWidth - 300){
            clearInterval(walkRightId);
            walkLeft()
            }
    
    }, 50);//end of setInterval callback 
};//walkRight



let newCat = document.querySelector('img')

// image change funtion for line 22
const changeImage1 = function(){
    newCat.src = "https://64.media.tumblr.com/5d933dbea55d887f28bb467c67bcb356/tumblr_mojk1em3ew1r4xjo2o1_500.gifv";

    const imageEnlarge = setInterval(function(){
        newCat.width += 10;
        const currentTopOffset = parseInt(newCat.style.left);
        newCat.style.left = currentTopOffset + 10 + 'px';

        if(currentTopOffset >= window.innerWidth + 100){
            clearInterval(imageEnlarge);
        }
        newImage();
        return;
        
    },50);    
    
}
const newImage = function(){
    const imageNew = document.createElement('img')
    imageNew.src = "https://64.media.tumblr.com/5d933dbea55d887f28bb467c67bcb356/tumblr_mojk1em3ew1r4xjo2o1_500.gifv";
    document.body.appendChild(imageNew);   
    
    const newCat = setInterval(function(){
        imageNew.width += 10;
        const currentTopOffset = parseInt(imageNew.style.right);
        imageNew.style.right = currentTopOffset + 10 + 'px';
        

        if(currentTopOffset >= window.innerWidth + 100){
            clearInterval(newCat);
        }
        
        return;
        
    },50);
    
}

// const changeImage2 = function(){
//     newCat.src = "https://media0.giphy.com/media/Jmlv4CUO1qWlGWJf3J/giphy.gif?cid=ecf05e4798l83pxn3yg3i7vfthst4i8th4utbcxeuvk569kc&rid=giphy.gif&ct=g";
//     return;
// }


walkRight();




