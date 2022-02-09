console.log('Loaded AJAX Axios');

// WHAT IS A PROMISE

// A promise is a way of dealing with asyncronous behavior in JS, i.e. a consistant way of dealing with data that takes a while to become available. A promise is a promise about data arriving sooner or later... or not arriving (throwing an error)

// A promise is either in a state of:
//  PENDING - waiting for the data 
//  FULFILLED:
//      - RESOLVED - we have the data
//      - REJECTED - there was an error getting the data

// Promises are 'then'-able

axios.get('http://www.numbersapi.com/42?json')
  .then(function(res){
    console.log('We got the data!', res.data.text);
  })
  .catch(function(err){
    console.log('UH OH! There was a problem');
    console.log(err.response.status);
    console.dir(err)
  })
  .then(function(){
    // This final.then will alwasy run whether the promis resolved or rejected.
    console.log('We are finished');
  });


  // When dealing with promises, instead of dealing with a then-catch chain to deal with resolved/rejected promises, we can use a hot new syntax called: async/await

  const getApiData = async function(){

    try {

      const res = await axios.get('http://www.numbersapi.com/42?json');
      console.log(res.data);

    } catch(err){

      console.log('There was a problem', err);
    
    } finally {
      console.log('always runs');
    }
    // BECAUSE of the 'await' in front of the method which returns a promise, 
    // JS acts the same way Ruby HTTParty does - the coed will BLOCK or wait UNTIL the response comes in, and it will give you the data as the return value instead of a promise object.

  };

  getApiData()