import React from 'react'

const FLICKR_IMAGE_URL = "https://live.staticflickr.com/";

export default function Results(props) {
  return (
    <div id="results-wrapper">
      <h2>{`${props.numberResults} results for ${props.query}`}</h2>
      
      {props.resultsToShow.map((pic) => <img src={`${FLICKR_IMAGE_URL}${pic.server}/${pic.id}_${pic.secret}_q.jpg`} key={pic.id} />)}

    </div>
  )
}
