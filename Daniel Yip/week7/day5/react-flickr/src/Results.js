import React from "react"
import "./Results.css"
import Thumbnail from "./Thumbnail"
import axios from "axios"

const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const FLICKR_BASE_URL = "https://api.flickr.com/services/rest";
const FLICKR_IMAGE_URL = "https://live.staticflickr.com/";

class Results extends React.Component{

  state = {
    results: []
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
          text: "ocean coral"
        }
      })
      console.log(res.data.photos.photo);
      this.setState({results: res.data.photos.photo})

    } catch (err) {
      console.log("AXIOS SEARCH ERROR", err);
    }
  }
  componentDidMount(){

    this.getSearchRes()
  
  }


  render(){
    return(
      <div id="results">
        {this.state.results.map(result => <Thumbnail key={result.id} url= {`${FLICKR_IMAGE_URL}${result.server}/${result.id}_${result.secret}_q.jpg`}/> )}

        <Thumbnail url="http://www.fillmurray.com/200/200"/>
      </div>
    )
  }

}




export default Results