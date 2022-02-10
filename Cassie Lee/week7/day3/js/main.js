console.log('main.js loaded');

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

const fetchSearchResults = function(searchText){

    axios.get(FLICKR_BASE_URL, { 
        params: {
            //axios will combine these key-value pairs into the querystring for us
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            text: searchText
        }
    })
        .then( function( res) {
            console.log(res.data.photos);
            renderSearchResults( res.data.photos)
        })
        .catch( function( err ){
            console.log('AJAX Search Error', err);
        });


}


const renderSearchResults = function(data){
    console.log(data);

    $results = $('#results');

let photos = '<ul>'
    data.photo.forEach(resultsEntry => {


            photos += `
                <li data-photo-id="${resultsEntry.id}>
                <img src= https://live.staticflickr.com/${resultsEntry.server}/${resultsEntry.id}_${resultsEntry.secret}_q.jpg>
                </li>
            
            `;

    });
    photos += '</ul>'
    $results.append(photos);
    
    
    
}



$(function(){

    $('#userQuery').focus();
    $('#searchForm').on('submit', function(ev){
        ev.preventDefault();
        console.log('form submitted');
        const query = $('#userQuery').val();
        fetchSearchResults(query)
    })


});
