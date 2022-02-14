import React from 'react';


class Home extends React.Component {

  state = {
    renderList: null
  } 
  componentDidMount(){
    this.setState({
      renderList: false
    })
  }render(){
    return(
      <div>React is so hard!</div>
    );
  }

}// class Home


export default Home;