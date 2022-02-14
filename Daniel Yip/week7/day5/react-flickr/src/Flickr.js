import React from "react";
import Header from "./Header"
import Results from "./Results"


class Flickr extends React.Component{

  state = {
    searchValue: 'ocean coral',
    query: ''
  }

  handleChange = (e)=> {
    // console.log('hello from Flickr value = ', e.target.value );
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMIT!');
    this.setState({query: this.state.searchValue})
  }

  render(){

    return(
      <div className="main">
        <Header searchValue={this.state.searchValue} handleChange={()=>this.handleChange} handleSubmit={()=> this.handleSubmit}/>
        
        {this.state.query ? <Results query={this.state.query}/> : <p>nothing to show</p> }
        


      
      </div>
    )
  }
  
}

export default Flickr