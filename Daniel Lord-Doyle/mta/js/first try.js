console.log('MTA Homework Loaded!')

// MTA Lab

// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and 
// stop that user is getting off at and prints the journey and the total number of stops 
// for the trip in the console:

// Example Input
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name 
// and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. 

// (For example, this means the 28th stop on the N line is different than the 28th street 
// stop on the 6 line, so you might need to differentiate this when you name your stops 
// in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through 
// or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') 
// (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 
// 'Times Square') (starting at 33rd).

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// 👉 Get the program to work for a single line (in any direction) before trying to tackle 
// multiple lines. 👈
// Don't worry about prompting the user for input. Hard code some test-run calls to the 
// tip planning function to make it fast to test your code.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, 
// you might have to make sure the stops that are the same for different lines have different names 
// (i.e. 23rd on the N and on the 6 need to be differentiated)

// step1 = build MTA object with stops (do not need to be ordered)
// step 2 = build all stops in to the mta.stops object
// step 3 = be able to find a particular stop

let yourStops = [];
let reversedTrainLine = [];

const mta = {


    stops: {
        n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        l: ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6':['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }, // end of mta.stops


    // iterateThroughStops: function (name) {
    //     for (let stopName in this.stops) {
    //         if (stopName = this.stops[name]) {
    //             return this.stops[name]
    //         } else {
    //             console.log('there is no such station!')
    //         }
    //     }
    // }, // end of iterateThroughSteps
        

    // listNStops: function () {
    //     for (i=0; i<this.stops.n.length; i++) {
    //         console.log(i)
    //         console.log(this.stops['n'][i])
    //     }
    // }, // end of listNStops



    findIndexOfStop1: function (trainLine1,stopName1,trainLine2,stopName2) {
        // this variadic function has 4 aritys but only relies on the initial duo
        // console.log(this.stops[`${trainLine1}`].indexOf(`${stopName1}`));
        return this.stops[`${trainLine1}`].indexOf(`${stopName1}`)
    }, // end of findIndexOfStop1

    findIndexOfStop2: function (trainLine1,stopName1,trainLine2,stopName2) {
        // this variadic function has 4 aritys but only relies on the penultimate duo
        // console.log(this.stops[`${trainLine2}`].indexOf(`${stopName2}`));
        return this.stops[`${trainLine2}`].indexOf(`${stopName2}`)
    }, // end of findIndexOfStop2



    // list all stops from first station indexed to last station indexed on ONE train line
    listAllStops: function (trainLine1,stopName1,trainLine2,stopName2) {
        //to do this we need to loop through the correct train lines array and look for initial indexed position
        for (i=(this.findIndexOfStop1(trainLine1,stopName1,trainLine2,stopName2)); i<(this.findIndexOfStop2(trainLine1,stopName1,trainLine2,stopName2)+1); i++) {
            

            yourStops.push(this.stops[`${trainLine1}`][i])


        } console.log(`You must travel through the following stops on the ${trainLine1} line: ${yourStops.join(', ')}.`)
        // yourStops = []

    }, // end of listAllStops function


    isThereTwoStops: function (trainLine1,stopName1,trainLine2,stopName2) {
        if (trainLine1 !== trainLine2) {
            // console.log(`Your trip will involve a change between ${trainLine1.toUpperCase()} and ${trainLine2.toUpperCase()}.`)
            return true
        } else {
            // console.log(`Lucky you! You can stay on the ${trainLine1.toUpperCase()} line for your whole trip.`)
            return false
        }
        
    }, // end of checkForTwoStops


    reverseStopOrder: function (trainLine1,stopName1,trainLine2,stopName2) {
        yourStops = this.stops[`${trainLine1}`].reverse();
    }, // end of reverseStopOrder



    isIndexOfSecondStopBeforeFirstStop: function (trainLine1,stopName1,trainLine2,stopName2) {
        if ((this.findIndexOfStop1(trainLine1,stopName1,trainLine2,stopName2)) < (this.findIndexOfStop2(trainLine1,stopName1,trainLine2,stopName2))) {
            return true
        } else {
            return false
        }
    }, // end of isIndexOfSecondStopBeforeFirstStop()



    planTrip: function (trainLine1,stopName1,trainLine2,stopName2) {
        // if (1) the customer only needs to travel on one line AND the order is currently correct
        if (this.isThereTwoStops(trainLine1,stopName1,trainLine2,stopName2) === false) {

            // return the stops they need to travel by - simple!
            return this.listAllStops(trainLine1,stopName1,trainLine2,stopName2)
            
        // if (2) the stop the customer wants as their destination comes BEFORE their starting stop
        } else if (this.isIndexOfSecondStopBeforeFirstStop(trainLine1,stopName1,trainLine2,stopName2)) {

            // reverse the order of the array and return the list of stops for them
            this.reverseStopOrder(trainLine1,stopName1,trainLine2,stopName2)
            return this.listAllStops(trainLine1,stopName1,trainLine2,stopName2)
            
        }
    } // end of planTrip


}; // end of mta object

mta.findIndexOfStop1('n','Union Square','n','23rd')
mta.findIndexOfStop2('n','Union Square','n','23rd')


// Test of for in through an object

// const pretend = { 
//     a: 1, 
//     b: 2, 
//     c: 3 };

// for (const property in pretend) {
//   console.log(`${property}: ${pretend[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// test of findIndex on an ordered array

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// test of findIndex on arrays within arrays

// const Result = [
//     {
//       name:'John',
//       grade: 'A',
//     },
//     {
//       name:'Ben',
//       grade: 'C',
//     },
//     {
//       name:'Anthony',
//       grade: 'B',
//     },
//     {
//       name:'Tim',
//       grade: 'B-',
//     },
//   ]
  
//   const index = Result.findIndex( (element) => element.grade === 'A');
//   console.log(index)

// forEach

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// IndexOf


// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// console.log(beasts.indexOf('giraffe'));
// // expected output: -1
