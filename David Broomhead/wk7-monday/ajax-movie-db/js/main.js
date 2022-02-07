console.log('Javascript loaded')



const loadMovies = function(){

    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){
  
        const data = JSON.parse(xhr.response);

        results = data.results

        $('.results').html("")

        for (let i = 0; i < results.length; i++) {

            const $newSpace = $("<div></div>");
            $newSpace.addClass('movie');
            
            const element = results[i];
            $newSpace.html(`Title: ${element.original_title} <br> Popularity: ${element.popularity} <br> Overview: ${element.overview}`);

            $('.results').append($newSpace);
        }

        console.log('data:', data);

        // $('#output').html(`<p>${data.text}</p>`); 
  
    } // xhr.callback
  
  
    const userQuery = $('#userQuery').val(); 
  
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`);
    xhr.send(); 
  
  }; // loadMovies
  
  
  $(function(){
        console.log('DOM is loaded');
        //loadMovies()

        $('#loadMore').on('click', function(){
            loadMovies();
        }); // click handler
  
  }); 

