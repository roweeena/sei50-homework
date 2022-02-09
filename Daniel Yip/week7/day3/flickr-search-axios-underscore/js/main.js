console.log('main.js');

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

// params:
// method=flikr.photos.search
// format=json
// text - specify the search query
// nojsoncallback=1
// https://api.flickr.com/services/rest?method=flickr.photos.search&text=ocean+coral&format=json&nojsoncallback=1&api_key=2f5ac274ecfac5a455f38745704ad084


$(function(){

  axios.get(FLICKR_BASE_URL, {
    params: {
      // axios will combine these key-value pairs into the query string for us
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: 'coral ocean'
    }
  })
    .then(function(res) {
      console.log(res.data.photos.photo);
      
    })
    .catch(function (err) {
      console.log('AJAX Search error', err);
    });



}); // document ready