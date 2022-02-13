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
    searchValue:'',
    pageNum: 0
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
          text: this.state.searchValue,
          page: this.state.pageNum
        }
      })

      console.log(res.data.photos.photo);
      
      this.setState({searchData: res.data.photos})
      if(this.state.pageNum === 1){
        this.setState({photos: res.data.photos.photo})
      } else {
        this.setState({photos: this.state.photos.concat(res.data.photos.photo)})
      }

    } catch (err) {
      console.log("AXIOS SEARCH ERROR", err);
    }
  }

  componentDidUpdate(prevProps){
    console.log('hello from componentDidUpdate()');
    if (prevProps.query != this.props.query){
      console.log('Found different props');
      this.setState({searchValue: this.props.query, pageNum: 1}, this.getSearchRes)
    }
  }

  componentDidMount(){
    console.log('Hello from componentDidMount()');
    
    this.setState({searchValue: this.props.query, pageNum: 1}, this.getSearchRes)
  }

  showMore(){
    console.log('CLICKED! showMore()');

    this.setState({searchValue: this.props.query, pageNum: this.state.pageNum += 1}, this.getSearchRes)
  }


  render(){
    return(
      <div id="results-wrapper">
        <strong>{`${this.state.searchData.total} results for ${this.state.searchValue}`}</strong>
        <div id="results">
          {this.state.photos.map(photo => <Thumbnail key={photo.id} url= {`${FLICKR_IMAGE_URL}${photo.server}/${photo.id}_${photo.secret}_q.jpg`}/> )}
        </div>
        <button onClick={()=>this.showMore()}>Show more</button>
      </div>
    )
  }

}




export default Results