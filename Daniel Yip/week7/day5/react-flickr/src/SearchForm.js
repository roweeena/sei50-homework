import React from "react";

class SearchForm extends React.Component {


  render(){
    return (
      <form onSubmit={this.props.handleSubmit()}>

        <input 
          type="text" 
          placeholder="Find some images" 
          value={this.props.searchValue} 
          onChange={this.props.handleChange(this.props.searchValue)}
        />

        <button>Search</button>
      </form>
    )
  }

}

export default SearchForm