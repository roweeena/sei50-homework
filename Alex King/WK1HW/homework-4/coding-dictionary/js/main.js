console.log('Coding Dictionary JS loaded');

const dictionary = {
  
  // this nested object stores our actual coding terms
  // and their definitions as key:value pairs

    definitions: {
      method: `A function which lives in an object (i.e. a function which is the value of a key)`,
      scope:`The visibility or lifetime of a variable within a program`,
      'variadic function':`a function which accepts a "varying" number of arguments from one call to the next `,
      arity: `The number of arguments a function accepts`, //the arity of "function(a, b)"" is 2
    },
  
  lookupTerm: function(term){
    // console.log(`in lookupTerm() =`, term);
    
    term = term.toLowerCase();  
    
    if(term in this.definitions){
      // found the key
      const definition = this.definitions[term];
      console.log(`%c${term}:`, `color:plum`, definition);
      return {
        term:term,
        definition: definition
      };
    } else{
      console.log(`%cSorry, '${term}' is not in the dictionary.`, `color: orange`);
      return {error: `Term not found`};
    }// else

  }, //lookupTerm()
  printAllDefinitions:function(){
    
    let termsCount = 0; 
    for(const key in this.definitions){
      // console.log(key);
      this.lookupTerm(key);
      termsCount++;
    }// for .. in 

    console.log(`Total entries: ${termsCount}`)


  }, //printAllDefinitions()

  addDefiniton: function(term, definition){
    
    term = term.toLowerCase(); 
    if (term in this.definitions) { // key in can be !(key in ...)
      console.log(`This term already exists in the dictionary`);
      this.lookupTerm(term);
    } else {// not already in dictionary
      this.definitions[term] = definition;  
      // nubers[1] = 'new value'
      console.log(`Term added.`); 
    }

  },

  removeDefinition:function(term){
// TODO
    term = term.toLowerCase(); 
    if (term in this.definitions) { 
      console.log(`Term successfully removed from dictionary.`);
      // this.lookupTerm(term);
      delete dthis.definitions[term] 
    } else {// not already in dictionary
      this.definitions[term];  
      
      console.log(`Term does not exist.`); 
    }

  },
  searchAllDefinitions: function(searchText){
    // TODO: loop through all definitions and do a substraing search on each 
    // not sure what we're seaarching for here ... 

  }

}; // dict obj
dictionary.printAllDefinitions();
