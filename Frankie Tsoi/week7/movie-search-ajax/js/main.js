

const loadTrivia  = function(){
  const xhr = new XMLHttpRequest(); 


  xhr.onload = function(){
    
    // Use JSON.parse() to turn the response
    //  WHICH IS JUST A JSON STRING, not an object, into a real JS object with keys and values
    const data = JSON.parse(xhr.response);

     window.response = data;

    // console.log('data:', response.results);

    for (let i = 0; i < response.results.length; i++) {
      const currentMovie = response.results[i];
      // console.log(currentMovie.title);
      $('#output').append(`<h1> ${currentMovie.title}</h1> 
      <p> <strong>overview: </strong>${currentMovie.overview}</p> <img src='https://image.tmdb.org/t/p/w154/${currentMovie.poster_path}'>`);
    }; //end of loop

  };

  const userQuery = $('#userQuery').val();

  // xhr.open('GET',`http://www.numbersapi.com/${ userQuery }?json`);
  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`)

  xhr.send();

  console.log('this line runs BEFORE we get a response... too soon');

} // end of Trivia

$(function(){
  console.log(('Dom is loaded'));
  loadTrivia();
  
  $('#loadMore').on('click', function(){
    loadTrivia();
  }); // click handler

}); //document ready callback