const searchMovies = function () {
  const xhr = new XMLHttpRequest(); // make a new instance
  xhr.onload = function () {
    const data = JSON.parse(xhr.response);

    data.results.forEach((result) => {
      $("<div>", {
        id: `${result.id}`,
        class: "result-item",
      }).appendTo("#results-wrapper");

      $("<h3>", {
        text: `${result.original_title}`,
      }).appendTo(`#${result.id}`);

      $("<img>", {
        class: "poster",
        src: `http://image.tmdb.org/t/p/w185/${result.poster_path}`,
      }).appendTo(`#${result.id}`);

    });
  };

  const searchField = $("#search-field").val();

  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchField}`
  );

  xhr.send(); 

};

const moreDetails = function (id) {
  const xhr = new XMLHttpRequest(); // make a new instance
  
  xhr.onload = function () {
    const data = JSON.parse(xhr.response);

    console.log(data);

    $('<div>',{
      class: 'single-movie',
      
    })
    
  };

  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755`
  );

  xhr.send(); 
};



$(function () {
  console.log("DOM is loaded");

  $("#search-button").on("click", function () {
    $('#results-wrapper').empty()
    searchMovies();
  });

  $("#content-wrapper").on('click', '.result-item', function(e){

    moreDetails(e.currentTarget.id)
  })

}); //document ready callback
