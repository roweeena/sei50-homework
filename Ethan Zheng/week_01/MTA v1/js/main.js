console.log("MTA Loaded!");


//BUGS
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

    // DONE-Make an object that encompasses the whole project
    // DONE-Initialise three arrays within the object for each line
    // TODO-Make a method that finds a user-given stop in either array
        // This method should take two arguments - the name of the line, and the name of the stop
        // The line argument will inform the method of which array to look, and will loop until it finds the given stop.
    // TODO-
    // TODO-
    // TODO-
    // TODO-

    const MTA = {

        N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
        L: ['8th', '6th', 'Union Square', '3rd', '1st' ],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ],

        oneLineTripPlanner: function (line, start, finish) {
            
            const startIndex = this[line].indexOf(start);
            const finishIndex = this[line].indexOf(finish);

            if (startIndex > finishIndex){
                for (let i = startIndex; i >= finishIndex; i--) {
                    console.log("Station:", this[line][i]);
                }
            }
            if (startIndex < finishIndex) {
                for (let i = startIndex; i <= finishIndex; i++) {
                    console.log("Station:", this[line][i]);
                }
            }
        },
        twoLineTripPlanner: function (line1, start, line2, finish) {

            if (!this.checkValid(line1, start, line2, finish)) {
                return;
            }

            console.log(`Understood, your journey will begin at the station ${start} on line ${line1}, and end at the station ${finish} on line ${line2}.`);

            const startIndex = this[line1].indexOf(start);
            const unionSquare1 = this[line1].indexOf('Union Square');
            const finishIndex = this[line2].indexOf(finish);
            const unionSquare2 = this[line2].indexOf('Union Square');
            let numOfStops = 0;

            if (line1 === line2) {
                console.log(`This trip will be completed in ${numOfStops} stop(s).`);
                this.oneLineTripPlanner(line1, start, finish);
                console.log(`You've reached your destination`);
                return;
            }

            numOfStops = Math.abs(startIndex - unionSquare1) + Math.abs(finishIndex - unionSquare2);

            console.log(`This trip will be completed in ${numOfStops} stop(s).`);
            
            this.oneLineTripPlanner(line1, start, 'Union Square');
            console.log(`Please make your way to line ${line2} at Union Square for the next leg of your journey.`);

            this.oneLineTripPlanner(line2, 'Union Square', finish);
            console.log("You've reached your destination.");
        },

        // This method will check if user arguments are valid
        checkValid: function (line1, start, line2, finish) {
            const keys = Object.keys(this);
            let errorCount = 0;
            
            if (keys.includes(line1)) {
                if (!this[line1].includes(start)) {
                    console.log (`ERROR: Station ${start} does not exist in line ${line1}.`);
                    errorCount++;
                }
            } else {
                console.log (`ERROR: Line ${line1} does not exist.`);
                errorCount++;
            }

            if (keys.includes(line2)) {
                if (!this[line2].includes(finish)) {
                    console.log (`ERROR: Station ${finish} does not exist in line ${line2}.`);
                    errorCount++;
                }
            } else {
                console.log (`ERROR: Line ${line2} does not exist.`);
                errorCount++;
            }

            if (errorCount !== 0) {
                return false;
            } else {
                return true;
            }

        }


    }; // end of object mta

MTA.twoLineTripPlanner('N', '34th', '6', 'Grand Central');
MTA.twoLineTripPlanner('N', '34th', 'N', '8th');

MTA.twoLineTripPlanner('N', '34th', '6', 'Grand Central');
MTA.twoLineTripPlanner('J', '34th', 'N', '101th');

MTA.twoLineTripPlanner('N', 'nihao', ':)', '8th');




