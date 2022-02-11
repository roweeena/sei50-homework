const apiKey = '2f5ac274ecfac5a455f38745704ad084';
const tags = 'hello';

//TODO: figure out how to get the actual photo src with a given id. https://www.flickr.com/services/api/misc.urls.html

const apiRequestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&name=hello&api_key=${apiKey}&content_type=1&tags=${tags}`;
console.log(apiRequestURL);

$(() => {
    axios.get(apiRequestURL)
        .then( response => {
            response.data.photo.forEach( image => {
                //TODO: start attaching these image's ids to the other api request for values
                // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
                image_url = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_s.jpg`;
            })
        })
        .catch( err => {
            console.log(err)
        });
});