import "./Header.css";
import SearchForm from "./SearchForm";
import React from "react";


class Header extends React.Component{


  render(){
    return(
      <header>
        <h1>Flickr React!</h1>
        <SearchForm 
          searchValue={this.props.searchValue} 
          handleChange={(e)=>this.props.handleChange(e)} 
          handleSubmit={(e)=>this.props.handleSubmit(e)}
        />
      </header>
    )
  }
};

export default Header
