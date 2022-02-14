import React from "react"

// class Square extends React.Component {
//   render() {
//     // 버튼을 클릭하면 상위 컴포넌트의 onClick props와 연결됨
//     // onClick props는 handleClick 메소드와 연결되어 있음
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );

//     // 자식 컴포넌트에 따로 관리할 state가 없는데도 컴포넌트로 분리한 이유?
//     // 반복되는 태그를 DRY하게 사용하기 위해서
//   }
// }


// 함수형 컴포넌트
// Square는 최하단의 자식이 된다.
// 여기서 클릭이벤트가 발생하면 Board -> Game 으로 거슬러 올라가서 최상단의 부모의 state에 변화를 준다.
function Square(props) {
  return (
    // 왜 여기서는 onClick 핸들러 안에 함수를 사용하지 않는지?
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;