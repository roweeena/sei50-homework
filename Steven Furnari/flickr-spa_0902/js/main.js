$(function(){
    
    const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

    const FLICKR_URL = 'https://api.flickr.com/services/rest'


// Params:
// method, api_key - REQUIRED
// format ??? for specifying format
// text - specify search query


    const getSearch = function(){
        const userQuery = $('#userQuery').val();
        
        axios.get(FLICKR_URL, {params: {
            method: 'flickr.photos.search',
            api_key: API_KEY,
            format: 'json',
            nojsoncallback: 1,
            safety_level: 1,
            text: userQuery
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
            const photoID = $(this).data('photo')
            getShow(photoID)
            $('#list').hide()
        })
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
    }

    const renderShow = function(photoData){
        const imageUrl = `https://live.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_c.jpg`

        $('#list').hide();
        $('#show').show();

        $('#show').append(`
            <p><strong>Title:</strong> ${photoData.title._content}</p>
            <p><strong>By:</strong> ${photoData.owner.realname} (${photoData.owner.username})</p>
            <img src="${imageUrl}" id="show-image">
            <p>Veiws: ${photoData.views}</p>
            <button id="backButton">Back to Results</button>
            `)

        $('#backButton').on('click', function(){
            $('#show').hide();
            $('#list').show();
            $('#show').empty()
            }); // back button click handler
   } //renderShow()



    $('#search').on('click', function(e){
        $('#list').empty()
        getSearch()    
        
        e.preventDefault()
    })  // search on click

}) // window.load