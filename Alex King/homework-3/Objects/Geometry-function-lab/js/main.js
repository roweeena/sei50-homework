console.log('Objects: Classwork');
//arrays are more object oriented ie the order matters more 

// const studentRecordObj = {
//     fullName: 'Rowena',
//     currentAge:21,
//     feesPaid: true,
// };

// console.log(studentRecordObj.fullName, studentRecordObj.currentAge);


// const movie ={
//     name: "Star Wars",
//     director: "George Lucas", 
//     runtime:120 ,
// }
// movie.name="Såntåntangø";
// // OR movie["name"]="Såntåntangø";
// movie.language = "hungarian";
// movie.rating = 10;
// movie.parts = 12;
// console.log(movie);


// const movieName = movie.name;
// console.log(movieName);


// const movieDirector = movie["director"];
// console.log(movie["director"]);

// const movie = {
//     name: "Satantango",
//     director: "Bela Tarr",
//     duration: 432
// };
// movie.director=null;
// movie.director ="";
// delete movie.duration; <= removes director, not the value
// delete movie["duration"];

// movie.director = {
//     name: "Bela Tarr",
//     dateOfBirth: "1930/10/25",
//     nationality: "Hungarian", 
//     filmCount: "5",
    
// };

// //Object.assign <== in es6 
// console.log(movie.director)


// for (const key in movie){ //for .. in. if more info needed ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//     console.log(key + ": "+movie[key]); // formatter example // looping through everything in obj // Key has to be inside variable x[key]
//     console.log(movie[key]); // raw example // key before tell you ... they key. If you want to see that  
//     // console.log(${key};, movie[key]);
// }

// const movieKeys = Object.keys(movie); // turned into an array named movieKey 
// for (let i=0; i<movieKeys.length; i++){ //looping through array 
//     const key = movieKeys[i];
//     // console.log(key);
//     console.log(key, movie[key]);
// }
// // Object.values(movie) way to see values in obj 


// //nested objects:

// const explorer ={
//     firstName: "Jacques",
//     lastName: "Cousteau",
//     birth:{
//         day:11,
//         month: 6,
//         year: 1910,
//     }
// }
// const birthDay = explorer.birth.day; // accessing nested values 
// const birthMonth = explorer.birth.month;
// const birthYear = explorer.birth.year;

// const first = explorer.firstName;
// const last = explorer.lastName;

// const marxFamily = [ //array of obj's 
//     {name:"Groucho", birthYear:1890}, //0
//     {name:"Harpo", birthYear:1888}, //1 etc. 
//     {name:"Chico", birthYear:1887},
//     {name:"Zeppo", birthYear:1901},
//     {name:"Gemmo", birthYear:1893},
// ]

// for (let i = 0; i<marxFamily.length; i++){
//     const brother = marxFamily [i];
//     console.log(brother.name, brother.birthYear)
// }

const explorer = {
    firstName: "Jacques",
    lastName: "Cousteau",
    displayFullName: function(){
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    talkTo: function (name){
        const greeting = this.firstName + " says hi to " + name;
        return greeting; 
    }
};

explorer.displayFullName();
