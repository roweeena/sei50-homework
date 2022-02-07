// Create a Single-Page App interface to themoviedb.org which lets users search for a movie by title and shows the results on the same page, using XMLHttpRequest and jQuery.
// Consider also showing the movie popularity and overview text. Bonus points for showing a movie poster thumbnail for each movie.
// If a new search is performed, the old search results should be replaced!
// BONUS: Make each search result clickable, and use it to take the ID of the clicked movie and perform a different AJAX request to the API endpoint which gives detailed info about a movie by ID (RTFM). This lets you print out budgets, genres, cast, longer plot synopsis etc. When viewing this show page, the search results should be hidden, and when a new search is performed, the show page details should be hidden!
$(function(){
    $('#search').on('click', search )
    
});

function search(){
    searchQuery = $('#userQuery').val();
    
    // using xmlhttprequests get open and get a respons
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        const data = JSON.parse(xhr.response);

        // for each data results instance make a h3, and a overview
        
        n = 0;
        data['results'][n]['title'];
        data['results'][n]['poster_path'];
        data['results'][n]['overview'];

        data['results'].forEach(movie => {
            console.log(movie)
            container = $('<div></div>')
            container.append($(`<h3>${movie['title']}</h3>`))
            container.append($(`<h4>${movie['overview']}</h4>`))

            $('body').append(container)
        });
    }

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchQuery}`)
    xhr.send();
}