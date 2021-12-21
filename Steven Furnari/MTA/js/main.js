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
    }, // startLineCheck() ==> returns correct starting line depending on input

    endLineCheck: function(endLine){
        if (endLine === `6`){
            return this.sixLine
        } else if (endLine === `N`){
            return this.nLine
        } else if (endLine === `L`){
            return this.lLine
        }            
    }, // secondLineCheck() ===> returns correct end line depending on input

    startStationIndex: function(startLine, startStation){
        const line = this.startLineCheck(startLine);
        return line.indexOf(startStation)
    }, // startStationIndex() ===> returns index of the starting station

    endStationIndex: function(endLine, endStation){
        const line = this.endLineCheck(endLine);
        return line.indexOf(endStation)
    }, // endStationIndex() ===> returns index of the end station

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
            }; // counts stops on new line from union square going forward
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