// Try to create a search page and a show (details) page, using at least two API requests

// using the geo coords function, we can get the coordinates of locations

// TODO: iterate through the lat long points to get the values of the locations. 
console.log('Nasa query form loaded')

$(function() {
    $('#lat').focus();

    $('#search').on('submit', function(ev) {
        ev.preventDefault();

        search();
    })

    $('#geocode').on('click', function(ev){
        const address = $('#address').val();
        convertAddress2GeoCode(address);
    })
    // axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}.75&lat=${lat}&date=${date}&api_key=${nasa_api_key}`);
});


function search() {
    console.log('form submitted')
    //TODO: perform the axios get request
    const lat = $('#lat').val();
    const lon = $('#lon').val();
    const date = '2018-01-01'// $('#date').val(); //yyy-mm--dd (optional).val()
    const dim = $('#dim').val(); //width and height of image in degrees
    const apiKey = 'Y3DDqVZTa23oDDvIuzdp8HotSVQdXVXZ5WmfZ5fs';
    const requestURL = `https://api.nasa.gov/planetary/earth/assets?lat=${lat}&lon=${lon}&date=${date}&api_key=${apiKey}`

    //TODO: make it so that if the thing returns false we should iterate and try out different dates
    axios.get(requestURL)
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
        
    }).catch( function(err) {
        $('#error').text(err)
    });
}


// 29.78
// -95.33