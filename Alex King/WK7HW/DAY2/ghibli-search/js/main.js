
console.log('Ghibli Search:')
$(() => {
    const url = (`https://ghibliapi.herokuapp.com/films/`)
    let lastSpot = ''
    function homePage(){
        $('.output').html(`home`)
        const top = () => {
            $('.output').append(`<h4>Alex's top picks:</h4><div class="container"></div>`)
        axios.get(url)
            .then( (res) => {
                function findFavs(title){
                    res.data.forEach((e)=>{
                        if (e.title.includes(title)){
                            renderSearchResults(e)
                        } 
                    }) // forEach
                }
                favourites = ["Porco Rosso", "Howl's Moving Castle", "Ponyo", "Kiki's Delivery Service", "Spirited Away"]
                favourites.forEach((e)=>{
                    findFavs(e)
                })
            }) // then
            .catch( (err) => {
                console.log('Problem!', err)

            })
        }
        const all = () => {
            $('.output').append(`<h4>Today's reccomendations:</h4>`)
        }
        
        top()
        // all()

        lastSpot = 'home'

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
        lastSpot = searchText
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

    $(() =>{
        $('#searchForm').on('submit', (ev) => {
            ev.preventDefault();
            const query = $('#userQuery').val()
            fetchSearchResults(query);
        })
        $('#goHome').on('click', () => {
            $('.output').html('<div id="homeOutput"></div>') 
            homePage();
        });
        $(".output").on('click', (e) => {
            renderFilmPage(e.target.id)
        })
        $("#back").on('click', (e) => {
            if (lastSpot === 'home'){
                homePage()
            } 
            // else if (lastSpot === 'show'){
            //     renderFilmPage(lastShow)
            // }
             else {
                fetchSearchResults(lastSpot)
            }
            console.log(lastSpot)
        })
    }) 

}) // DOM