//Snake - a retro game from the 70's wherein the player controls a snake in order to eat food and grow its body
//The aim of the game is to grow the snakes body the largest without touching the walls or its own body

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

let dx = 10;                    //velocity in the x axis             
let dy = 0;                     //velocity in the y axis

let score = 0;                  //variable that keeps track of the player's score

const food = ['','','','',''];  //initalising empty array


const snakeBoard = document.getElementById("snakeCanvas");  //getElementById is a method that stores the value within a certain Id into a variable
const snakeBoardContext = snakeCanvas.getContext("2d");     //getContext is a method that returns a drawing context on a given canvas
                                                            //specifying 2d indicates this canvas as 2d, allowing for the drawing of 2d elements



//DEFINE FUNCTIONS

function playGame() {
    setTimeout(function timer() {      //setTimeout is a function that executes a piece of code (first argument) after a given amount of milliseconds (second argument)
        if (checkLose() === true) {
            document.getElementById('gameover').innerHTML = `Game Over! Your final score is ${score}!` 
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

//PART 1 - Displaying the game board and snake -----------------------------------------------------------------------------------------------------


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


//PART 2 - Making the snake move around the board ---------------------------------------------------------------------------------------------------

//function that adds and removes objects in the snake array
function moveSnake () {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};  //initialises a new snake part that reflects the next position of the snake array
    snake.unshift(head);                                    //places the new head at the front of the snake array
    if (!checkSnakeFoodCollision()) {
        snake.pop();                                        //removes that last element in the snake array, allowing length to stay consistent
    }
}


//function that changes the velocity of the snake's head depending on player input
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
    console.log(event);

}

//PART 3 - Creating lose conditions ---------------------------------------------------------------------------------------------------------------------

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


//PART 4 - Making Food -----------------------------------------------------------------------------------------------------------------------------------

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



//BONUS - add waifus --------------------------------------------------------------------------------------------------------------------------------------



//DEBUGGING AND RUNNING THE GAME

playGame();

document.addEventListener("keydown", changeDirection); //executes the changeDirection function when a keyboard