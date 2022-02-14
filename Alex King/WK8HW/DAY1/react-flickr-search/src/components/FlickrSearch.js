import React from 'react';
import '../App.css'
import axios from 'axios'

import SearchForm from './SearchForm'
import ThumbnailGallery from './ThumbnailGallery'
import SearchResults from './SearchResults'

import { Route, HashRouter as Router, Link } from 'react-router-dom';


const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

class FlickrSearch extends React.Component {

    state = {
        resultPhotos: [], 
        loading: false,
        error: null
    }

    performSearch = async (query) => {
        console.log('FlickrSearch::performSearch()', query)

        this.setState({loading:true})

        const flickrParams = {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: query // should come from user input
        }

        // axios.get(FLICKR_BASE_URL, { params: flickrParams })
        //     .then( (res) => {
        //         console.log('response', res.data)
        //     })
        //     .catch( (err) => {
        //         console.error('error', err)
        //     });

        try {
            const res = await axios.get(FLICKR_BASE_URL, {params: flickrParams})
            console.log('response', res.data);
            this.setState({
                resultPhotos:res.data.photos.photo,
                loading: false
            })

        } catch (err) {
            console.error('error', err);
            this.setState({error: err, loading:false})
        }


    }

    render() {

        // Handle the special case where there is an error
        if(this.state.error !== null){
            return <p>Sorry, there was an error loading your data. Please try again.</p>
        }

        return (
            <div className="App">
                <Router>

                <h1>Flickr Search</h1>
                <hr />

                <SearchForm onSearch={ this.performSearch }/>
                {/* <SearchForm history={this.props.history} /> */}


                <ThumbnailGallery loading={ this.state.loading } photos={ this.state.resultPhotos } />


                <Route exact path ='/:query' component={ SearchForm } />
                
                </Router>

            </div>
        );
    }
}

export default FlickrSearch;
