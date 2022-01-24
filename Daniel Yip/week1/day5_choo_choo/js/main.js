const mta = {

    lines: {
        'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    },

    tripDetails: { //storing details about the trip to be recalled in the message
        legOneArr: null,
        legTwoArr: null,
        stopCount: null,
    }, //tripDetails

    singleLineTrip : function(line, stationOn, stationOff){ //returns an array for a single trip leg

        let lineArray; //create a copy of the lines array 
        let stationOnIndex = this.lines[line].indexOf(stationOn) //find the index of the starting station
        let stationOffIndex = this.lines[line].indexOf(stationOff) //find the index of the desitination on that line
    
        if (stationOnIndex > stationOffIndex){ //check the direction of travel, if its backwards then:
            
            lineArray = this.lines[line].slice(stationOffIndex, stationOnIndex)
            lineArray.reverse() //reverse the array
            
        } else {
            lineArray = this.lines[line].slice(stationOnIndex + 1, stationOffIndex + 1); 
            // Slice the array using the station indexes both offest by +1. 
            // The resulting array excludes the boarding station and includes the departing station.
        }
        return lineArray
    }, //singleLineTrip()

    planTrip: function(lineOn, stationOn, lineOff, stationOff){

        if (lineOn === lineOff || stationOn === 'Union Square' || stationOff === 'Union Square'){ 
            //check if the trip is declared as a single line or if it starts or ends at the interchange.

            this.tripDetails.legOneArr = this.singleLineTrip(lineOn, stationOn, stationOff);
            this.tripDetails.stopCount = this.tripDetails.legOneArr.length
    
            console.log(`    
            "You must travel through the following stops on the ${lineOn} 
            line: ${this.tripDetails.legOneArr.join(', ')}."
            "${this.tripDetails.stopCount} stops in total."`)
            
        } else{
    
            this.tripDetails.legOneArr = this.singleLineTrip(lineOn, stationOn, 'Union Square');
            this.tripDetails.legTwoArr = this.singleLineTrip(lineOff, 'Union Square', stationOff);
            this.tripDetails.stopCount = this.tripDetails.legOneArr.length + this.tripDetails.legTwoArr.length

            console.log(`    
            "You must travel through the following stops on the ${lineOn}
            line: ${this.tripDetails.legOneArr.join(', ')}."
            "Change at Union Square."
            "Your journey continues on the ${lineOff} line and you will travel 
            through: ${this.tripDetails.legTwoArr}."
            "${this.tripDetails.stopCount} stops in total."`)
        }
    
    }, //planTrip()

} //mta{}

mta.planTrip('L', '8th', 'N', 'Union Square');
mta.planTrip('N', '34th', 'N', '8th');
mta.planTrip('6', 'Grand Central', 'N', 'Times Square');
mta.planTrip('N', 'Times Square', 'L', '1st');
mta.planTrip('N', '8th', 'N', '34th');

