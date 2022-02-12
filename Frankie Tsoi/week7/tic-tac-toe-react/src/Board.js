
import React from 'react';
import './index.css'; 
import Square from './Square';

class Board extends React.Component{
  renderSquare(i){
    return <Square value={i}/>;
  }// render

  render() {

    const status = 'Next Player: X';

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );//return
  }//render

}// class Board


export default Board;
