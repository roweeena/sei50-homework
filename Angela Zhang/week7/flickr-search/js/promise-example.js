console.log('Loaded AJAX Axios')

// axios.get('http://www.numbersapi.com/42?json')
//     .then( function( res ){
//         console.log('We got the data!', res.data.text );
//         return 'hello';
//     })// end of .then()
//     .catch( function( err ){
//         console.log('UH OH! There was a problem:');
//         console.log( err.response.status );
//         console.dir( err );
//     })
//     .then( function(){
//         console.log('We are finished.');
//     })

// axios.get('...').then( f ).catch( f )

const getApiData = async function(){
    
    try{
        const res = await axios.get('http://www.numbersapi.com/42?json');
    
        console.log( 'awaited data', res.data ); // if we get here, the promise is resolved

    }catch( err ){
        console.log('there was a problem:', err );
    } finally {
        console.log('Always run');
    }

    
}; // getApiData()

const result = getApiData();
console.log(result)