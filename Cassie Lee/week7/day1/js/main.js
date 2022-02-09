const loadTrivia = function(){

    const xhr = new XMLHttpRequest();

    xhr.onload = function(){

        const data = JSON.parse(xhr.response);
        movieObj = data.results

        for (let i = 0; i < movieObj.length; i++){
            const dataElement = movieObj[i];
            // console.log('data', dataElement.title);
            $('#output').append(`<img src="https://image.tmdb.org/t/p/w154/${dataElement.poster_path}">`);
            $('#output').append(`<p> Title: ${dataElement.title}</p>`);
            $('#output').append(`<p> Popularity: ${dataElement.popularity}</p>`);
            $('#output').append(`<p> Overview: ${dataElement.overview}</p>`);

        }
         
    }
    
    const userQuery = $('#userQuery').val();


    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`);
    xhr.send();


}


$(function(){
    console.log('DOM is loaded');

    $('#loadMore').on('click', function(){
        loadTrivia();
        $('#output').empty()

    });
    


});