console.log(`MTA Trip Planner - mta.plantrip(startLine, startStation, endLine, endStation)`)

const mta = {
    stations: {
        N: [
            'Times Square',
             '34th', 
             '28th', 
             '23rd', 
             'Union Square', 
             '8th'
            ],
        L: [
            '8th', 
            '6th', 
            'Union Square', 
            '3rd', 
            '1st'
        ],
        '6': [
            'Grand Central', 
            '33rd', 
            '28th', 
            '23rd', 
            'Union Square', 
            'Astor Place'
        ]
    }, // mta.stations

    planTrip: function(startLine, startStation, endLine, endStation){
        const firstLine = this.stations[startLine]; // startLine key        
        const secondLine = this.stations[endLine]; // endLine key
        const start = firstLine.indexOf(startStation); // index of startStation
        const end = secondLine.indexOf(endStation); // index of endStation
        const unionSquareStart = firstLine.indexOf(`Union Square`); // index of Union Square on startLine
        const unionSquareEnd = secondLine.indexOf(`Union Square`) // index of Union Square on endLine
        let stops = 0;
        let trip = [];

        if (startLine === endLine){ // if trip is on the same line            
            for (let i = start+1; i < end+1; i++){ // going forward
                stops++;
                trip.push(firstLine[i]);
            };
            for (let i = start-1; i > end-1; i--){ // going back
                stops++;
                trip.push(firstLine[i]);
            };
            console.log( `You will have ${(stops)} stops on your journey.`);
            console.log( `Starting at ${startStation} and stopping at following stations: ${trip.join(`, `)}` );

        } else if (startLine !== endLine) { // trip swaps line at Union Square
            for (let i = start+1; i < unionSquareStart+1; i++){ // counts stops to union square going forward
                stops++;
                trip.push(firstLine[i]);
            }; 
            for (let i = start-1; i > unionSquareStart-1; i--){ // counts stops to union square going back
                stops++;
                trip.push(firstLine[i]);
            }; 
            for (let i = unionSquareEnd+1 ; i < end+1; i++){ // counts stops on new line from union square going forward
                stops++;               
                trip.push(secondLine[i]);
            };
            for (let i = unionSquareEnd-1 ; i > end-1; i--){ // counts stops on new line from union square going back
                stops++;               
                trip.push(secondLine[i]); 
            }; 
            console.log( `You will have ${(stops)} stops on your journey.`);
            console.log( `Starting at ${startStation} on the ${startLine} line, with a change at Union Square to the ${endLine} line, stopping at following stations: ${trip.join(`, `)}` ); 
        };
    }, // planTrip()
}; // mta{}

// mta.planTrip(`6`, `Grand Central`, '6', `Astor Place`) // going forward on single line
// mta.planTrip(`6`, `Astor Place`, '6', `Grand Central`) // going back on single line
// mta.planTrip(`N`, `Times Square`, 'L', `1st`) // going forward with a change
// mta.planTrip(`L`, `1st`, '6', `Grand Central`) // going back with a change
// mta.planTrip(`N`, `Times Square`, '6', `Grand Central`) // going forward and changing to back
// mta.planTrip(`L`, `1st`, '6', `Astor Place`) // going back and changing to forward