// //console.log("hello, world");
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// 👉 Get the program to work for a single line (in any direction) before trying to tackle multiple lines. 👈
// Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const mta = {
    sixLine: [
        `Grand Central`,
        `33rd`,
        `28th`,
        `23rd`,
        `Union Square`,
        `Astor Place`,
    ],
    nLine: [
        `Times Square`,
        `34th`,
        `28th`,
        `23rd`,
        `Union Square`,
        `8th`,
    ],
    lLine: [
        `8th`,
        `6th`,
        `Union Square`,
        `3rd`,
        `1st`,
    ],

    startLineCheck: function(startLine){
        if (startLine === `6`){
            return this.sixLine
        } else if (startLine === `N`){
            return this.nLine
        } else if (startLine === `L`){
            return this.lLine
        }
    },  // startLineCheck() ==> returns correct starting line depending on input


​    endLineCheck: function(endLine){
        if (endLine === `6`){
            return this.sixLine
        } else if (endLine === `N`){
            return this.nLine
        } else if (endLine === `L`){
            return this.lLine
        }
    }, // secondLineCheck() ===> returns correct end line depending on input


​
    startStationIndex: function(startLine, startStation){
        const line = this.startLineCheck(startLine);
        return line.indexOf(startStation)
    }, // startStationIndex() ===> returns index of the starting station


​
    endStationIndex: function(endLine, endStation){
        const line = this.endLineCheck(endLine);
        return line.indexOf(endStation)
    }, // endStationIndex() ===> returns index of the end station


​
    planTrip: function(startLine, startStation, endLine, endStation){
        const start = this.startStationIndex(startLine, startStation);
        const end = this.endStationIndex(endLine, endStation);
        const unionSquareStart = this.startStationIndex(startLine, `Union Square`);
        const unionSquareEnd = this.endStationIndex(endLine, `Union Square`);
        let stops = 0;
        let trip = [];
        if (startLine === endLine){ // if trip is on the same line
            for (let i = start+1; i < end+1; i++){
                stops++;
                trip.push(this.startLineCheck(startLine)[i]);
            }; // going forward
            for (let i = start-1; i > end-1; i--){
                stops++;
                trip.push(this.startLineCheck(startLine)[i]);
            }; // going back
            console.log( `You will have ${(stops)} stops on your journey.`);
            console.log( `Starting at ${startStation} and stopping at following stations: ${trip.join(`, `)}` );
        } else if (startLine !== endLine) { // trip swaps line at Union Square
            for (let i = start+1; i < unionSquareStart+1; i++){
                stops++;
                trip.push(this.startLineCheck(startLine)[i]);
            }; // counts stops to union square going forward
            for (let i = start-1; i > unionSquareStart-1; i--){
                stops++;
                trip.push(this.startLineCheck(startLine)[i]);
            }; // counts stops to union square going back
            for (let i = unionSquareEnd+1 ; i < end+1; i++){
                stops++;
                trip.push(this.endLineCheck(endLine)[i]);
            }; // counts stops on new line after union square going forward
            for (let i = unionSquareEnd-1 ; i > end-1; i--){
                stops++;
                trip.push(this.endLineCheck(endLine)[i]);
            }; // counts stops on new line from union square going back
            console.log( `You will have ${(stops)} stops on your journey.`);
            console.log( `Starting at ${startStation}, with a change at Union Square to the ${endLine} line, stopping at following stations: ${trip.join(`, `)}` );
        };
    }, // planTrip()
}; // mta{}
mta.planTrip(`6`, `Grand Central`, '6', `Astor Place`) // going forward on single line
mta.planTrip(`6`, `Astor Place`, '6', `Grand Central`) // going back on single line
mta.planTrip(`N`, `Times Square`, 'L', `1st`) // going forward with a change
mta.planTrip(`L`, `1st`, '6', `Grand Central`) // going back with a change
mta.planTrip(`N`, `Times Square`, '6', `Grand Central`) // going forward and changing to back
mta.planTrip(`L`, `1st`, '6', `Astor Place`) // going back and changing to forward
