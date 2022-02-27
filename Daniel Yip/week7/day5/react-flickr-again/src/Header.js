import React from "react";
import SearchForm from './SearchForm'

function Header(props) {
  return(
    <header id="header">
      <h1>React Flickr AGAIN!!!!</h1>
      <SearchForm handleSubmit={props.handleSubmit} value={props.searchValue} handleChange={props.handleChange}/>
    </header>
  )
}

export default Header