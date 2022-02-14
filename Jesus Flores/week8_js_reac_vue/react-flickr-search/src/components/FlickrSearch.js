import React from 'react';
import SearchForm  from './SearchForm'
import "../App.css"
import axios from 'axios';
import ThumnailGallery from './ThumnailGallery'


const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';


class FlickrSearch extends React.Component{
    state = {
        resultsPhotos: [],
        loading: false,
        error: null,
    }

    perfomSearch =  async (query)=>{
        this.setState({loading: true})
        const flickrParams = {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: query // should come from user input
        }
        try {
            const res = await axios.get( FLICKR_BASE_URL , {params: flickrParams});
           this.setState({resultsPhotos: res.data.photos.photo, loading: false});
        } catch (err) {
           this.setState({error: err, loading:false});
        }
    }
    render(){

        if (this.state.error ){
            return (
                <div className="App">
                    <h1>There was an error </h1>
                </div>
            )
        }
        return(
            <div className="App">
                 <h1> Flicker Search </h1>
                    <hr/>
                 <p> Search form goes here </p>
                 <SearchForm  onSearch={ this.perfomSearch }/>
                 <ThumnailGallery  photos={this.state.resultsPhotos} loading={this.state.loading} />

                
            </div>
        )
    }
}

export default FlickrSearch