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

    $results.append(`<p>${(data.name)}</p>`)
    let species = '<ul>';
    
    data.abilities.forEach(function( poke ){
        species += `
            <li data-poke-id ="${poke.id}">
            ${poke.ability.name}<br>
            </li>
        `;

    })
    species += '<ul>';

    $results.append(species, `<img src="${data.sprites.front_default}" width="200px">`);
}

const fetchPokemonDetails = function(id){
    console.log('Your Search :', id);

    const url = `https://pokeapi.co/api/v2/ability/${id}`

    axios.get (url)
        .then(function( res ){
            console.log('Sucess', res.data );
            renderPokemonDetails( res.data )
            
        })
        .catch(function(err){
            console.log('problem', err);
        });


}

const renderPokemonDetails = function(ability){
    console.log('renderPokemonDetails', ability);

    $('#details').html(`
    
    
    `)

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