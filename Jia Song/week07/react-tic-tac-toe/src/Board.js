import React from "react";
import Square from "./Square";
import './app.css';

// Square와 Game의 중간에 위치한 컴포넌트
// Square를 반복하여 Board를 만드는 역할을 한다.
class Board extends React.Component {
  render() {
    const boardSize = Array(9).fill(null);

    return (
      <div>
        <div className="board">
          {boardSize.map((item, i) => {
            return  <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
          })}
        </div>
      </div>
    );
  }
}

export default Board;
