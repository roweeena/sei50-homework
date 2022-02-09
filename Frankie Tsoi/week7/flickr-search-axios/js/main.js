console.log('loaded');

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest';


//Params:
//method=flickr.photos.search
//api_key - REQUIRED
//format=json ??? for specifying format
//text - specify the search query
//nojsoncallback=1


//https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084


$(function(){

  axios.get(FLICKR_BASE_URL,{
    params:{
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: 'coral ocean'
    }
  })
    .then(function(res){
      console.log(res.data.photos.photo);
      countResults()
    })
    .catch(function(err){
      console.log('AJAX search error:', err);
    });






    
    
    
    



    $('#userQuery').focus();
  
    $('#searchForm').on('submit', function( ev ){
      ev.preventDefault();
      console.log('Form submitted!');
  
      const query = $('#userQuery').val();
  
      fetchSearchResults(query);
    })
    
})//DOM ready