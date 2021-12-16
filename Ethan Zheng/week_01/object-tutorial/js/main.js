console.log('object-tutorial loaded');

const studentRecordObj = {
    fullName: 'Rowena',
    age: 21,
    feesPaid: true,
};

console.log(studentRecordObj.fullName);

const bookSeries = {
    name: "In search of lost time",
    books: [
        "Lolita",
        "Colourless Tsukuru",
        "Imaginary Life"
    ]

};

const novel = "books";              
const test = bookSeries[novel];     //evals as ['Lolita', 'Colourless Tsukuru', 'Imaginary Life']
const test2 = bookSeries[novel][1]; //evals as Colourless Tsukuru
const test3 = bookSeries.books[0];  //evals as Lolita

console.log(bookSeries);
delete bookSeries.name; //removes the name key-value pair from the object
console.log(bookSeries);

delete bookSeries[novel];   // same as bookSeries.books or bookSeries['books']
                            //removes


const movie = {
    name: 'Satantango',
    director: 'Bela Tarr',
    duration: 432
};

console.log(movie);

for (const key in movie) {                  //This loop will loop through the entirety of the movie obj
    console.log(key + ": " + movie[key])
}


console.log(Object.keys(movie));    //returns an array of keys
                                    //evals as ['name', 'director', 'duration']

const movieKeys = Object.keys(movie);
for (let i = 0; i < movieKeys.length; i++) {
    const key = movieKeys[i];
    console.log(key, movie[key]);
}

console.log(Object.values(movie));  //returns an array of values
                                    //evals as ['Satantango', 'Bela Tarr', 432]
//

const explorer = {
    firstName: "Jacques",
    lastName: "Cousteau",
    displayPurpose: function () {
        console.log("Hello World")
    },
    displayFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    talkTo: function (name) {
        const greeting = this.firstName + " says hi to " + name;
        return greeting;
    }
};
explorer.displayPurpose();
explorer.displayFullName();