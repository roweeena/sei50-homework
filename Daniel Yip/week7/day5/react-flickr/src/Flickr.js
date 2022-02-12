import React from "react";
import Header from "./Header"
import Results from "./Results"


class Flickr extends React.Component{

  state = {
    searchValue: 'ocean coral',
    showResults: false
  }

  handleChange = (e)=> {
    // console.log('hello from Flickr value = ', e.target.value );
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMIT!');
    this.setState({showResults: true})
  }

  render(){

    return(
      <div className="main">
      <Header searchValue={this.state.searchValue} handleChange={()=>this.handleChange} handleSubmit={()=> this.handleSubmit}/>
      
      {
        this.state.showResults ? <Results/> : <p>nothing to show</p>
      }


      
      </div>
    )
  }
  
}

export default Flickr