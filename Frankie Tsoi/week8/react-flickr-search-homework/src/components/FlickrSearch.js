import React from 'react';
import axios from 'axios';
import '../App.css';
import SearchForm from './SearchForm';
import ThumbnailGallery from './ThumbnailGallery'
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import Home from './Home'
//TODO: import from some single file of global constants
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

class FlickrSearch extends React.Component {

  state={
    resultPhotos: [], 
    loading: false, //controls whether or not to show loading message
    error: null // whether or not show an error message
  };
  performSearch = (query) => {
    // console.log('FlcikrSearch::performSearch()', query);
    this.setState({loading: true});

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: query
    }

    axios.get(FLICKR_BASE_URL, {params: flickrParams})
    .then( res => {
      console.log('response', res.data);
      this.setState({
        resultPhotos: res.data.photos.photo,
        loading:false
      })
    })
    .catch( err => {
      console.log('error in search AJAX', err);
      this.setState({
        error: err, 
        loading:false
      })
    });
  };


  render() {

    if(this.state.error !== null ){
      return <p>Sorry, na error. Try again.</p>
    };

    return (
      <div className="App">
        <Router>
          <h1>FlickrSearch</h1>

          <Link to="/">Home</Link> 

          <hr/>

          <SearchForm onSearch={ this.performSearch }/>

          <ThumbnailGallery 
          loading={this.state.loading} 
          photo={this.state.resultPhotos}/>

          <Route exact path="/" component={Home} />

        </Router>
      </div>
    );
  }//render
}//class FlickrSearch



export default FlickrSearch