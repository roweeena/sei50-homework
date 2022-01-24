console.log("MTA V2 Loaded!");


//BUGS - Just doesnt work lol, come back to this yuf
//

//---------------------------------------------------------------------------------------------------------------------


//MTA - a programn that models a truncated version of New York's Metropolitan Transportation Authority's subway system

    // The programn takes the line and stop that a user is getting on at and the line and that that user is getting off at 
    // and prints the journey and the total number of stops for the trip in the console

    // The programn must tell the user the number and names of the stops in the order they will change or pass through.
    // This must also work in either direction

    // There are 3 subway lines:
        // The N Line with the stations Times Square, 34th, N!28th, N!23rd, Union Square, and N!8th
        // The L Line with the stations L!8th, 6th, Union Square, 3rd, and 1st 
        // The 6 Line with the stations Grand Central, 33rd, 6!28th, 6!23rd, Union Square, and Astor Place
        // IMPORTANT: THE ONLY INTERSECTION POINT IS UNION SQUARE



//PLANNING

const MTA = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

    // This method will create a new array that consists of the user's personal station progression
    userPath: function (line1, start, line2, finish) {
        
        if (!this.checkValid(line1, start) || !this.checkValid(line2, finish)) {
            console.log(`ERROR: User inputted station or line does not exist.`)
            return;
        }   //if statement exits the method prematurely if either checkValid method returns false
        
        // Now that both lines are confirmed valid, the new array can now be initialised
        // However the several things need to be known first:
            //The index of start and finish, 
            //and the order in which the user will travel through each stop
        const startIndex = this[line1].indexOf(start);  
        const unionSquareIndex1 = this[line1].indexOf('Union Square');    
        const finishIndex = this[line2].indexOf(finish);
        const unionSquareIndex2 = this[line2].indexOf('Union Square');    


        //There are too many options to get the result I want from this point, lets try without loops for now
        const line1Array = this.sliceReverse(line1, startIndex, unionSquareIndex1);
        const line2Array = this.sliceReverse(line2, unionSquareIndex2, finishIndex);

        const userPathArray = line1Array.concat(line2Array);
        console.log(userPathArray.toString());

    },

    

    // This method will check if user input is valid, simply returning true or false with an error message
    checkValid: function (line, station) {
        if (Object.keys(this).includes(line)) {
            return this[line].includes(station);    //This will return true if user input is valid, or false if invalid.
        } else {
            return false;
        }
    },
    // This method will check if the start index is greater than or less than the index of the destination, and returns a correctly-aligned array
    sliceReverse: function (line, startIndex, finishIndex) {
        if (startIndex > finishIndex) {
            const sliced = line.slice(finishIndex, startIndex);
            const reversed = sliced.reverse();
            return reversed;
        } else {
            const sliced = line.slice(startIndex, finishIndex);
            return sliced;
        }
    }
} // MTA object

//DEBUG CONSOLE LOGS

console.log('MTA.userPath("N", "Times Square", "6", "Astor Place"');
MTA.userPath("N", "Times Square", "6", "Astor Place");
