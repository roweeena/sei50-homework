import React from "react"
import "./Results.css"
import Thumbnail from "./Thumbnail"
import axios from "axios"

const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const FLICKR_BASE_URL = "https://api.flickr.com/services/rest";
const FLICKR_IMAGE_URL = "https://live.staticflickr.com/";

class Results extends React.Component{

  state = {
    photos: [],
    searchData: {},
    searchValue:''
  }

  getSearchRes = async () => {
    try {
      const res = await axios.get(FLICKR_BASE_URL, {
        params: {
          method: "flickr.photos.search",
          api_key: FLICKR_API_KEY,
          format: "json",
          nojsoncallback: 1,
          safe_search: 1,
          text: this.props.query
        }
      })

      console.log(res.data.photos.photo);
      
      this.setState({searchData: res.data.photos})
      this.setState({photos: res.data.photos.photo})

    } catch (err) {
      console.log("AXIOS SEARCH ERROR", err);
    }
  }

  componentWillReceiveProps(){
    this.setState({searchValue: this.props.query})
    this.getSearchRes()
  }

  // componentDidMount(){

  //   this.getSearchRes()
  //   this.setState({searchValue: this.props.query})
  // }


  render(){
    return(
      <div id="results-wrapper">
        <strong>{`${this.state.searchData.total} results for ${this.state.searchValue}`}</strong>
        <div id="results">
          {this.state.photos.map(photo => <Thumbnail key={photo.id} url= {`${FLICKR_IMAGE_URL}${photo.server}/${photo.id}_${photo.secret}_q.jpg`}/> )}
        </div>
      </div>
    )
  }

}




export default Results