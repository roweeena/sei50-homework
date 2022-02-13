console.log('Loaded AJAX Axios');

    // WHAT IS A PROMISE?

    // A promise is a weay of dealing with asynchronous 
    // behaviour in JS, i.e. a consistent way of dealing
    // with data that takes a while to become available;
    // a promise is a promise ABOUT data arriving sooner
    // or later... or not arriving (throwing an error)

    // A promise is either in a state of 
    // Pending - waiting for the data to arrive
    // Fulfilled:
    //      -RESOLVED - we have the data
    //      -REJECTED - there was an error getting the data

    // Promises are 'then'-able

// axios.get('http://www.numbersapi.com/42?json')
//     .then( (res) => {
//         yo = console.log('yo')
//         // We provide a callback function as the argument
//         // to .then() which is run if the promise resolves
//         // i.e we have the data, success, all is well
//         console.log('We got the data!', res.data)
//     })
//     .catch( (err) => {
//         console.log(`OOPSIES ${err.message}`)
//         console.log(err.response.status)
//         console.dir(err)
//     })
//     .then( () => {
//         // This final .then will ALWAYS run whether
//         // the promise resolved or rejected
//         console.log('We are finished')
//     })

const getApiData = async function(){
    console.log('waiting...')
    try {
        const res = await axios.get('http://www.numbersapi.com/42?json')
        console.log('DONE')
        console.log(res)
    } catch (e){
        console.log('OPPSIES')
        console.error(e)
    } 
    // finally {
    //     console.log('We are finished!')
    // }
    

}




getApiData();