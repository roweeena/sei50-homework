
$(() => {
    // console.log('DOM LOADED')

    function homePage(){
        $('#output').html(`<h4>Today's top picks:`)

        function popularSort(){
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
                $('#output').append(`<h5>Popular:</h5><div id="topOutput"></div>`)
                const data = JSON.parse(xhr.response);
    
                for (let i = 0; i<10; i++){
                    let a = data.results[i]
                    $('#topOutput').append(
                        `<div class="homefilm" id="${a.id}"> 

                            <div class="hometitle" id="${a.id}">
                                ${a.title}
                            </div> 
    
                            <div class="homeposter" id="${a.id}">
                                <img src="https://image.tmdb.org/t/p/w200/${a.poster_path}" id="${a.id}">
                            </div>
    
                            <div class="homescore" id="${a.id}">
                                ★${a.vote_average}
                            </div>
    
                        </div>`)
                } // for loop
                // $('.homefilm').on('click', (e) => {
                //     getFilm(e.target.id)
                //     window.open(`https://www.themoviedb.org/movie/${e.target.id}?language=en-US`)
                // })
            } //xhr.onload
            xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1')
            xhr.send();

        } //popularSort()

        function topSort(){
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
                $('#output').append(`<h5>Top Rated:</h5> <div id="ratedOutput"></div>`)
                const data = JSON.parse(xhr.response);
    
                for (let i = 0; i<10; i++){
                    let a = data.results[i]
                    $('#ratedOutput').append(
                        `<div class="homefilm" id="${a.id}"> 

                            <div class="hometitle" id="${a.id}">
                                ${a.title}
                            </div> 
    
                            <div class="homeposter" id="${a.id}">
                                <img src="https://image.tmdb.org/t/p/w200/${a.poster_path}" id="${a.id}">
                            </div>
    
                            <div class="homescore" id="${a.id}">
                                ★${a.vote_average}
                            </div>
    
                        </div>`)
                } // for loop
                $('.homefilm').on('click', (e) => {
                    getFilm(e.target.id)
                })
            }
            xhr.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1&primary_release_date.gte=2021-12-01')
            xhr.send();
        } // topSort()

        popularSort()
        topSort() 

        
    } //homePage()
    homePage()

    function getFilm(filmID){
        $('#output').html('')
        const xhr = new XMLHttpRequest();
            xhr.onload = function(){
                const data = JSON.parse(xhr.response);
                window.Response = data;
                $('#output').append(
                    `<div class="showFilm">
                        <div class="title">
                            ${data.original_title}
                        </div>

                        <div class="backdrop">
                            <img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">
                        </div>

                        <div class="showPoster">
                            <img src="https://image.tmdb.org/t/p/w200/${data.poster_path}">
                        </div>

                        <div class="overview">
                            ${data.overview}
                        </div>
                        <div class="score">
                            <div class="number">
                                ★${data.vote_average}
                            </div>

                            <div class="votes">
                                votes: ${data.vote_count}
                            </div>
                        </div>

                        <div class="tagline">
                                ${data.tagline}
                        </div>

                        <div class="misc">
                            <div class="genres">
                                Genre: ${data.genres[0].name}
                            </div>

                            <div class="company">
                                Studio: ${data.production_companies[0].name}
                            </div>

                            <div class="release">
                                release: ${data.release_date}
                            </div>


                            <div class="runtime">
                                runtime: ${data.runtime}
                            </div>
                        </div>
                    </div>    
                    `)
                    
            }
        xhr.open('GET', `https://api.themoviedb.org/3/movie/${filmID}?api_key=24d863d54c86392e6e1df55b9a328755`)
        xhr.send();
    }


    function loadFilm(){
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            const data = JSON.parse(xhr.response);
            window.Response = data;

            resultsLoop = data.results.forEach((a) => {
                $('#output').append(
                    `<div class="film" id="${a.id}"> 
                        <div class="title" id="${a.id}">
                            ${a.title}
                        </div> 

                        <div class="poster" id="${a.id}">
                            <img src="https://image.tmdb.org/t/p/w200/${a.poster_path}">
                        </div>

                        <div class="release" id="${a.id}">
                            ${a.release_date}
                        </div>

                        <div class="score" id="${a.id}">
                            ★${a.vote_average}
                        </div>

                    </div>`)
            });
            $('.film').on('click', (e) => {
                getFilm(e.target.id)
            })
            // console.log(resultsLoop)
        }
        const userQuery = $('#userQuery').val();
        // console.log(userQuery)
        xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${userQuery}`)
        xhr.send();

        // console.log('This line runs BEFORE we get a response... too soon!')
    } // loadFilm
    
    $(() => {
        // loadFilm();
        $('#loadMore').on('click', () => {
            $('#output').html('')
            loadFilm();
        });

        $('#goHome').on('click', () => {
            $('#output').html('<div id="homeOutput"></div>') 
            homePage();
        });

        $('#topOutput').on('click', '.homefilm', () =>{
            $('#output').html('')
            console.log('hello')
            $(this).attr("id")
        })
    }); 

}); //

// function homePage(){
//     return new Promise(resolve => {
//         setTimeout( () => {
//             $('#output').html(`<h4>Today's top picks:`)

//             function popularSort(){
//                 const xhr = new XMLHttpRequest();
//                 xhr.onload = function(){
//                     $('#output').append(`<h5>Popular:</h5><div id="topoutput"></div>`)
//                     const data = JSON.parse(xhr.response);
        
//                     for (let i = 0; i<10; i++){
//                         let a = data.results[i]
//                         $('#topoutput').append(
//                             `<div class="homefilm" id="${a.id}"> 
//                                     <div class="hometitle">
//                                         <p>${a.title}</p>
//                                     </div> 
            
//                                     <div class="homeposter">
//                                         <img src="https://image.tmdb.org/t/p/w200/${a.poster_path}">
//                                     </div>
            
//                                     <div class="homescore">
//                                         <p>★${a.vote_average}</p>
//                                     </div>
            
//                                 </div>`)
//                     }
//                 } 
//                 xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1')
//                 xhr.send();
//             } //popularSort()
    
//             function topSort(){
//                 const xhr = new XMLHttpRequest();
//                 xhr.onload = function(){
//                     $('#output').append(`<h5>Top Rated:</h5> <div id="ratedoutput"></div>`)
//                     const data = JSON.parse(xhr.response);
        
//                     for (let i = 0; i<10; i++){
//                         let a = data.results[i]
//                         $('#ratedoutput').append(
//                             `<div class="homefilm"> 
//                                 <div class="hometitle">
//                                     <p>${a.title}</p>
//                                 </div> 
        
//                                 <div class="homeposter">
//                                     <img src="https://image.tmdb.org/t/p/w200/${a.poster_path}">
//                                 </div>
        
//                                 <div class="homescore">
//                                     <p>★${a.vote_average}</p>
//                                 </div>
        
//                             </div>`)
//                     }
//                 }
//                 xhr.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1&primary_release_date.gte=2021-12-01')
//                 xhr.send();
                
//             } // topSort()

//             popularSort()
//             topSort() 

//             resolve('resolved')
        
//         }, 10)
        
//     })
    
// } //homePage()

// // homePage()
// async function allowClick(){
//     console.log('waiting')
//     const result = await homePage();
//     console.log('done')
//     console.log(result)
//     $('.homefilm').on('click', () => {
//         $('#output').html('')
//         console.log('hello')
//         $(this).attr("id")
//     })
// }
// allowClick()