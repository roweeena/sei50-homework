// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation and JS data structures.

// #### Activity
// * Create a program that models a simple subway system.



// * The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// Javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// * There are 3 subway lines:
//  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//  * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// * Your trip planner must work in *either direction*, i.e. `planTrip('N', 'Times Square', '6', '33rd')` (starting at Times Square) should work as well as the reverse trip `planTrip('6', '33rd', 'N', 'Times Square')` (starting at 33rd).

// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * 👉 **Get the program to work for a single line (in any direction) before trying to tackle multiple lines.** 👈
// * Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code. 
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


console.log(`Welcome to the MTA! Please call planJourney(firstTrain, originStation, secondTrain, destinationStation) to get a print out of your directions.
Use the tables below to find the right names for your train and station.`)

const nLine = [
    "Times Square",
    "34th",
    "28th N Line",
    "23rd N Line",
    "Union Square",
    "8th N Line"
];

const lLine = [
    "8th L Line",
    "6th", 
    "Union Square", 
    "3rd",
    "1st"
];

const sixLine = [
    "Grand Central",
    "33rd",
    "28th Six Line",
    "23rd Six Line",
    "Union Square",
    "Astor Place"
];

console.log(`N Train: nLine
${nLine}`);

console.log(`L Train: lLine
${lLine}`);

console.log(`6 Train: sixLine
${sixLine}`);

// note: if the user is travelling uptown, the index of the destination will be higher,
// if the user is travelling downtown, the index of the destination will be lower

const planJourney = function(firstTrain, originStation, secondTrain, destinationStation){

    const trainLineStartIndex = firstTrain.indexOf(originStation);      // stores array index of origin station
    const trainLineEndIndex = secondTrain.indexOf(destinationStation);         // stores index of destination station
    
    const unionSquareFirstTrainIndex = firstTrain.indexOf("Union Square");  // stores index of Union Sq on first train
    const unionSquareSecondTrainIndex = secondTrain.indexOf("Union Square");  // stores index of Union Sq on second train

    console.log(`Board the train and pass through the following stops:`);

    if (trainLineStartIndex < unionSquareFirstTrainIndex){                           // if travelling DOWNTOWN
        for (let i = trainLineStartIndex; i <= unionSquareFirstTrainIndex; i++) {      // loop progresses through array until arrival at Union Sq
            console.log(firstTrain[i]);                                         // console logs stops user travels through
        }
    }else {                                                                         // else travelling UPTOWN
        for (let i = trainLineStartIndex; i >= unionSquareFirstTrainIndex; i--) {     // loop progresses through the first train array
            console.log(firstTrain[i]);                                            // console logs the stops the user will go through until arrival at Union Sq
        }
    }

    if (firstTrain != secondTrain && destinationStation != "Union Square"){
        console.log(`Swap trains at Union Square, then pass through the following stations and arrive at your destination.`);
    }


    if (trainLineEndIndex > unionSquareSecondTrainIndex){                                  // if user is travelling DOWNTOWN
        for (let i = unionSquareSecondTrainIndex + 1; i <= trainLineEndIndex; i++){           // loop to log stations until destination is reached
            console.log(secondTrain[i]);
        }
    }else {
        for (let i = unionSquareSecondTrainIndex - 1; i >= trainLineEndIndex; i--){            // if user is travelling UPTOWN 
        console.log(secondTrain[i]);
        }
    }
}    
