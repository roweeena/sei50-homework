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
    
    startLineCheck: function(startLine, startStation, endLine, endStation){
        if (startLine === `6`){
            return this.sixLine
        } else if (startLine === `N`){
            return this.nLine
        } else if (startLine === `L`){
            return this.lLine
        }            
    }, // startLineCheck() ==> returns correct starting line depending on input

    endLineCheck: function(startLine, startStation, endLine, endStation){
        if (endLine === `6`){
            return this.sixLine
        } else if (endLine === `N`){
            return this.nLine
        } else if (endLine === `L`){
            return this.lLine
        }            
    }, // secondLineCheck() ===> returns correct end line depending on input

    startStationIndex: function(startLine, startStation, endLine, endStation){
        const line = this.startLineCheck(startLine);
        return line.indexOf(startStation)
    }, // startStationIndex() 

    endStationIndex: function(startLine, startStation, endLine, endStation){
        const line = this.endLineCheck(startLine, startStation, endLine, endStation);
        return line.indexOf(endStation)
    }, // endStationIndex() 

    stopCounter: function(startLine, startStation, endLine, endStation){
        const start = this.startStationIndex(startLine, startStation);
        const end = this.endStationIndex(startLine, startStation, endLine, endStation)
        let stops = 0;
        let trip = [];
        for (let i = start+1; i < (end+1); i++){
            stops++;
            trip.push(this.startLineCheck(startLine)[i])
        } // for loop
        return `You will have ${(stops)} stops on your journey, starting at ${startStation} and stopping at following stations: ${trip.join(`, `)}`
    }, // stopCounter()





    // planTrip: function(startLine, startStation, endLine, endStation){

    // planTrip()
}
