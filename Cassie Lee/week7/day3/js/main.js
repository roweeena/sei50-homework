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
    $results.show();
    $('#details').hide();

    $results.html(`<p>Total results : ${data.total}</p>`)

let photos = '<ul>'
    data.photo.forEach(resultsEntry => {
        const imageURL = generateImageURL(resultsEntry)

            photos += `
                <li data-photo-id="${resultsEntry.id}">
                <img src= "${imageURL}" alt="${resultsEntry.title}>
                </li>
            
            `;

    });
    photos += '</ul>'
    $results.append(photos);
    
    $('li').on('click', function(){
        const photoID = $(this).data('photo-id')
        console.log('photoid clicked', photoID);
        fetchPhotoById(photoID)
    })
    
}; // renderSearchResults()

const generateImageURL = (photo, size = 'q') => {
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
}

const fetchPhotoById = function(id){
    console.log('fetchphotibyid', id);

    axios.get(FLICKR_BASE_URL, { 
        params: {
            //axios will combine these key-value pairs into the querystring for us
            method: 'flickr.photos.getInfo',
            api_key: FLICKR_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            photo_id: id
        }
    })
        .then( function( res) {
            console.log(res.data.photo);
            renderPhotoResults( res.data.photo)
        })
        .catch( function( err ){
            console.log('AJAX Search Error', err);
        });

} // fetch photo by id 

const renderPhotoResults = function(photo){
    console.log('renderphotoresults', photo)
    $('#results').hide();
    $('#details').show();

    $('#details').html(`
        
        <h3>${photo.title._content}<h3>
        <img src="${generateImageURL(photo, 'b')}" alt="${photo.title.content}">
        <p>
            ${photo.description._content}
        </p>

        <button id = "backButton"> Back to results </button>
    `)

    $('#backButton').on('click', () => {
        $('#details').hide();
        $('#results').show();
        
    })
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
