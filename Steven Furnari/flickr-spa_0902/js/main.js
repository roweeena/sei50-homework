
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const FLICKR_URL = 'https://api.flickr.com/services/rest';

let page = 1

const getSearch = function() {
    const userQuery = $('#userQuery').val();
    
    axios.get(FLICKR_URL, {params: {
        method: 'flickr.photos.search',
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
        safety_level: 1,
        text: userQuery,
        page: page
    }}) // get()
    .then(res => {
        renderSearch(res.data.photos.photo)
    }) // then()
    .catch(err => {
        console.log('AJAX Search Error: ', err);
    }) // catch()
}; // getSearch()

const renderSearch = function(arr){

    arr.forEach( (img) => {
        const photoUrl = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_q.jpg`
        $('#list').append(`<img class="list-image" data-photo="${img.id}" src="${photoUrl}"></img>`)     
    })
    
    $('.list-image').on('click', function(){
        $(window).off('scroll')
        const photoID = $(this).data('photo')
        getShow(photoID)
        $('#list').hide()

    }) // on click for each photo
    
}; // renderSearch()

const getShow = function(id){

    axios.get(FLICKR_URL, {params: {
        method: 'flickr.photos.getInfo',
        api_key: API_KEY,
        photo_id: id,
        format: 'json',
        nojsoncallback: 1   
    }}) // get()
    .then(function(res){
        renderShow(res.data.photo)
    }) // then()
    .catch(function(err){
        console.log('AJAX Show Error: ', err);
    }) // catch()
}; // getShow()

const renderShow = function(photoData){
    const imageUrl = `https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_c.jpg`
    $(window).off('scroll')
    // console.log(photoData)

    $('#list').hide();
    $('#show').show();

    $('#show').append(`
        <p><strong>Title:</strong> ${photoData.title._content}</p>
        <p><strong>By:</strong> ${photoData.owner.realname} (${photoData.owner.username})</p>
        <p>Veiws: ${photoData.views}</p>
        <img src="${imageUrl}" id="show-image">
        <p>${photoData.description._content}</p>
        <button id="backButton">Back to Results</button>
    `)

    $('#backButton').on('click', function(){
        $('#show').hide();
        $('#list').show();
        $('#show').empty();
        scrollListener()
    }); // back button click handler
    
}; //renderShow()

$('#search').on('click', function(e){
    $('#list').empty()
    getSearch()
    scrollListener()    
    
    e.preventDefault()
});  // search on click

const scrollListener = function(){
    $(window).on('scroll', () => {

        if (($(document).height() * 0.9) - $(this).height() <= $(this).scrollTop()){
            $(window).off('scroll')
            page++
            getSearch()
        }
    })
}
