import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

class FlickrSearch extends React.Component {

    performSearch = (query) => {
        console.log('FlickrSearch::PerformSearch()', query);
    };


    render(){

        return (
            
            <div className="App">
                <h1>Flickr Search Engine</h1>
                <SearchForm 
                    history={this.props.history} 
                    onSearch={this.performSearch} 
                />
            </div>
        );
    } // render()
} // class FlickrSearch

export default FlickrSearch;
