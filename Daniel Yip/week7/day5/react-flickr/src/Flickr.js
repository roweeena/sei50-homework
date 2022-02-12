import React from "react";
import Header from "./Header"
import Results from "./Results"


class Flickr extends React.Component{

  state = {
    searchValue: 'ocean coral'
  }

  handleChange = (e)=> {
    console.log('hello from Flickr value = ', e.target.value );
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMIT!');
  }

  fetchSearchResults = async (query) => {
    
    try {
      const res = await axios.get(query)
        
      };

    } catch (err) {
      
    }
  }

  render(){

    return(
      <div className="main">
      <Header searchValue={this.state.searchValue} handleChange={()=>this.handleChange} handleSubmit={()=> this.handleSubmit}/>
      <Results/>
      </div>
    )
  }
  
}

export default Flickr