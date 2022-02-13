import React,{useState} from 'react';
import Square from './Square'

function Board(){
    const [square, setSquare] = useState(Array(9).fill(null)); 
    const [turn, setTurn] =  useState( true);
    const winner = checkState(square);
    let   status = checkResult(winner);

    const handleClick = (i) =>{
        const squaresState =  square.slice();
        if(!squaresState[i]){
            squaresState[i]  = turn ? "X" : "O";
            setSquare(squaresState);
            setTurn(!turn)
        }
    }
    function checkState(boardState){
        const moves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];  
        const draw = boardState.every(value => value !== null )
        if (draw){
            return 'draw'
        }
        for (let i = 0; i < moves.length; i++) {
            const [a,b,c] = moves[i];
            if(boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]){
                const disableState = document.querySelector('.board')
                disableState.style.pointerEvents = 'none';
                return boardState[a];
            }     
        }
        return null
    }
    function  checkResult(stateStatus){
        if (stateStatus === "draw"){
           return "There was a draw";
        }
        if(stateStatus !== null){
            return `The winner is ${stateStatus}`
        }
        return `Player turn ${turn?"X":"O"}`
    }

    return (
       
        <div className='board'> 
            {
              square.map((_,key) =>  <Square key={key} value={square[key]} onClick={()=> handleClick(key)} /> )
            }
         {status}
            
        </div>
        
    )
}

export default Board; 