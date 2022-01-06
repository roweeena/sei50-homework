const cat = document.querySelector("#cat");
cat.style.left = "0px"; 

let intervalID; //creates a global id variable for the interval timer

//PACING LEFT TO RIGHT

// const catWalkRight = function(){
//     const currentLeftOffset = parseInt(cat.style.left); 
//     const newLeftOffset = currentLeftOffset + 10; 
//     cat.style.left = newLeftOffset + 'px';
//     if (window.innerWidth - cat.width < newLeftOffset){ // checks if the left offset is greater than the window width - the width of the cat image. If u 
//                                                         //dont take away the cat image width the cat will go off the screen
//         clearInterval(intervalID)                          //if this is true then the setInterval stops
//         cat.classList.add("flip");                      // the flip class is added to the cat
//         intervalID = setInterval(catWalkLeft, 50);      // a new function is called to do the oposite of the first
//     }
// };

// const catWalkLeft = function(){
//     const currentLeftOffset = parseInt(cat.style.left);
//     const newLeftOffset = currentLeftOffset - 10;       
//     cat.style.left = newLeftOffset + 'px';
//     if (newLeftOffset === 0){
//         clearInterval(intervalID)
//         cat.classList.remove("flip");
//         intervalID = setInterval(catWalkRight, 50)

//     }
// };


// forever walking left to right

// const catWalkRight = function(){
//     let currentLeftOffset = parseInt(cat.style.left); 
//     const newLeftOffset = currentLeftOffset + 10; 
//     cat.style.left = newLeftOffset + 'px';
//     if (window.innerWidth < newLeftOffset){ // checks if the left offset is greater than the window width - the width of the cat image. If u 
//                                                         //dont take away the cat image width the cat will go off the screen
//         clearInterval(intervalID) 
//         console.log(cat.width);                         //if this is true then the setInterval stops
//         cat.style.left = "0px";                         //FIGURE OUT HOW 
//         intervalID = setInterval(catWalkRight, 50);      // a new function is called to do the oposite of the first
//     }
// };


//Forwards and back?

// const catWalkRight = function(){
//     const currentLeftOffset = parseInt(cat.style.left); 
//     const newLeftOffset = currentLeftOffset + 10; 
//     cat.style.left = newLeftOffset + 'px';
//     if (window.innerWidth - cat.width < newLeftOffset){ // checks if the left offset is greater than the window width - the width of the cat image. If u 
//                                                         //dont take away the cat image width the cat will go off the screen
//         clearInterval(intervalID)                          //if this is true then the setInterval stops
//         // cat.classList.add("flip");                      // the flip class is added to the cat
//         intervalID = setInterval(catWalkLeft, 50);      // a new function is called to do the oposite of the first
//     }
// };

// const catWalkLeft = function(){
//     const currentLeftOffset = parseInt(cat.style.left);
//     const newLeftOffset = currentLeftOffset - 10;       
//     cat.style.left = newLeftOffset + 'px';
//     if (newLeftOffset === 0){
//         clearInterval(intervalID)
//         // cat.classList.remove("flip");
//         intervalID = setInterval(catWalkRight, 50)

//     }
// };

// Middle surprise

const middleOfPage = window.innerWidth / 2;


const catWalkRight = function(){
    const currentLeftOffset = parseInt(cat.style.left); 
    const newLeftOffset = currentLeftOffset + 10; 
    cat.style.left = newLeftOffset + 'px';
    if (window.innerWidth - cat.width < newLeftOffset){ // checks if the left offset is greater than the window width - the width of the cat image. If u 
                                                        //dont take away the cat image width the cat will go off the screen
        clearInterval(intervalID)                          //if this is true then the setInterval stops
        cat.classList.add("flip");                      // the flip class is added to the cat
        intervalID = setInterval(catWalkLeft, 50);      // a new function is called to do the oposite of the first
    }
    if (middleOfPage - cat.width < newLeftOffset){
        midWayParty(newLeftOffset);
    }

};

const catWalkLeft = function(){
    const currentLeftOffset = parseInt(cat.style.left);
    const newLeftOffset = currentLeftOffset - 10;       
    cat.style.left = newLeftOffset + 'px';
    if (newLeftOffset === 0){
        clearInterval(intervalID)
        cat.classList.remove("flip");
        intervalID = setInterval(catWalkRight, 50)

    }
};


const midWayParty = function(newOffSet){
    
    clearInterval(intervalID)                          
    cat.classList.add("disappear")
    // setTimeout(function(){console.log("its stopped");}, 2000)
    cat.style.left = newOffSet;
    cat.classList.remove("disappear")
    
    intervalID = setInterval(catWalkRight, 50)
};
intervalID = setInterval(catWalkRight, 50); //starts the inital function 


