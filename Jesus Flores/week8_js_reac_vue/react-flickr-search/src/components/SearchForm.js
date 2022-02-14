import React from 'react';

class SearchForm extends React.PureComponent{
    state = {
        searchText: ''
    }
    handleInput = (ev) =>{
        this.setState({searchText: ev.target.value})
    }

    handleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSearch(this.state.searchText)
    }

    render(){
        return(
            <div className="App">
                <h1> You are searching for: {this.state.searchText }</h1>
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" onChange={this.handleInput} />
                    <input type="Submit" /> 
                </form>
            </div>
        )
    }
}

export default SearchForm