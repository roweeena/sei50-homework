import React from 'react';

class ThumbnailGallery extends React.Component {
  render() {
    return (
      <div className="thumbnails">
        {
          this.props.loading
            ?
            <p>Loading Results...</p>
            :
            this.props.photo.map(photo =>
              <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} />
            )
            
        }

      </div>
    )
  }
}

export default ThumbnailGallery

{/* this.props.photo.map(photo => <p key={photo.id}>{photo.title}</p>) */}


