import React from 'react';

class ThumbnailGallery extends React.Component {
    render() {
        return (
            <div className="App">
                {
                    this.props.loading
                    ?
                    <p>Loading Results...</p>
                    :
                    this.props.photos.map( photo => 
                    <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} />)
                }
            </div>
        );
    }
}

export default ThumbnailGallery;



