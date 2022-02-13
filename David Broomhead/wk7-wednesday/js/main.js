console.log("hello from js")

const fetchSearchResults = function(query) {
    
    const key = '2f5ac274ecfac5a455f38745704ad084';
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&tags=${query}&per_page=15&format=json&nojsoncallback=1`;

    axios.get(url)
    .then(function(res){
        console.log('success',res.data.photos.photo);
        renderSearchResults(res.data.photos.photo)
    })
    .catch(function(err){
        console.log('problem',err)
    });
}; // fetchSearchResults()



const renderSearchResults = function(data){
    console.log('renderSearchResults() running', data)
    const $output = $('#output');

    // $('#instructions').css('display','none');

    // $output.html(`<p>Images from Mars Rover:</p>`)

    $output.empty()

    let imageResults = '<p>';

    data.forEach(function(object){
        imageResults += 
        `
        <div class="flickr-image">
            <img src="https://live.staticflickr.com/${object.server}/${object.id}_${object.secret}_m.jpg" alt="image of ${object.title}">
        </div>
        `
    });

    imageResults += '</p>'

    $output.append(imageResults)

    $('.flickr-image').on('click',showPage)

} // renderSearchResults()


// const thumbnailPath = `https://live.staticflickr.com/${server-id}/${id}_${secret}_q.jpg`;
// const imagePath = `https://live.staticflickr.com/${server-id}/${id}_${secret}_z.jpg`;


const showPage = function(ev){
    
    const $output = $('#output');
    const $imageShow = $('#image-show')

    //hides results
    $output.css('display','none');

    //shows large image
    const image = ev.target.currentSrc
    $imageShow.html(`<img src="${image}" class="image">`);

    $('#image-show').on('click',showResults)

}

const showResults = function(){

    $('.image').css('display','none');

    const $output = $('#output');
    $output.css('display','block');

}

$(function(){
    $('#searchForm').on('submit',function(ev){
        ev.preventDefault();
        console.log('Form submitted!');

        const $query = $('#query').val();
        fetchSearchResults($query);
    });
});
