//Snake - a retro game from the 70's wherein the player controls a snake in order to eat food and grow its body
//The aim of the game is to grow the snakes body the largest without touching the walls or its own body


//CHANGELOG
    //Made Snake
    //Added a button that restarts the game without having to reload
    //Made this website cursed

//BUGS
    // When the snake is travelling down, hitting up then right very quickly results in a fail state



//STEPS
    //DONE - Make a gameboard and display it
    //DONE - Make the snake
        //DONE - Make the snake move
        //DONE - Allow the snake move according to player input
    //DONE - Set lose conditions
        //DONE - Snake head touches snake body
        //DONE - Snake head touches canvas border
    //DONE - Make food
        //DONE - Make food increase the snake's length and score

//DEFINE GLOBAL VARIABLES

const snake = [
    //snake array of objects(coordinates)
    {x: 200, y: 200},           //Coordinate of the snake's head, this is what the player will be controlling
    {x: 190, y: 200},           //Each coordinate here reflects the position of one part of the snake's body
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},           //There are as many coordinates as the length of the snake's body
];

const resetSnake = [
    
    {x: 200, y: 200},           
    {x: 190, y: 200},           
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},           
];

let dx = 10;                    //velocity in the x axis             
let dy = 0;                     //velocity in the y axis

let score = 0;                  //variable that keeps track of the player's score

const food = ['','','','',''];  //initalising empty array


const snakeBoard = document.getElementById("snakeCanvas");  //getElementById is a method that stores the value within a certain Id into a variable
const snakeBoardContext = snakeCanvas.getContext("2d");     //getContext is a method that returns a drawing context on a given canvas                                                        

//DEFINE FUNCTIONS

function playGame() {
    setTimeout(function timer() {      //setTimeout is a function that executes a piece of code (first argument) after a given amount of milliseconds (second argument)
        if (checkLose() === true) {
            document.getElementById('gameover').innerHTML = `Game Over! Your final score is ${score}!` 
            startButton.style.visibility = "visible";
            newGame();
            score = 0;


            return;     //If any lose-conditions are present, the snake stops moving and the game becomes unplayable
        }

        clearCanvas();
        addFood();
        draw(food, "green", "dark green");
        moveSnake();
        draw(snake, "blue", "purple");
        playGame();     //calls the playGame function again, allowing the function to repeat ad infinitum
    }, 100) //end of first argument of setTimout; second argument
}

//PART 1 - Displaying the game board and snake --------------------------------------------------


//function that 'draws' the board
function clearCanvas() {
    snakeBoardContext.fillStyle = "white";      //fillStyle specifies the colour of a shape in a given 2d canvas
    snakeBoardContext.strokestyle = "black";    //strokestyle specifies the colour of a shape's border
    snakeBoardContext.fillRect(0, 0, snakeBoard.width, snakeBoard.height);      //The fillRect method now draws a rectangle with the specified style
    snakeBoardContext.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);    //Same as above
}


//function to display one part of the snake
function drawPart (array, i, fill, stroke) {
    snakeBoardContext.fillStyle = fill;           
    snakeBoardContext.strokestyle = stroke;       
    snakeBoardContext.fillRect(array[i].x, array[i].y, 10, 10);
    snakeBoardContext.strokeRect(array[i].x, array[i].y, 10, 10);
}
//function to display every part of a given array
function draw(array, fill, stroke) {
    for (let i = 0; i < array.length; i++) {
        drawPart (array, i, fill, stroke);
    }
}


//PART 2 - Making the snake move around the board ------------------------------------------------

//function that adds and removes objects in the snake array
function moveSnake () {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};  //initialises a new snake part that reflects the next position of the snake array
    snake.unshift(head);                                    //places the new head at the front of the snake array
    if (!checkSnakeFoodCollision()) {
        snake.pop();                                        //removes that last element in the snake array, allowing length to stay consistent
    }
}


//function that changes the velocity of the snake's head depending on player input, now also calls eventHandler()
function changeDirection (event) {
    const keyPress = event.code;
    if (keyPress === "ArrowLeft" && dx !== 10) {
        dx = -10;
        dy = 0;
    }
    if (keyPress === "ArrowUp" && dy !== 10) {
        dx = 0;
        dy = -10;
    }
    if (keyPress === "ArrowRight" && dx !== -10) {
        dx = 10;
        dy = 0;
    }
    if (keyPress === "ArrowDown" && dy !== -10) {
        dx = 0;
        dy = 10;
    }
    eventHandler();

}

//PART 3 - Creating lose conditions -------------------------------------------------------------

function checkLose () {
    //need a loop to check the snake's head coordinates against the coordinates of each of the other snakeparts.
    for (let i = 1; i < snake.length; i++) {    
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    //check if snake has collided with any of the canvas borders
    if (snake[0].x < 0 || snake[0].x > snakeBoard.width - 10 || snake[0].y < 0 || snake[0].y > snakeBoard.height - 10) {
        return true;
    } else {
        return false;
    }
}


//PART 4 - Making Food -------------------------------------------------------------------------

//Need to randomly generate food in both the x and y axis. Coordinates for food MUST be in multiples of 10, and ideally not within the snake body when generated

//Function that simply generates random coordinates for a new food object
function generateFood () {
    const newFood = {x: 0, y: 0};
    newFood.x = Math.round(Math.random() * (snakeBoard.width - 10) / 10) * 10;
    newFood.y = Math.round(Math.random() * (snakeBoard.height - 10) / 10) * 10;
    return newFood;
}

//Function that adds new food pellets to the food array
function addFood () {
    for (let i = 0; i < 5; i++) {   //only allows a maximum of 5 food to be present on the board at any given time
        if (food[i] ==='') {   //only adds food when an array index is empty
            let newFood = generateFood ();
            while (!checkLegalFood (newFood, food) || !checkLegalFood (newFood, snake)) {
                newFood = generateFood ();      //This while loop only stops when newFood doesnt clash with existing food or snake coordinates
            }
            food[i] = newFood;
        }
    }
}

//Function that checks if a generated food's coordinates' clashes with any coordinates in a given array, returns true if the given food doesn't clash
function checkLegalFood (newFood, array) {
    for (let i = 0; i < array.length; i ++) {
        if (newFood.x === array[i].x && newFood.y === array[i].y) {
            return false;
        }
    }
    return true;
}

//Function to check if food has collided with the snake head
function checkSnakeFoodCollision () {
    for (let i = 0; i < food.length; i++) {
        if (snake[0].x === food[i].x && snake[0].y === food[i].y) {
            increaseScore();
            food[i] = '';
            return true;
        }
    }
    return false;
}

//function that manipulates and displays current score
function increaseScore () {
    score += 10;
    document.getElementById('score').innerHTML = 'Score:' + score;
}





//add button to start game
const startButton = document.querySelector("#startGame");

clearCanvas();
addFood();
draw(food, "green", "dark green");
draw(snake, "blue", "purple");


startButton.addEventListener("click", function () {
    startButton.style.visibility = "hidden";
    score = 0;
    playGame();

    document.addEventListener("keydown", changeDirection); //executes the changeDirection function when a keyboard
})
//function that resets the snake to it's original position

const newGame = function () {
    snake.length = 0;
    for (let i = 0; i < resetSnake.length; i ++) {
        snake[i] = resetSnake[i];
    }
}


//BONUS - add cats --------------------------------------------------------------------------------

//DECLARE GLOBAL VARIABLES
const catIMG = document.querySelector("#walkingCat");
const catTalk = document.querySelector("#catTalk");
catIMG.style.left = "10px";
catIMG.style.bottom = "10px";
catIMG.style.opacity = 0.5;

const dialog = [                        
    "Oh hello there",           
    "I see you're playing the snake game", 
    "Oh sorry, I'm not distracting you, am I",
    "Here, let me get out of your way",
    "Having fun?",
    "I hear that a terrible programmer wrote this",
    "Hey, I reckon the guy who wrote this is a really swell guy",
    "PAY ATTENTION TO ME",
    "I'll stop you from winning this game if it's the last thing I do",
    "What? You think you can stop me?",
    "Hooh, you're coming towards me? Come as close as you like.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ", 
]

const randomEvents = [
    function () {
        document.body.style.background = "black";
    },
    function () {
        document.body.style.background = "blue";
    },
    function () {
        document.body.style.background = "yellow";
    },
    function () {
        document.body.style.background = "green";
    },
    function () {
        document.body.style.backgroundImage = "url('img/busy_hands.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/home-bloghero.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/home-rings.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/logo.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/mockup.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/screenshot-half.png')";
    },
    function () {
        document.body.style.backgroundImage = "url('img/mugi-fish.gif')";
    },
    function () {
        catIMG.src = "img/agyCYOB.gif";
    },
    function () {
        catIMG.src = "img/source.gif";
    },
    function () {
        catIMG.src = "img/200w.gif";
    },
    function () {
        catIMG.src = "img/anime-cat.gif";
    },
    function () {
        catIMG.src = "img/sleepy-cat.gif";
    },   
    function () {
        catIMG.src = "img/running-cat.gif";
    }, 
    function () {
        catIMG.style.opacity = 1;
    },
    function () {
        catIMG.style.opacity = 0.75;
    },
    function () {
        catIMG.style.opacity = 0.5;
    },
]

//DECLARE FUNCTIONS


//make a function that's simply the cat walking across the screen



function rightWalk(distance) {
    catIMG.style.transform =  "scaleX(1)";
    const destination = (parseInt(catIMG.style.left) + distance);
    const intervalID =  window.setInterval(function(){
        let offset = parseInt(catIMG.style.left);
        
        catIMG.style.left = (offset + 50) + 'px';
        if (offset > window.innerWidth-catIMG.width || offset > destination) {
            clearInterval(intervalID);
    
            
        }

    },20)
}

function leftWalk(distance) {
    catIMG.style.transform =  "scaleX(-1)";
    const destination = (parseInt(catIMG.style.left) - distance);
    const intervalID =  window.setInterval(function(){
        let offset = parseInt(catIMG.style.left);
        catIMG.style.left = (offset - 50) + 'px';
        if (offset <= 0 || offset < destination) {
            clearInterval(intervalID);
            
            
        }

    },20)
}

function upWalk(distance) {
    const destination = (parseInt(catIMG.style.bottom) + distance);
    const intervalID =  window.setInterval(function(){
        let offset = parseInt(catIMG.style.bottom);
        
        catIMG.style.bottom = (offset + 50) + 'px';
        if (offset > window.innerHeight-catIMG.height || offset > destination) {
            clearInterval(intervalID);
    
            
        }

    },20)   
}

function downWalk(distance) {
    const destination = (parseInt(catIMG.style.bottom) - distance);
    const intervalID =  window.setInterval(function(){
        let offset = parseInt(catIMG.style.bottom);
        catIMG.style.bottom = (offset - 50) + 'px';
        if (offset <= 0 || offset < destination) {
            clearInterval(intervalID);
        }

    },20)
}




//function to change innerText of h1 tag. More for readability than anything else
function talk(string) {
    catTalk.innerText = string;
}


//function that makes the cat walk in any direction
function walkAnyRandomDirection (destination) {
    if (Math.round(Math.random()) === 0) {
        rightWalk(destination.x);
    } else {
        leftWalk(destination.x);
    }
    if (Math.round(Math.random()) === 0) {
        upWalk(destination.y);
    } else {
        downWalk(destination.y);
    }
}
//function that returns a random dialog
function randomDialogue () {
    const randomIndex = Math.round(Math.random() * dialog.length);
    return dialog[randomIndex];
}

//function that produces random lengths and directions for the cat to walk to
function randomCatChangePosition () {
    const relativeDestination = {};
    relativeDestination.x = Math.round(Math.random() * 200);
    relativeDestination.y = Math.round(Math.random() * 200);
    return relativeDestination;
}

//function that calls several functions with randomised outcomes on keyboard press
function eventHandler () {
    talk(randomDialogue());
    walkAnyRandomDirection(randomCatChangePosition());
    randomEvents[Math.round(Math.random() * randomEvents.length)]();
}




