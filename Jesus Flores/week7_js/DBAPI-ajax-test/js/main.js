// const sayHello = function(){
//     console.log("oh hello");
// }


// const runNicely = function(functionToRun) {
//     console.log('Hi let me run nicely etc...');
//     functionToRun();
//     console.log('It was so nice etc etc ....')
// }

// const each = function(array, callback){
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]);
//     }
// }
// const arr = ['first','second','third'];

// each(arr, function(item){
//     console.log("Inside callback", item);
// })

https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=cars//
//https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1
//https://api.themoviedb.org/3/movie/425909?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US

$(function(){
  const appendToUl = $("#elements");
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1');
  xhr.send()
  xhr.onload = function(){
    data = JSON.parse(xhr.response)
     data.results.forEach(el => {
       
       appendToUl.append(`<ul>
                            <li class="get-movie" id="${el.id}"> <img src="http://image.tmdb.org/t/p/w185/${el.poster_path}" /> <h6 class="movie-title">${el.title}</h6></li>
                          </ul>`)
     });
     getMovie();
     search();
  } 

  const getMovie = function(){
    $(".get-movie").on("click",function(){
      const id = $(this).attr("id");
      const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US`);
        xhr.send()
        xhr.onload = function(){
          data = JSON.parse(xhr.response)
          console.log(data);
          appendToUl.html("");
          appendToUl.append(`<ul class="grid-info">
                            <li class="get-movie" id="${data.id}">
                             <img src="http://image.tmdb.org/t/p/w185/${data.poster_path}" /> 
                             <h6 class="movie-title">${data.title}</h6>
                             <p> ${data.overview} </p?
                             </li>
                           </ul>`)
        } 
    })
  }

  const search = function(){
    $("#btnSearch").on("click",function(){
      const name = $("#searchMovie").val()
      const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${name}`);
        xhr.send()
        xhr.onload = function(){
          appendToUl.html("");
          data = JSON.parse(xhr.response)
          data.results.forEach(el => {
                appendToUl.append(`<ul>
                                      <li class="get-movie" id="${el.id}"> <img src="http://image.tmdb.org/t/p/w185/${el.poster_path}" /> <h6 class="movie-title">${el.title}</h6></li>
                                </ul>`)
          });
          getMovie();
        } 
    })
  }

});

