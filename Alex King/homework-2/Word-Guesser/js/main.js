console.log(`The Word Guesser`);

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


//!!! ADDING MORE SHIT MAKES THIS EXPONENTIALLY MORE DIFFICULT !!!
const wordBank = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
] //can add as many words as you want
// const lettersOccured =[];
let maxErrors=6;
let gameScore=0

let chosenWord = wordBank[Math.floor(Math.random()*wordBank.length)]; // randomises the word from word bank
let splitWord = chosenWord.split(''); // an array with words separated
//create new array with number. 
let blankWord = new Array(splitWord.length).fill('_')
// console.log(splitWord)
// console.log(blankWord)
strBlankWord=blankWord.toString();
console.log(strBlankWord)

let guessLetter = function(inputLetter){
    let keepGoing=false; //keep going ... 
    let correctInput=false; //can be opposite if you want... being wrong leads to more output though... 
    
    for(let i=0;i<splitWord.length;i++){
        if (splitWord[i]==inputLetter){ 
            blankWord[i]=inputLetter; //finding the corresponding [i] AND replacing it. <== Happy accident, I thought I had to identify then replace but this makes sense
            correctInput=true; //goes to correctInput 'if' statment 
        };
        if (blankWord[i]=='_'){
            keepGoing = true; //if there are more guesses to go ... keep going <== pretty obvious.. 
        }
    } //closing loop

    if(correctInput){
        console.log(`good job...`);
        console.log(blankWord)// output as an array 
        console.log(blankWord.join('')); // output as word with '_' <=== kind of hard to see how many more letters but more presentable
        gameScore += 50;
        console.log(`score: ${gameScore}`);
        if(!keepGoing){ //It knows when to stop because there is no more correct input ie splitWord=blankWord 
            console.log(`winner~! The word was "${chosenWord}" and your final score is $${gameScore}`);
        } //closing if correct 
    }
    else{
        console.log(`fool... it's so easy, the word is only ${chosenWord.length} letters long!`);
        maxErrors -= 1;
        console.log(`You have ${maxErrors} more tries`);
        gameScore-=25;
        console.log(`score: ${gameScore}`);
    } //closing if incorrect 
        if (maxErrors===6){
            console.log(`
            +---+
            |   |
                |
                |
                |
                |
          =========`);
        }
        if (maxErrors===5){
            console.log(`
            +---+
            |   |
            O   |
                |
                |
                |
          =========`);
        }
        if (maxErrors===4){
            console.log(`
            +---+
            |   |
            O   |
            |   |
                |
                |
          =========`);
        }
        if (maxErrors===3){
            console.log(`
            +---+
            |   |
            O   |
           /|   |
                |
                |
          =========`);
        }   
        if (maxErrors===2){
            console.log(`
            +---+
            |   |
            O   |
           /|0  |
                |
                |
          =========`);
        }
        if (maxErrors===1){
            console.log(`
            +---+
            |   |
            O   |
           /|0  |
           /    |
                |
          =========`);
        }
        if (maxErrors===0){
            console.log(`
            +---+
            |   |           YOU LET THEM
            O   |               DIE
           /|l  |
           / L  |           GAME OVER !!!
                |
          =========
         `);
         console.log(`Your score was $${gameScore}`)
        }
        
    }//closing functions
    
//assign score. if ... score++ 
    // guessLetter('e');
    // guessLetter('f');
    // guessLetter('a'); 


// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// ---







// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// let maxOfTwoNumbers = function(num1, num2){
//     if (num1>num2){
//         console.log(`${num1} is larger than ${num2}!`)
//     } else if (num2>num1){
//         console.log(`${num2} is larger than ${num1}!`)
//     } else {
//         console.log(`${num1} is equal to ${num2}!`)
//     }
// }
// maxOfTwoNumbers(2,2);

// let maxOfThree = function(num1, num2, num3){
//    console.log(`out of given numbers ${num1, num2, num3} '${Math.max(num1,num2,num3)}' is the largest number`)
// }
// maxOfThree(1,2,3);

// let vowelDetector = function(letterInput){
//     if (letterInput==='a', 'e', 'i', 'o', 'u'){
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }
// vowelDetector('e')

// let sumArray = function(){

// }