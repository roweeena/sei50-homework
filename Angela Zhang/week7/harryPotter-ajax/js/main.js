console.log('Loaded!');

const fetchSearchResults = function( searchText ){
    console.log('fetchSearchResults(): ',);
    const url = `http://hp-api.herokuapp.com/api/characters/house/${ searchText }`  
    axios.get(url)
        .then( function( res ){
            console.log('Success!!', res.data );
            renderSearchRestults( res.data );
        })
        .catch( function(err){
            console.log('Problem', err );
        });
}; // fetchSearchResults 

const renderSearchRestults = function(data){
    console.log('renderSearchResults(): ', data);
    const $output = $('#output');

    $output.html(`<p>${data.length } matches found:</p>`)

    let characters = '<ul>';
    
    data.forEach( function( char ){
        let charName = char.name
        // let firstName = (charName.split(' ')[0]).toLowerCase();

        characters += `
        <li data-char-name ="${ charName }">
            <img src="${char.image}" alt="${ charName } class= "charImage">
            <br>
            ${ charName }
        </li>
        `;
    })

    characters += '</ul>'
    $output.append(characters);

    $('li').on('click', function(){
        const characterProfile = $(this).data('char-name');
        console.log('Character selected',characterProfile);
        //fetchCharcterByName(characterProfile);
        renderCharacterDetails(characterProfile);
    });

};// RenderSearchResults

const fetchCharcterByName = function( searchText ){
    console.log('fetchCharacterByName(): ', searchText );
    const url = `http://hp-api.herokuapp.com/api/characters/house/${ searchText }` 
    axios.get( url )
        .then( function(res){
            console.log('fetchCharacterByName(): ', res.data);
            renderCharacterDetails( res.data );
        })
        .catch( function(err){
            console.log('Problem', err);
        });

};// fetchCharacterByName()

const renderCharacterDetails = function (data){
    console.log('renderCharacterDetails()', data);
    const $details = $('#details');

    $details.html(`
        
    `);

    $('#backButton').on('click',function(){
        $('#details').hide();
        $('#output').show();

    });// back button click handler
};// renderCharacterDetails()




$(function(){
    $('#userQuery').focus();
    $('#searchForm').on('submit',function(ev){
        ev.preventDefault();
        console.log('Form submitted!');

        const query = $('#userQuery').val();

        fetchSearchResults(query);
    });// submit handler




}); // Document Ready