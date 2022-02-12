import React from 'react';
import './index.css'; 


class Square extends React.Component{

  render(){
    return(

      <button className="square" onClick={function(){console.log('click');}}> 
      
      
      {this.props.value}</button>
    ); // return
  } // render

}// class Square








  export default Square;