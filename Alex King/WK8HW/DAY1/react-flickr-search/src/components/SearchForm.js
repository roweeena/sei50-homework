
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchForm = ()=> {
    const [searchText, setSearchText] = useState('')
    const his = useHistory()
    // state = {
    //     searchText: ''
    // }

    const handleInput = (ev) => {
        setSearchText(ev.target.value)
        // this.setState({searchText: ev.target.value})
    } // handleInput()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('handleSubmit', searchText)

        // Tell the parent component that htere is a search ready
        // to perform, and tell it the query text for the search
        // this.props.onSearch(this.state.searchText);
        // performSearch(searchText)
        // we are really runnign the method called 'performSearch' in the
        // parent component <FlickrSearch>
        // console.log(this.props)
        his.push(`/search/${searchText}`)
    };


    return (
        <div>
            {/* <p>{this.state.searchText}</p> */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInput}/>
                <button>Search</button>

            </form>
        </div>
    );

}

export default SearchForm;

  