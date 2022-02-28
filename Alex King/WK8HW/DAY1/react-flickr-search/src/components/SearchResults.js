import React from 'react';

class SearchResults extends React.Component {

    state = {
        searchResults: []
    }

    componentDidMount(){
        console.log('componentDidMount()');
        
    };
    
    componentWillUnmount(){
        console.log('componentWillUnmount()');
    }

    render() {



        return (
            <div>

                <ul>

                </ul>
            </div>
        );
    }
}

export default SearchResults;