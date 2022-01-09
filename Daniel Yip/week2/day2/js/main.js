console.log("hello");

const mainMeow = document.querySelector('#main-meow');
const catBox = document.querySelector('#cat-box');
const kittenBox = document.querySelector('#kitten-box');

let catCount = 0;

let timeID;

mainMeow.style.left = '0px'

const catWalkLeft = function(){
    const currentLeftOffset = parseInt(mainMeow.style.left);
    const newLeftOffset = currentLeftOffset + 1;
    mainMeow.style.left = newLeftOffset + 'px';
    
    // if (catCount != 0 && newLeftOffset >= window.innerWidth / 2 - 100 && newLeftOffset <= window.innerWidth / 2 - 99 && catCount%3 === 0 ){
    //     partyTime();
    //     catCount++;
    //     setTimeout(start, 5000)
    // }

    if (window.innerWidth - mainMeow.width < newLeftOffset){
        clearInterval(timeID);
        catCount++;
        makeAKitten();
        console.log(catCount);
        mainMeow.classList.add('flip');
        timeID = setInterval(catWalkRight, 3);
    }

    
};

const catWalkRight = function(){
    const currentLeftOffset = parseInt(mainMeow.style.left);
    const newLeftOffset = currentLeftOffset - 1;
    mainMeow.style.left = newLeftOffset + 'px';
    
    if (catCount != 0 && newLeftOffset >= window.innerWidth / 2 - 100 && newLeftOffset <= window.innerWidth / 2 - 99 && catCount%3 === 0 ){
        partyTime();
        catCount++;
        setTimeout(start, 5000);
    }

    if (newLeftOffset === 0){
        clearInterval(timeID);
        catCount++;
        makeAKitten();
        console.log(catCount);
        mainMeow.classList.remove('flip');
        timeID = setInterval(catWalkLeft, 3);
    }
};

const makeAKitten = function(){
    const kitten = document.createElement('img');
    kitten.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    kitten.classList.add('small-kitty');
    kitten.style.position = 'absolute';
    kitten.style.top = `${Math.floor(Math.random()*window.innerHeight-50)}px`;
    kitten.style.left = `${Math.floor(Math.random()*window.innerWidth-50)}px`;
    if (Math.floor(Math.random()*10) < 5){
        kitten.classList.add('flip')
    }
    catBox.appendChild(kitten);
}

const start = function(){
    mainMeow.style.width = "200px";
    mainMeow.style.height = "200px";
    mainMeow.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    mainMeow.classList.remove('rainbow');
    mainMeow.classList.remove('flip');
    catBox.classList.remove('rainbow');
    
    timeID = setInterval(catWalkLeft, 3);
}

start()

const partyTime = function(){
    clearInterval(timeID);
    
        mainMeow.src = "/images/dance.gif";
        mainMeow.style.width = "99vw"
        mainMeow.style.height = "100vh"
        mainMeow.style.left = "0px"
        catBox.classList.add('rainbow')
}






