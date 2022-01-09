console.log('object-exercises loaded');

//Declare Functions


//The Reading List - Keep track of which books you read and which books you want to read!

//Create an array of objects, where each object describes a book and has properties for the title (a string), 
//author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: 
//"The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. 
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, 
//log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const readingList = [
    {title: "Lolita", author: "Nabokov", alreadyRead: true},
    {title: "Count of Monte Cristo", author: "Dumas", alreadyRead: false},
    {title: "1Q84", author: "Murakami", alreadyRead: false},
];

for (let i = 0; i < readingList.length; i++) {
    if (readingList[i].alreadyRead) {
        console.log(
            `%cYou have already read ${readingList[i].title} by ${readingList[i].author}.`,
            'color: green'
            );
    } else {
        console.log(`%cYou still need to read ${readingList[i].title} by ${readingList[i].author}.`, 'color: red');
    }
}

//The Recipe Card
//Never forget another recipe!

//Create an object to hold information on your favorite recipe. 
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//On separate lines (one console.log statement for each), log the recipe information so it looks like:

//Mole
//Serves: 2
//Ingredients:
//cinnamon
//cumin
//cocoa

const recipe = {
    title: 'one pot greek chicken rice',
    servings: 4,
    ingredients: [
        'chicken thigh',
        'rice',
        'garlic',
        'oregano',
        'chicken stock'
    ]  
};
console.log(`${recipe.title}`);
console.log('Serves:', recipe.servings);
console.log(`Ingredients:`);
console.log(recipe.ingredients.join("\n"));
//console.log(recipe.ingredients[1]);
//console.log(recipe.ingredients[2]);
//console.log(recipe.ingredients[3]);
//console.log(recipe.ingredients[4]);

//The Movie Database
//It's like IMDB, but much much smaller!

//Create an object to store the following information about your favorite movie: 
//title (a string), duration (a number), and stars (an array of strings).

//Create a function to print out the movie information like so: 
//"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

//Maybe the join method will be helpful here

const movieObj = {
    title: "Three Billboards Outside Ebbing, Missouri",
    duration: 115,
    stars: [ 'Frances McDormand', 'Woody Harrelson', 'Peter Dinklage' ],
    printInfo: function () {
        console.log(this.title, "lasts for", this.duration, `minutes. Stars: ${this.stars.join(', ')}.`);
    }
}
movieObj.printInfo();
