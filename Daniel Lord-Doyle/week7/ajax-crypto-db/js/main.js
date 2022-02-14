const fetchSearchResults = function(searchText) {
    console.log('fetchSearchResults: ', searchText)

    const getData = async function() {
        try {
            searchResults = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchText}`);    
            renderSearchResults(searchResults.data)
        } catch (error) {
            console.log('There was an error!', error)
        }
    };
    getData()
}

$(function(){

    $('#userQuery').focus();

    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        fetchSearchResults($('#userQuery').val())
    })
})

const renderSearchResults = function() {

    console.log(searchResults.data)

    let coins = '<ul>';

    searchResults.data.coins.forEach(function(coin){
        console.log( coin );
        coins += `
        <li data-coin-id="${ coin.id }">
            <img src="${ coin.large }" alt="${ coin.title }">
            <br>
            <h1>Name: ${ coin.name }</h1>
            <h3>Rank: ${coin.market_cap_rank}</h3>
        </li>
        `;
    });

    coins += '</ul>';

    $('#output').append( coins );

    $('li').on('click', function(){
        const coinID = $(this).data('coin-id');
        console.log('Coin clicked', coinID );
        fetchCoinByID( coinID );
    });

   }

const fetchCoinByID = function( id ){
  console.log('fetchCoinByID(): ', id);

  const url = `https://api.coingecko.com/api/v3/coins/${ id }`;
  axios.get( url )
    .then( function( res ){
      console.log('Coin info:', res.data );


      $('#output').hide();
      $('#details').show();

      $('#details').html(`
        <h3>Name: ${ res.data.name } | ${res.data.symbol}</h3>
        <img src="${ res.data.image.small }" alt="${ res.data.name }">
        <p>${ res.data.description.en }</p>
        <p>
          <strong>Current Price:</strong> AUD$${ res.data.market_data.current_price.aud }<br>
          <strong>Price Change % (30days):</strong> ${ res.data.market_data.price_change_percentage_30d }%<br>
          <strong>Price Change % (200days):</strong> ${ res.data.market_data.price_change_percentage_200d }%<br>
          <strong>All-Time High:</strong> AUD$${ res.data.market_data.ath.aud }<br>
          <strong>Market Cap:</strong> AUD$${ res.data.market_data.market_cap.aud }<br>
        </p>
        <button id="backButton">Back to Results</button>
      `);

      $('#backButton').on('click', function(){
        $('#details').hide();
        $('#output').show();
      }); // back button click handler

    })
    .catch( function( err ){
      console.log('Error loading Movie:', err);
    });

};