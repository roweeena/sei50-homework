console.log('loaded');

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

//Params:
//method=flickr.photos.search
//api_key - REQUIRED
//format=json ??? for specifying format
//text - specify the search query
//nojsoncallback=1


//https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084


$(function(){
  
  const fetchSearchResults = function( searchWord ){

    
    const FLICKR_BASE_URL = `https://api.flickr.com/services/rest?method=flickr.photos.search&text=${searchWord}&api_key=2f5ac274ecfac5a455f38745704ad084`;

    axios.get(FLICKR_BASE_URL,{
      params:{
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        format: 'json',
        nojsoncallback: 1,
        text: 'searchWord'
      }
    })
    .then(function(res){
      // console.log(res.data.photos.total);
      countResults(res.data.photos);
      const showPhotos =  function(data){
        let photos = '<ul>';
          
            data.forEach(function(photo){
              console.log(photo);
              photos +=`
              <li data-photo-id="${photo.id}">
          
                ${photo.title}
              </li>
              `;
            });
            photos += '</ul>';
          
            $output.append(photos);
        }
    })
    .catch(function(err){
      console.log('AJAX search error:', err);
    });
  }
  const countResults = function( data ){
      console.log( 'countResults()', data );
      const $output = $('#output');
      
    
      $output.html(`<p>${data.total} matches found: </p>`)
    };

    let photos = '<ul>';
  
    data.forEach(function(photo){
      console.log(photo);
      photos +=`
      <li data-photo-id="${photo.id}">
  
        ${photo.title}
      </li>
      `;
    });
    photos += '</ul>';
  
    $output.append(photos);

    
    $('#userQuery').focus();
  
    $('#searchForm').on('submit', function( ev ){
      ev.preventDefault();
      console.log('Form submitted!');
  
      const query = $('#userQuery').val();
  
      fetchSearchResults(query);
    })
  

})//DOM ready