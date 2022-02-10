console.log('console loaded');

const fetchPokemonResults = function(searchText){
    console.log('Results:', searchText);

    const url = `https://pokeapi.co/api/v2/pokemon/${searchText}`

    axios.get (url)
        .then(function( res ){
            console.log('Sucess', res.data );
            renderPokemonResults( res.data )
            
        })
        .catch(function(err){
            console.log('problem', err);
        });
};

const renderPokemonResults = function(data){
    console.log('Search', data);
    const $results = $('#results');

    
    let species = '<ul>';
    
    data.forEach(function( poke ){
        species += `
            <li data-poke-id ="${poke.id}">
            ${poke.name}<br>
            </li>
        `;

    })
    species += '<ul>';

    $results.append(species);
}

const fetchPokemonDetails = function(SearchForm){
    console.log('Your Search :', SearchForm);

    const url = `https://pokeapi.co/api/v2/pokemon/${searchForm}`

    axios.get (url)
        .then(function( res ){
            console.log('Sucess', res.data );
            renderPokemonResults( res.data )
            
        })
        .catch(function(err){
            console.log('problem', err);
        });


}


$(function(){

    $('#userQuery').focus();
    $('#searchForm').on('submit', function(ev){
        ev.preventDefault();
        console.log('form submited');
        const query = $('#userQuery').val();
        fetchPokemonResults(query)

    })


})