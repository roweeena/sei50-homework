console.log('Objects: Exercises');



// # Exercises: Objects




// ## The Reading List

// Keep track of which books you read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const readingList=[
    {bookName:"book1", authorName:"author1", alreadyRead:true},
    {bookName:"book2", authorName:"author2", alreadyRead:false},
    {bookName:"book3", authorName:"author3", alreadyRead:true},
    {bookName:"book4", authorName:"author4", alreadyRead:false},
    {bookName:"book5", authorName: "author5", alreadyRead:true},
]
for (i=0; i<readingList.length; i++){
const books = readingList[i];
const nameAuthor=(`${books.bookName} + 'by ' ${books.authorName}`)
console.log(nameAuthor);
if (books.alreadyRead){ //don't need to tell anything as if statements are defaulted towards true. 
    console.log(`You have already read ${books.bookName} by ${books.authorName}`)
} else {
    console.log(
        //this is going to have styles 
        `%cYou still need to read ${books.bookName} by ${books.authorName}`,
        'color: red; font-size: 20pt'
    
        )
}

}

// let readStatus = "You still need to read"); // default value ... 
// if (currentBook.alreadyRead){
    // readStatus = 'You have already read';
// }

// object.keys(readingList[2]).length


// ## The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// ```
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
// ```

const recipeInformation=  {
    recipeTitle: "turtle", 
    recipeServing:4,
    ingredients:[
        "turtle",
        "more turtle",
    ]

};
console.log(recipeInformation.recipeTitle);
console.log(recipeInformation.recipeServing);
console.log(recipeInformation.ingredients.join('\n')); // <== joining an array \n for new space




// ## The Movie Database

// It's like IMDB, but much much smaller!

// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//   - Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful here


const favouriteMovies = [
    // {movieTitle:"", movieDuration:123, movieStars:{
    //     leadActor:"",
    //     supportingActor:"",
    //     director:"",
    // }
    {movieTitle:"ninja turtles", movieDuration:123, movieStar:["."]},
    {movieTitle:"ninja turtles 2: electric boogaloo", movieDuration:123, movieStar:["the ninja turtles", "splinter"]},
    {movieTitle:"ninja turtles 3: wrath of splinter", movieDuration:123, movieStar:["the ninja turtles", "splinter"]},
    {movieTitle:"ninja turtles 4: redemption", movieDuration:123, movieStar:["the ninja turtles", "splinter"]},
    {movieTitle:"ninja turtles 5: why are there 5 films??", movieDuration:123, movieStar:["the ninja turtles", "splinter"]}

   
] 
// const printMovieInfo = function(){
//     console.log(`
//     ${favouriteMovies.title} lasts for ${favouriteMovies.duration}.
//     it stars: ${favouriteMovies.movieStar.join(', ')}
//     `)
// printMovieInfo();
for (i=0; i<favouriteMovies.length; i++){
    const movies = favouriteMovies[i];
    console.log(`${movies.movieTitle} is ${movies.movieDuration} long. It stars ${movies.movieStar}`)
    }