console.log('loaded');

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

//Params:
//method=flickr.photos.search
//api_key - REQUIRED
//format=json ??? for specifying format
//text - specify the search query
//nojsoncallback=1

//the bottom URl is to get the json data
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
        text: searchWord //this is a parameter not a string
      }
    })
    .then(function(res){
      console.log(res.data.photos.total);
      countResults(res.data.photos);
    })
    .catch(function(err){
      console.log('AJAX search error:', err);
    });
  }// end fetchSearchResults

  const countResults = function( data ){
    console.log( 'countResults():', data );
    const $output = $('#output');
    
    $output.html(`<p>${data.total} matches found: </p>`)

    let photos = '<ul>';
          
            data.photo.forEach(function(photo){
              console.log('check if photo is working', photo);
              photos +=`
              <li data-photo-id="${photo.id}">
                <img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg
                ${photo.title}
              </li>
              `;
            });
            photos += '</ul>';
          
            $output.append(photos);

  };//end countResults
  

    
    $('#userQuery').focus();
  
    $('#searchForm').on('submit', function( ev ){
      ev.preventDefault();
      console.log('Form submitted!');
  
      const query = $('#userQuery').val();
  
      fetchSearchResults(query);
    }) //end form submit
  

})//DOM ready