console.log("hello from js")

const fetchSearchResults = function(earthDate,camera) {
    
    const key = 'ck6JfRaH5OyKQUHFxZ3BpB6bmqyGt9jlHHYqb4ez';
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}}&camera=${camera}&api_key=${key}`;

    axios.get(url)
    .then(function(res){
        console.log('success',res.data.photos);
        renderSearchResults(res.data.photos)
    })
    .catch(function(err){
        console.log('problem',err)
    });
}; // fetchSearchResults()

const renderSearchResults = function(data){
    console.log('renderSearchResults() running', data)
    const $output = $('#output');

    $('#instructions').css('display','none');

    $output.html(`<p>Images from Mars Rover:</p>`)

    let marsImages = '<p>';

    data.forEach(function(object){
        marsImages += 
        `
        <div class="rover-photo">
            <a href="${object.img_src}">
            <img src="${object.img_src}" alt="image from ${object.camera.full_name} on ${object.rover.name}">
            </a>
        </div>
        `
    });

    marsImages += '</p>'

    $output.append(marsImages)


} // renderSearchResults()

$(function(){
    $('#searchForm').on('submit',function(ev){
        ev.preventDefault();
        console.log('Form submitted!');

        const earthDate = $('#earthDate').val();
        const camera = $('#camera').val();
        fetchSearchResults(earthDate,camera);
    });
});

