
console.log('Ghibli Search:')
$(() => {
    const url = (`https://ghibliapi.herokuapp.com/films/`)
    let userHistory = []
    function homePage(){
        $('.output').html(`home`)
        const top = () => {
            $('.output').append(`<h4>For you:</h4><div class="container top-picks"></div>`)
        axios.get(url)
            .then( (res) => {
                arrAll = []
                function findFavs(title){
                    res.data.forEach((e)=>{
                        if (e.title.includes(title)){
                            renderSearchResults(e)
                        } 
                    }) // forEach
                } // findFavs
                favourites = ["Porco Rosso", "Howl's Moving Castle", "Ponyo", "Kiki's Delivery Service", "Spirited Away"]
                favourites.forEach((e)=>{
                    findFavs(e)
                })
                res.data.forEach((e)=>{
                    e.rt_score = parseInt(e.rt_score) // ty ro!!!!!!!!!!!!!!!!!!!!!!!!!
                    arrAll.push(e)
                })

                function compare(a,b){ 
                    if(a.rt_score < b.rt_score){
                        return -1
                    }
                    if (a.rt_score > b.rt_score){
                        return 1;
                    }
                    return 0;
                }
                arrAll.sort(compare)
                arrAll.reverse()
                $('.output').append(`<h4>Top picks: </h4><div class="container reccomendations">`)
                let counter = 0
                arrAll.forEach((e)=>{
                    if (counter < 10){
                        counter++
                        $('.reccomendations').append(
                        `<div class="home-film">
                        <div class="show-title" id="${e.id}">
                            ${e.title}
                        </div>
                        <div class="show-poster" id="${e.id}">
                            <img src="http://image.tmdb.org/t/p/w185${e.image}" alt="${e.title}" id="${e.id}">
                        </div>
                    </div>`
                    )}
                })

            }) // then
            .catch( (err) => {
                console.log('Problem!', err)
            })
        }
        top()
    } homePage()

    function fetchSearchResults(searchText){
        $('.output').html(`<p> Results </p><div class="container"></div>`)
        axios.get(url)
            .then( (res) => {
                outputData = res.data.forEach((e)=>{
                    if (e.title.includes(searchText) || e.original_title.includes(searchText)){
                        renderSearchResults(e)
                    } 
                }) // forEach
                
            }) // then
            .catch( (err) => {
                console.log('Problem!', err)
            })// catch

    } // fetchSearchResults()

    function renderSearchResults(data){
        // console.log('renderSearchResults()', data)
        const $output = $('.container');
        $output.append(`
            <div class="home-film">
                <div class="show-title" id="${data.id}">
                    ${data.title}
                </div>
                <div class="show-poster" id="${data.id}">
                    <img src="http://image.tmdb.org/t/p/w185${data.image}" alt="${data.title}" id="${data.id}">
                </div>
            </div>
        `)
        
    }

    function renderFilmPage(id){
        axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then( (res) => {
                $('.output').html('')
                $('.output').append(`
                <div class="show-page">
                    <div class="titles">
                        <div class="page-title">
                            ${res.data.title}
                        </div>
                        <div class="page-title-original">
                            ${res.data.original_title}
                        </div>
                        <div class="release">
                            (${res.data.release_date})
                        </div>
                    </div>
                    <div class="poster">
                        <img src="http://image.tmdb.org/t/p/w185${res.data.image}" alt="${res.data.title}" id="${res.data.id}">
                    </div>
                    <div class="header">
                        <img src="http://image.tmdb.org/t/p/w185${res.data.movie_banner}" alt="${res.data.title}" id="${res.data.id}">
                    </div>
                    <div class="overview">
                        ${res.data.description}
                    </div>
                    
                    <div class="misc">
                        <div class="director">
                            Director: ${res.data.director}
                        </div>
                        <div class="producer">
                            Producer: ${res.data.producer}
                        </div>
                        <div class="runtime">
                            Runtime: ${res.data.running_time} minutes
                        </div>
                    </div>
                    <div class="score">
                        Score: ${res.data.rt_score}%
                    </div>
                </div>
                `)
            })
            .catch( (err) =>{
                console.log('Problem!', err)
            })
            // twoBack = lastSpot 
            // lastSpot = 'show'
            lastShow = id
    }

    // function renderSearchBox(query){
    //     $('body').append()
    // }


    $(function(){
        $('#searchForm').on('submit', (ev) => {
            ev.preventDefault();
            const query = $('#userQuery').val()
            fetchSearchResults(query);
            userHistory.push(query)
        })
        $('#userQuery').keyup(function(e){
            console.log($(this).val());
            checkblank()
            fetchSearchResults($(this).val())
            // console.log(input)
        })
        function checkblank(){
            if (!$('#userQuery').val()){
                console.log('search empty')
            }
        }
        checkblank()
        

        $('#goHome').on('click', () => {
            $('.output').html('<div id="homeOutput"></div>') 
            homePage();
        });
        
        $("#back").on('click', (e) => {
            if (userHistory.length===0){
                homePage()
            } else{
                userHistory.pop()
                let dest = userHistory[userHistory.length - 1]
                console.log(dest)
                fetchSearchResults(dest)
            }
        })
        $(".output").on('click', '.home-film',(e) => {
            renderFilmPage(e.target.id)
        })
    }) 

}) // DOM


// FIX: 
//      if you type too fast, too many results are appended. Maybe need await? 
//      For you and top picks should be able to have a next and back function. need an 
//          array of the ids in the list and just render them based chosen index.