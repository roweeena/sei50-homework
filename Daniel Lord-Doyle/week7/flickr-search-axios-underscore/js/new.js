console.log('main.js loaded')

const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest'

https://api.flickr.com/services/rest/flickr.photos.getInfo&id=51872559379&secret=e263694a75&api_key=2f5ac274ecfac5a455f38745704ad084


$(function() {

    // return the data for an image index TODO: replace text with a search query
    const getData = async function(query) {
        console.log(query)
        data = await axios.get(FLICKR_BASE_URL, {
            // headers: 
            params: {
                //axios will combine these key-value pairs into the query string for us
                method: 'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                text: query
            }
        })
        .then( function( res ) {
            displayPhotos(res.data.photos.photo)
        })
        .catch( function( err ) {
            console.log('AJAX ERROR', err)
        })
    }

    const getPhoto = async function(id) {
        data = await axios.get(FLICKR_BASE_URL, {
            // headers: 
            params: {
                //axios will combine these key-value pairs into the query string for us
                method: 'flickr.photos.getInfo',
                api_key: FLICKR_API_KEY,
                format: 'json',
                nojsoncallback: 1,
                photo_id: id
            }
        })
        .then( function( res ) {
            showPhoto(res.data.photo)
        })
        .catch( function( err ) {
            console.log('AJAX ERROR', err)
        })
    }

    const convertIntoImageLink = function (server_id, id, secret, size_suffix) {
        // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
        const baseURL = 'https://live.staticflickr.com/';
        return `${baseURL}${server_id}/${id}_${secret}_${size_suffix}.jpg`
    }

    const displayPhotos = function (data) {
        console.log('data passed to displayPhotos()', data)

        $('#imageIndex').empty()

        let photos = '<ol>'

        data.forEach(function (datum) {
            imageURL = convertIntoImageLink(datum.server, datum.id, datum.secret, 'q')
            // console.log(imageURL)
            photos += `<li data-photo-id="${ datum.id }">
                        <img src="${ imageURL }" alt="${ datum.title }">
                      </li>`
        })

        photos += '</ol>'

        $('#imageIndex').append( photos );

        $('li').on('click', function(){
            const photoID = $(this).data('photo-id');
            // console.log('Image clicked', photoID );
            getPhoto( photoID );
        });

    }

    const showPhoto = function (photo) {
        console.log(photo)

        $('#imageIndex').hide();
        $('#imageShow').show();

        tagsArray = []

        const tags = function (photo) {
            tagArray = photo.tags.tag
            tagArray.forEach( function(tag) {
                tagsArray.push(tag.raw)
            })
            tagsList = tagsArray.join(', ')
            console.log(tagsList)
        }

        tags(photo)
        console.log(photo.urls.url[0]._content)

        $('#imageShow').html(`
            <h3>Title: ${ photo.title._content }</h3>
            <img src="${ convertIntoImageLink(photo.server, photo.id, photo.secret, 'c') }" alt="${ photo.title._content }">
            <p>${ photo.description._content }</p>
            <p><strong>Photographer:</strong>${ photo.owner.username }</p>
            <p id='tags'><strong>Tags:</strong> ${ tagsList } </p>
            <button id="backButton">Back to Results</button>
        `);

        $('#backButton').on('click', function(){
            $('#imageShow').hide();
            $('#imageIndex').show();
          }); // back button click handler


    }

    // button handler
    $('#userQuery').focus();

    $('#searchForm').on('submit', function(event) {

        event.preventDefault();
        console.log('Form submitted');

        // pass what user has written in the search form in to fetchSearchResults
        getData($('#query').val())

    }) // submit handler

}); // doc ready