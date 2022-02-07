//https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien

const displayResults = function() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function(){
    $('#output').html('');
    const data = JSON.parse( xhr.response );
    for(let i = 0; i < data.results.length; i ++){
      $('#search-results').html(`Search results for : ${userQuery}`)
      $('#output').append(
        `<div class="movie-link" id="${data.results[i].id}">
          <img src="https://image.tmdb.org/t/p/w200${data.results[i].poster_path}">
          <p>${data.results[i].title}</p>
          <p>${data.results[i].overview}</p>
          <p>${data.results[i].release_date}</p>
          <p>${data.results[i].popularity}</p>
        </div>`
      );
    } // end forloop
    $(".movie-link").on('click', function(){
      const movie_id = $(this).attr('id'); 
        viewDetails(movie_id);
    });
  } //end onload
  const userQuery = $('#userQuery').val();

  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`);
  xhr.send();
  
} //end display resuplts

const viewDetails = function(movieId){
  const xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    $('#output').html('');
    const data = JSON.parse( xhr.response );
    $('#search-results').html(`${data.title}`)

      $('#output').append(
        `<div class="movie-link"">
          <img src="https://image.tmdb.org/t/p/w200${data.poster_path}">
          <p>${data.title}</p>
          <p>${data.overview}</p>
          <p>${data.release_date}</p>
          <p>${data.budget}</p>
        </div>`
      );
    
  }

  xhr.open('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=24d863d54c86392e6e1df55b9a328755&query=&language=en-US`);
  xhr.send();
} // end viewDetails

$(function(){

  $("#loadMovies").on('click', function(){
    displayResults();
  });



});

 