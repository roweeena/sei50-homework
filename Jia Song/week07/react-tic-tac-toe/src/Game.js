import React from "react";
import Board from "./Board";

// 최상단의 부모 컴포넌트
// 자식 컴포넌트의 클릭 이벤트를 감지하고, state를 총체적으로 관리하는 역할을 한다.
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 모든 과정을 여기에 저장하게 된다.
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    // 지금까지 모든 히스토리 배열을 복사
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    // 가장 최근의 게임보드를 복사
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 만일 승자가 정해졌거나, 클릭한 Square에 이미 마크가 있다면 리턴.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // 클릭한 스퀘어에 마킹
    squares[i] = this.state.xIsNext ? "X" : "O";

    // 히스토리에 현재 board array 추가
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    // 모든 히스토리중 현재의 스텝에 맞는 히스토리를 찾는다.
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;


const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}