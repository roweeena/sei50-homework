const loadList = function(){
    const xhr = new XMLHttpRequest();
    const userQuery = $('#userQuery').val();
    xhr.open('GET', `
    https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`);
    xhr.send();
    xhr.onload = function(){
        const data = JSON.parse(xhr.response)
        data.results.forEach(element => {
            $('#list').append(`<li class="link" value=${element.id}>${element.original_title}</li>`);
            $('#list').append(`<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element.poster_path}" width="150" height="300" class="link">`);
            $('#list').append(`<p>${element.overview}</p>`);
            $('#list').append('<hr>');    
        });
    } // onload()
} // loadList()

$(document).on('click', '.link', function(){
    const id = $('li').attr('value');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `
    https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755`);
    xhr.send();
    debugger;
    xhr.onload = function(){
        const data = JSON.parse(xhr.response)
        $('#title').html(data.original_title)
    }
    $("#list").css("display", "none");
    $("#show").css("display", "block");
}) // on click


$('#searchAgain').on('click', function(){
    $("#show").css("display", "none");
    $("#list").css("display", "block");
    $('#list').empty()
    loadList()
}) // searchAgain
