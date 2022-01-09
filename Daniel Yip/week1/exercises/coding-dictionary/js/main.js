console.log(`JS :)`);
const dictionary = {
  // This nested object stores our actual coding terms 
  // and their definitions as key: value pairs
  definitions: {
    method: 'a function which lives in an object (ie a function which is the value of a key)',
    scope: 'the visibility or lifetimes of a variable within a program',
    'variadic function': 'a function which accepts a varying number of arguments from one call to the next',
    arity: 'the number of arguments a function accepts (this function has an arity 2)',
  },
  
  lookupTerm: function(term){
    // console.log('in lookupTerm(): term =', term)

    term = term.toLowerCase();
    
    if (term in this.definitions) {

      const definition = this.definitions[term];
      console.log(`%c${term}:`, 'color: green',  definition);
      
      return {
        term: term,
        definition: definition
      } // object

    } else {
      console.log(`%cSorry, '${term}' is not in the dicitionary.`, 'color: orange');
      return {
        error: 'term not found'
      } //object
    } // else
  }, // lookupTerm()

  printAllDefinitions: function(){

    let termsCount = 0;
    for( const key in this.definitions ){
      this.lookupTerm (key);
      termsCount++;
    } //for..in

    console.log(`%cTotal entries: ${termsCount}`, 'color: red')

  }, // printAllDefinintions

  addDefinition: function(term, definitiion){

    term = term.toLowerCase();

    if(term in this.definitions) {
      console.log(`This term is already definied`)
      this.lookupTerm(term)
    } else {
      this.definitions[term] = definitiion;
      console.log('Term added.')
    }


  }, // addDefinition()

  removeDefinition: function(term){
    //TODO
  }, // removeDefinition()

  searchAllDefinintions: function( searchText ){
    //TODO: loop trough all definitions and do a substring search on each
  }, // searchAllDefinitions

}; // dictionaryObject

// dictionary.lookupTerm( 'scope' );
dictionary.printAllDefinitions();


