console.log("Coding Dictionary Loaded");

const dictionary = {

    //This nested object stores our actual coding terms
    //and their definitions as key:value pairs
    definitions: {
        method: "A function which lives in an object (i.e a function which is the value of a key",
        scope: "The visibility or lifetime of a variable within a program",
        'variadic function': "A function that accepts a variable number of arguments",
        refactoring: "The processing optimising a working piece of code such that it performs the same, but reads cleaner and/or more efficiently.",
        arity: "The number of arguments a function takes.",
        primitive: "Data that is not an object and has no definitions, for example numbers and booleans.",
    }, 
    printAllDefinitions : function () {
        
        let termsCount = 0;
        for(const key in this.definitions) {
            //console.log(`${key}: ${this.definitions[key]}`);
            this.lookUpTerm(key);
            termsCount++;
        } 
        console.log('Total entries:', termsCount);
    },
    lookUpTerm: function (term) {
        //console.log("in lookUpTerm(): term = ", term);

        term = term.toLowerCase();
        
        if (term in this.definitions) {
            const definition = this.definitions[term];
            console.log(`%c${term}:`, `color: green`,definition);
            return {
                term: term,
                definition: definition,
            };
        } else {
            console.log(`%cSorry "${term}" is not in the dictionary.`, 'color: orange');
            return {error: '404'};
        }  
    },
    addDefinition: function (term, definition) {
        term = term.toLowerCase();

        if (term in this.definitions) {
            console.log(`This term is already defined.`);
        } else {
            this.definitions[term] = definition;
            console.log('Term added.');
        }
        this.lookUpTerm(term);

    },
    removeDefinition: function () {
        //TODO
    },
    searchAllDefinitions: function (searchText) {
        //TODO: loop through all definitions and do a substring search on each
    },

}; //dictionary object

//dictionary.lookUpTerm('arity');

dictionary.printAllDefinitions();