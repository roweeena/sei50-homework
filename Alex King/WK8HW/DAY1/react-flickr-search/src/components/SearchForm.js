
import React from 'react';

class SearchForm extends React.Component {

    state = {
        searchText: ''
    }

    handleInput = (ev) => {
        this.setState({searchText: ev.target.value})
    } // handleInput()

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('handleSubmit')

        // Tell the parent component that htere is a search ready
        // to perform, and tell it the query text for the search
        this.props.onSearch(this.state.searchText);
        // we are really runnign the method called 'performSearch' in the
        // parent component <FlickrSearch>

    };

    render() {
        return (
            <div>
                {/* <p>{this.state.searchText}</p> */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}/>
                    <button>Search</button>


                </form>
            </div>
        );
    }
}

export default SearchForm;