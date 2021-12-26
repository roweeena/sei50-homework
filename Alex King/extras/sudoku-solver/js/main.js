console.log(`sudoku solver`)

//Practice with arrays:
    //2d Arrays 

//make 3 boards, 1 blank, 1 correct, and one impossible 
//inspiration https://www.youtube.com/watch?v=3_50lwD7ygE


const boardBlank =[ // should give a random valid board of numbers 
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
    [x,x,x,x,x,x,x,x,x],
];
const boardSolvable =[ // hardest problem... apparently.
    [8,x,x,x,x,x,x,x,x],
    [x,x,3,6,x,x,x,x,x],
    [x,7,x,x,9,x,2,x,x],
    [x,5,x,x,x,7,x,x,x],
    [x,x,x,x,4,5,7,x,x],
    [x,x,x,1,x,x,x,3,x],
    [x,x,1,x,x,x,x,6,8],
    [x,x,8,5,x,x,x,1,x],
    [x,9,x,x,x,x,4,x,x],
];
const boardImpossible =[ // impossible to solve. 
    [1,x,x,x,x,x,x,x,x],
    [4,5,6,x,x,x,x,x,x],
    [7,8,9,x,x,x,x,x,x],
    [2,x,x,x,x,x,x,x,x],
    [5,x,x,x,x,x,x,x,x],
    [6,x,x,x,x,x,x,x,x],
    [3,x,x,x,x,x,x,x,x],
    [8,x,x,x,x,x,x,x,x],
    [x,2,3,4,5,6,7,8,9],
];

// find no repeating numbers in each row. 
//

//loop array[0-9 (columns)][0-9 (rows)]
//function to find if board is populated 
//create boards with number 1-9 then filter all invalid boards 




function checkRow(board){
    for (let i=0;1<9;i++){
        console.log(board)
    }
} // close row check

function checkColumn(board){

}


function solverInvalid(board){

}

function solver(board){
    for (let i = 0; i<9; i++){

    }

}
solver(boardSolvable)