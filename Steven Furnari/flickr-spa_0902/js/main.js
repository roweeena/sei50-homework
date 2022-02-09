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
        const idArr = arr.map(img => [img.server, img.id, img.secret])
        
        idArr.forEach( (urlArray) => {
            const photoUrl = `https://live.staticflickr.com/${urlArray[0]}/${urlArray[1]}_${urlArray[2]}_q.jpg`
            $('#list').append(`<img class="list-image" data-photo="${urlArray[1]}" src="${photoUrl}"></img>`)     
        })
        
        $('.list-image').on('click', function(){
            const photoID = $(this).data('photo')
            getShow(photoID)
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
            console.log(res);
        })
        .catch(function(err){
            console.log('AJAX Show Error: ', err);
        })
    }
    


    $('#search').on('click', function(e){
        $('#list').empty()
        getSearch()    
        
        e.preventDefault()
    })  // search on click

}) // window.load