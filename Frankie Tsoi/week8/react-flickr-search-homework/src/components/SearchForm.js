import React from "react";

class SearchForm extends React.Component {

  state = {
    searchText: ''
  };

  handleInput = (ev) => {
    // console.log('handleInput', ev.target.value);
    this.setState({ searchText: ev.target.value });
  };// handleInput()

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit()');
    this.props.onSearch(this.state.searchText);
  };//handleSubmit

  render() {
    return (
      <div>
        {/* <p>{this.state.searchText}</p> */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}


export default SearchForm;