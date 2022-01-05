console.log(`sudoku solver`)

//Practice with arrays:
    //2d Arrays 

//make 3 boards, 1 blank, 1 correct, and one impossible 
//inspiration https://www.youtube.com/watch?v=3_50lwD7ygEx
//more inspiration: https://github.com/davelms/medium-articles/blob/master/sudoku-solver/sudoku.js

const boardBlank =[ // should give a random valid board of numbers 
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
];
const mergedBlank = [].concat.apply([], boardBlank); 

const boardSolvable =[ // hardest problem... apparently.
    [8,0,0,0,0,0,0,0,0],
    [0,0,3,6,0,0,0,0,0],
    [0,7,0,0,9,0,2,0,0],
    [0,5,0,0,0,7,0,0,0],
    [0,0,0,0,4,5,7,0,0],
    [0,0,0,1,0,0,0,3,0],
    [0,0,1,0,0,0,0,6,8],
    [0,0,8,5,0,0,0,1,0],
    [0,9,0,0,0,0,4,0,0],
];
const mergedSolvable = [].concat.apply([], boardSolvable); 

const boardImpossible =[ // impossible to solve. 
    [1,0,0,0,0,0,0,0,0],
    [4,5,6,0,0,0,0,0,0],
    [7,8,9,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,0,0],
    [6,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0],
    [0,2,3,4,5,6,7,8,9],
];
const mergedImpossible = [].concat.apply([], boardImpossible); 

// find no repeating numbers in each row. 
//

//loop array[0-9 (columns)][0-9 (rows)]
//function to find if board is populated 
//create boards with number 1-9 then filter all invalid boards 
//405

function showRow(board, row){
    board[row];
    console.log(`row ${board[row]}`) 
} // shows row

function showColumn (board, column){
    let columns = [];

    for (let row = 0; row<9; row++){
        columns.push(board[row][column]);
    } // iterates through all the rows (arrays) with the same number. ie array 1, pos 2, array 2, pos 2, array 3, pos 2... 
    console.log(`column ${columns}`)
} // shows columns  

function showSquare(board, square){
    let sqr0 = [];
    let sqr1 = [];
    let sqr2 = [];
    let sqr3 = [];
    let sqr4 = [];
    let sqr5 = [];
    let sqr6 = [];
    let sqr7 = [];
    let sqr8 = [];
    
    for (let x1 = 0; x1 < 3; x1++){
        for (let y1 = 0; y1 < 3; y1++){
            sqr0.push(board[x1][y1])
            
        }
        for (let y2 = 3; y2 < 6; y2++){
            sqr1.push(board[x1][y2])
        }
        for (let y3 = 6; y3 < 9; y3++){
            sqr2.push(board[x1][y3])
        }
    }


    for (let x2 = 3; x2 < 6; x2++){
        for (let y1 = 0; y1 < 3; y1++){
            sqr3.push(board[x2][y1])
        }
        for (let y2 = 3; y2 < 6; y2++){
            sqr4.push(board[x2][y2])
        }
        for (let y3 = 6; y3 < 9; y3++){
            sqr5.push(board[x2][y3])
        }

    }

    for (let x3 = 6; x3 < 9; x3++){
        for (let y1 = 0; y1 < 3; y1++){
            sqr6.push(board[x3][y1])
        }
        for (let y2 = 3; y2 < 6; y2++){
            sqr7.push(board[x3][y2])
        }
        for (let y3 = 6; y3 < 9; y3++){
            sqr8.push(board[x3][y3])
        }
    }

    
    // for (let row = 0; row<9; row++){
    //     for (let column = 0; column < 9; column++){
    //         if (square == board[row][column]){
    //             cells.push(board[row][column])
    //         } // closing if 
    //     } // closing column loop 
    // } // closing row loop
    // console.log(cells) 
}

showRow(boardSolvable, 0)
showColumn(boardSolvable, 2)
showSquare(boardSolvable, 0)




const ifPresent = function(board, input, row, column, square){
   
    
    for (let r = 0; r < 9; r++){ // if number is present in row
        if (board[row][r] === input) return false;
    }
    let columns = [];
    for (let row = 0; row<9; row++){ // outputting the column as an array
        columns.push(board[row][column]);
    }

    for (let c = 0; c < 9; c++){ // if number is present in column 
        if (columns[c] === input) return false;// closing if present in column
    }  
    
    // squares doesn't work yet !!
    let rowNumber = Math.floor(row/3)*3;
    let columnNumber = Math.floor(column/3)*3;
    for (let r = rowNumber; r < rowNumber + 3; r++)
        for (let c = columnNumber; c < columnNumber + 3; c++){
            if (board[row(r, c) === value])
            return false;

        }

}

ifPresent(boardSolvable, 7, 2, 2, 'sqr6')

// to merge an array of arrays, const merged = [].concat.apply([], boardSolvable); 
// Not too practical

