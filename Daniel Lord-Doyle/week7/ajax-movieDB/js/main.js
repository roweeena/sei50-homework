const loadFilms = function(){

  const xhr = new XMLHttpRequest(); // make a new instance

  xhr.onload = function(){

    const data = JSON.parse( xhr.response );

    window.Response = data;

    console.log('data:', data.text);

    // $('#output').html(`<p>${data.text}</p>`); // add to the page!

    const filmsObject = data.results
    console.log(filmsObject)
    const numberOfFilms = filmsObject.length
    console.log(numberOfFilms)
    const firstFilm = filmsObject[0]
    console.log(firstFilm)
    $('#films-list h1').remove()
    $('#films-list p').remove()
    $('#films-list img').remove()


        for (let index = 0; index < numberOfFilms; index++) {
            const title = filmsObject[index].title;
            const overview = filmsObject[index].overview
            const imageURL = filmsObject[index].poster_path
            $('#films-list').append(`<img src='https://image.tmdb.org/t/p/w300/${imageURL}'>`); // add to the page!
            $('#films-list').append(`<h1>${title}</h1>`); // add to the page!
            $('#films-list').append(`<p>${overview}</p<`)
        }

  } // onload callback

  const userQuery = $('#userQuery').val(); // get form input contents

  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ userQuery }`);
  xhr.send(); // This line DOES NOT BLOCK, unlike Ruby

  // console.log('This line runs BEFORE we get a response... too soon!'); // asynchronous
  
}; // loadFilms()

$(function(){
    
    console.log('DOM is loaded!');

    $('#loadMore').on('click', function() {
    
    loadFilms();

    }); // click handler

    

}); // document ready callback