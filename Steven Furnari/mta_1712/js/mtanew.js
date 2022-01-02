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

    singleLineTrip: function(startLine, startStation, endStation){
        const firstLine = this.stations[startLine]; // startLine key
        const start = firstLine.indexOf(startStation); // index of startStation
        const end = firstLine.indexOf(endStation); // index of endStation
        if (start < end){
            return firstLine.slice(start+1, end+1).join(`, `)
        } else {
            return firstLine.reverse().slice(end+1, start+2).join(`, `)
        };        
    },

    planTrip: function(startLine, startStation, endLine, endStation){
        //debugger;
        const firstLine = this.stations[startLine]; // startLine key
        const start = firstLine.indexOf(startStation); // index of startStation
        const secondLine = this.stations[endLine]; // endLine key
        const end = secondLine.indexOf(endStation); // index of endStation
        const tripToUnionSquare = this.singleLineTrip(startLine, startStation, `Union Square`);
        const tripFromUnionSquare = this.singleLineTrip(endLine, `Union Square`, endStation);
        const singleLineTrip = this.singleLineTrip(startLine, startStation, endStation);
        const startLineUnionSquare = firstLine.indexOf(`Union Square`);
        const endLineUnionSquare = secondLine.indexOf(`Union Square`)
        
        if (startLine === endLine){ // single line trip

            if (start < end){  // going forward 
                console.log(`Starting at ${startStation} on the ${startLine} line, take the following stops: ${singleLineTrip}`);

            } else { // going back
                console.log(`Starting at ${startStation} on the ${startLine} line, take the following stops: ${singleLineTrip}`);
            };

        } else if (startLine !== endLine){ // change line

            if (start < startLineUnionSquare && end > endLineUnionSquare){ // going forward both lines
                console.log(`Starting at ${startStation} on the ${startLine} line, make a change at Union Square to the ${endLine} line`)
                console.log(`Taking the following stops: ${tripToUnionSquare}, ${tripFromUnionSquare}`);
debugger;
            } else if (start > startLineUnionSquare && end < endLineUnionSquare){ // going back both lines
                console.log(`Starting at ${startStation} on the ${startLine} line, make a change at Union Square to the ${endLine} line`)
                console.log(`Taking the following stops: ${tripToUnionSquare}, ${tripFromUnionSquare}`);

            }
            
        }
    }, // planTrip()

} // mta{}


// mta.planTrip(`6`, `Grand Central`, '6', `Astor Place`) // going forward on single line
// mta.planTrip(`6`, `Astor Place`, '6', `Grand Central`) // going back on single line
// mta.planTrip(`N`, `Times Square`, 'L', `1st`) // going forward with a change
// mta.planTrip(`L`, `1st`, '6', `Grand Central`) // going back with a change
// mta.planTrip(`N`, `Times Square`, '6', `Grand Central`) // going forward and changing to back
// mta.planTrip(`L`, `1st`, '6', `Astor Place`) // going back and changing to forward