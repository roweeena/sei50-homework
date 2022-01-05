console.log(`JS :)`);

// // // Student records

// # Exercises: Objects

// ## The Reading List

// Keep track of which books you read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
const books = [
    {
        title: 'Harry Potter', 
        Author: 'JK Rowling', 
        AlreadyRead: false
    },
    {title: 'Lord of the Rings', Author: 'J.R.R. Tolkien', AlreadyRead: false},
    {title: 'Book 2', Author: 'Some Author', AlreadyRead: true},
    {title: 'To Kill a Mockingbird', Author: 'Harper Lee', AlreadyRead: false},
    {title: 'A Clockwork Orange', Author: 'Anthony Burgess', AlreadyRead: false},
]

// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

for (i = 0; i < books.length; i++){
    console.log(books[i].title + ' by ' + books[i].Author);
}

// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

for (i = 0; i < books.length; i++){
    if (books[i].AlreadyRead){
        console.log(`You have already read "${books[i].title}" by ${books[i].Author}`)
    } else {
        console.log(`You  still need to read "${books[i].title}" by ${books[i].Author}`)
    }   
}

for (i = 0; i < books.length; i++){

    const currentBook = books[i];
    
    if (currentBook.AlreadyRead){
        console.log(`You have already read "${currentBook.title}" by ${currentBook.Author}`)
    } else {
        console.log(`You  still need to read "${currentBook.title}" by ${currentBook.Author}`)
    }   
}

// ## The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

const pizzaRecipe = {
    title: 'Pizza Dough',
    serves: 4,
    ingredients: ['flour', 'water', 'yeast', 'salt'],
}

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// ```
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
// ```

console.log(`\`\`\``);
console.log(pizzaRecipe.title);
console.log(`Serves: ${pizzaRecipe.serves}`);
console.log(`%cIngredients:`,
            'color: red; font-size: 2em; padding: 10px;')
// console.log(pizzaRecipe.ingredients[0]);
// console.log(pizzaRecipe.ingredients[1]);
// console.log(pizzaRecipe.ingredients[2]);
// console.log(pizzaRecipe.ingredients[3]);
console.log(pizzaRecipe.ingredients.join('\n'))
console.log(`\`\`\``);



// ## The Movie Database

// It's like IMDB, but much much smaller!

// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//   - Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful here


const movieInfo = {
    title: 'Scarface',
    duration: 170,
    stars: ['Al Pacino', 'Steven Baue', 'Michelle Pfeiffer', 'Mary Elizabeth Mastrantonio']
}

const printMovieInfo = function(movie){
    console.log(`${movie.title} lasts for ${movie.duration} minutes and it stars ${movie.stars.join(', ')}.`)
}

printMovieInfo(movieInfo)