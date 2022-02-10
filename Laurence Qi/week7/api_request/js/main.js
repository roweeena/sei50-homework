// Try to create a search page and a show (details) page, using at least two API requests

// using the geo coords function, we can get the coordinates of locations

// TODO: iterate through the lat long points to get the values of the locations. 
console.log('Nasa query form loaded')

//TODO: use the search params hash with axios
//TODO: refactor all of this code to have clean layout with separated concerns
//TODO: implement vue for the forms etc. 
//TODO: convert to an await async function

$(function() {
    $('#lat').focus();

    // add searching NASA satellite images by their Latitude and Longitude values. 
    $('#search').on('submit', function(ev) {
        ev.preventDefault();
        search();
    })

    // Convert address to geocodes and populate the above search fields
    $('#geocode').on('click', function(ev){
        const address = $('#address').val();
        convertAddress2GeoCode(address);
    })
    // axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}.75&lat=${lat}&date=${date}&api_key=${nasa_api_key}`);
});

function search() {
    const lat = $('#lat').val();
    const lon = $('#lon').val();
    const date = '2018-01-01'// NOTE: this is an arbitrary date, I found that contrary to the docs, any date will not work. NASA API will not find images beyond 5 years from the query date. 
    // const dim = $('#dim').val(); //width and height of image in degrees //FIXME: didn't find how to search for this. 
    const apiKey = 'Y3DDqVZTa23oDDvIuzdp8HotSVQdXVXZ5WmfZ5fs';
    const NASA_BASE_URL = 'https://api.nasa.gov/planetary/earth/assets'

    axios.get( NASA_BASE_URL, {
            params: {
                lat: lat, 
                lon: lon, 
                date: date, 
                api_key: apiKey, 
            }
        })
        .then( function(data) {
            const title = $(`<h3>Photo taken on ${data.data.date}<h3>`);
            const map_iframe = $(`<iframe width="400" height="300" style="border:0" loading="lazy" src=https://www.google.com/maps/embed/v1/view?key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko&center=${lat},${lon}&zoom=18&maptype=satellite></iframe>`)
            const img = $(`<img src="${data.data.url}" class="result"><img>`);
            // console.log(`<iframe width="400" height="300" style="border:0" loading="lazy" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko&center=${lat},${lon}&maptype=satellite"></iframe>`)
            $('#error').text('')
            $('#output').empty().append(title).append(map_iframe).append(img);
        })
        .catch( function(err) {
            $('#error').text(err)
        });
}

//TODO: use the geocoding api to get an address for the long lat values
function convertAddress2GeoCode(address) {
    const urlAddress = address.replaceAll(' ', '+')
    console.log(urlAddress)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko`)
    .then( function(response) {
        const coords = response.data.results[0].geometry.location // 12 bowler ave fairfield nsw australia
        console.log(coords)
        $('#lat').val(coords.lat);
        $('#lon').val(coords.lng);
        //TODO: look into the geocoded gem at the model level (RUBY).  USING THE GEO LOCATION API FROM THE BROWSER 
    }).catch( function(err) {
        $('#error').text(err)
    });
}
