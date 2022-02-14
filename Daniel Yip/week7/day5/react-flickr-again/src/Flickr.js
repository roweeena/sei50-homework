import React from "react";
import Header from "./Header"
import axios from "axios";
import Results from './Results'

const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const FLICKR_BASE_URL = "https://api.flickr.com/services/rest";


class Flickr extends React.Component{

  state = {
    searchValue: 'ocean coral',
    searchResults: [],
    searchResultNumber: 0,
    query: '',
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log('submit clicked');
    this.setState({query: this.state.searchValue}, this.getSearchResults)
  }

  handleChange = (e)=>{
    this.setState({searchValue: e.target.value })
  }

  getSearchResults = async ()=>{

    try {
      const res = await axios.get(FLICKR_BASE_URL, {
        params: {
          method: "flickr.photos.search",
          api_key: FLICKR_API_KEY,
          format: "json",
          nojsoncallback: 1,
          safe_search: 1,
          text: this.state.query,
          page: 1
        }
      })

      // console.log(res.data);
      this.setState({searchResults: res.data.photos.photo, searchResultNumber: res.data.photos.total})

    } catch (err) {
      console.log('AXIOS SEARCH ERROR: ', err);
    }

  }

  render(){
    return(
      <div id="flickr">
        <Header handleSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange}/>
        {this.state.searchResults.length > 0 && 
        
        <Results resultsToShow={this.state.searchResults} numberResults={this.state.searchResultNumber} query={this.state.query}/>
        
        }

      </div>
    )
  }



}

export default Flickr


