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

    $results.show()
    $('#details').hide()


    $results.append(`
    
    <ul>
        <li data-id="${data.id}">
        <p>Name: ${(data.name)}</p>
        <p>Height: ${(data.height)}</p>
        <p>Weight: ${data.weight}</p>
        <img src="${data.sprites.front_default}" width="200px"></img>
        </li>
    </ul>

    `)

    $('li').on('click', function(){
        const photoID = $(this).data('id')
        console.log('photoid clicked', photoID);
        fetchPokemonDetails(photoID)
    })
}

const fetchPokemonDetails = function(id){
    console.log('Your Search :', id);

    const url = `https://pokeapi.co/api/v2/ability/${id}`

    axios.get (url)
        .then(function( res ){
            console.log('idSucess', res.data );
            renderPokemonDetails( res.data )
            
        })
        .catch(function(err){
            console.log('problem', err);
        });


}

const renderPokemonDetails = function(ability){
    console.log('renderPokemonDetails', ability);

    $('#results').hide();
    $('#details').show();
    
    let pokeAbilities = '<ul>';
    
    $('#details').html(`
    
    <h3> The skill name: ${ability.name}<h3>
    <h3> Other pokemons that uses ${ability.name} are <h3>
    
    `)

    ability.pokemon.forEach(function( poke ){
        pokeAbilities += `
            
            <li>
            <p> ${poke.pokemon.name}</p> <br>
            </li>

            `;
            
        })
    
    
    pokeAbilities += '<ul>';

    $('#details').append(`<button id = "backButton"> Back to results </button>`, pokeAbilities)

    $('#backButton').on('click', () => {
        $('#details').hide();
        $('#results').show();
    })

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