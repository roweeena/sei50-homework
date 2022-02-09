console.log('Loaded!');

const fetchSearchResults = function( searchWord ){
  console.log('fetchSearchResults(): ', searchWord);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=jti3xBGEdwwauf1muQ3bIJEDBjZJJr60&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`;

  axios.get(url)
  .then(function(res){
    console.log('Success!', res.data);
    renderSearchResults(res.data);
  })
  .catch(function(err){
    console.log('Problem!', err);
  });

}; // fetchSearchResults

const renderSearchResults = function( data ){
  console.log('renderSearchResults()', data);
  const $output = $('#output');
  // $output.show(); // incase some submits a search from a show page ie results are hidden
  // $('#details').hide();
  
  $output.html(`<p>${data.pagination.total_count} matches found: </p>`)
  
  let giphys = '<ul>';
  data.data.forEach(function(giphy){
    // console.log(giphy);
    giphys +=`
    <li data-giphy-id="${giphy.id}">
    
      ${giphy.title}
    </li>
    `;
  });
  giphys += '</ul>';

  $output.append(giphys);

  //After the append above is done, add a click handler for all the new <li> tags
  $('li').on('click', function(){
    const giphyID = $(this).data('giphy-id')
    console.log('giphy clicked', giphyID);
    fetchMovieByID(giphyID);
  })

};


$(function(){

  $('#userQuery').focus();

  $('#searchForm').on('submit', function( ev ){
    ev.preventDefault();
    console.log('Form submitted!');

    const query = $('#userQuery').val();

    fetchSearchResults(query);
  })


}) //document ready