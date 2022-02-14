import React from 'react';

class ThumnailGallery extends React.PureComponent{
   
    render(){
        return(
            <div className="thumnails">
                   {
                        this.props.loading 
                        ?
                         <p>Loading...</p> 
                        :
                        this.props.photos.map((photo) => {
                            <div>
                                 <p key={photo.id}> {photo.title}</p> 
                            </div>
                             
                         })
                    }                
            </div>
        )
    }
}

export default ThumnailGallery