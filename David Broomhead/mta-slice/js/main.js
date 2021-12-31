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

// note: if the user is travelling uptown, the index of the destination will be higher,
// if the user is travelling downtown, the index of the destination will be lower



//Object of arrays - trains and their names and stations
const mta = {

    "N Line": {
        name: "N Line",
        stops: [
            "Times Square",
            "34th",
            "28th N Line",
            "23rd N Line",
            "Union Square",
            "8th N Line"
        ]
    },

    "L Line": {
        name: "L Line",
        stops: [
        "8th L Line",
        "6th", 
        "Union Square", 
        "3rd",
        "1st"
        ]
    },

    "6 Line": { 
        name: "6 Line",
        stops: [
        "Grand Central",
        "33rd",
        "28th Six Line",
        "23rd Six Line",
        "Union Square",
        "Astor Place"
        ]
    }
}

console.log(`MTA Slice Method
Welcome to the MTA! Please call planJourney(firstTrain, originStation, secondTrain, destinationStation) to get a print out of your directions. Use the tables below to find the right names for your train and station.
N Line: ${mta["N Line"].stops}
L Line: ${mta["L Line"].stops}
6 Line: ${mta["6 Line"].stops}`);
//General instructions for user - how to use MTA

const planJourney = function(firstTrain, originStation, secondTrain, destinationStation){

    //GLOBAL FUNCTIONS
    const getStationIndex = function(train,station){
        let stationIndex = mta[train].stops.indexOf(station);          // function that gets index of the relevant station
        return stationIndex
    }

    const getUptownTrainArray = function(train,origin,destination){
        let uptownTrainArray = mta[train].stops.slice(origin,destination + 1);
        return uptownTrainArray;
    }

    const getDowntownTrainArray = function(train,origin,destination){
        let downtownTrainArray = mta[train].stops.slice(destination,origin);
        downtownTrainArray = downtownTrainArray.reverse();
        return downtownTrainArray;
    }

    //GLOBAL VARIABLES
    const originIndex = getStationIndex(firstTrain,originStation);         
    // stores index of origin station
    const destinationIndex = getStationIndex(secondTrain,destinationStation);         
    // stores index of destination station
    
    const unionSquareFirstTrainIndex = getStationIndex(firstTrain,"Union Square");  
    // stores index of Union Sq on first train
    const unionSquareSecondTrainIndex = getStationIndex(secondTrain,"Union Square");  
    // stores index of Union Sq on second train

    let instructions = `You are travelling from ${originStation} Station on the ${mta[firstTrain].name} to ${destinationStation} Station on the ${mta[secondTrain].name}. Board the ${mta[firstTrain].name} and pass through the following stops: `
    let journey = '';
    let originToUnionSq = '';
    let unionSqToDestination = '';

    if (firstTrain === secondTrain){
    //identifies travel along a single line that can be sliced from one array

        if (originIndex < destinationIndex){
        //identifies and deals with single-line uptown travel (ascending the array)    
            journey = getUptownTrainArray(firstTrain,originIndex,destinationIndex);
            //slices the relevant part of the array to gather the stations the commuter will pass through
        }else {
            //deals with single-line downtown travel that descends the array  
            journey = getDowntownTrainArray(firstTrain,originIndex,destinationIndex);
            //uses downtown function to provide array of stops in correct order
            }    
        instructions = instructions + journey.join(', ');
        //adds general instructions to list of stations user will travel through
        return instructions;
    //end of single line journey code
    
    }else {   
        //codeblock to deal with travel that requires the commuter to change trains at Union Square
        //slice the involved train arrays between origin and Union Square and join together
        //if statement for uptown and downtown

        if (originIndex < unionSquareFirstTrainIndex){
        //if first train travelling uptown
            originToUnionSq = getUptownTrainArray(firstTrain,originIndex,unionSquareFirstTrainIndex);
            if (unionSquareSecondTrainIndex < destinationIndex){
            //if second train travelling uptown
                unionSqToDestination = getUptownTrainArray(secondTrain,unionSquareSecondTrainIndex,destinationIndex);
            }else {
            //if second train travelling downtown
                unionSqToDestination = getDowntownTrainArray(secondTrain,unionSquareSecondTrainIndex,destinationIndex);
            }
            
            
        }else {
            if (originIndex > unionSquareFirstTrainIndex) {
            //if first train travelling downtown to Union Sq
            originToUnionSq = getDowntownTrainArray(firstTrain,originIndex,unionSquareFirstTrainIndex);
                if (unionSquareSecondTrainIndex < destinationIndex){
                //if second train travelling uptown
                    unionSqToDestination = getUptownTrainArray(secondTrain,unionSquareSecondTrainIndex,destinationIndex);
                }else {
                //if second train travelling downtown
                    unionSqToDestination = getDowntownTrainArray(secondTrain,unionSquareSecondTrainIndex,destinationIndex);
                }   
            }
        }
        
        instructions = `${instructions} ${originToUnionSq.join(', ')}. Change to the ${mta[secondTrain].name} train at Union Square and then pass through ${unionSqToDestination.join(', ')}. Arrive at your destination, thankyou for using the MTA.`; 
        return instructions;

    } //end of two train journey code
} //end of plan journey function
