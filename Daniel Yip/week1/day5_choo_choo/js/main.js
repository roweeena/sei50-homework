console.log('this is V2')


const mta = {
    lines: {
        'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    },

    tripDetails: { //storing details about the trip to be recalled in the message
        legOneLine: null,
        legOneArr: null,
        legTwoLine: null,
        legTwoArr: null,
        stopCount: null,
    },

    singleLineTrip : function(line, stationOn, stationOff){ //returns an array for a single trip leg

        let lineArray = this.lines[line].slice(); //create a copy of the lines array 
        let stationOnIndex = this.lines[line].indexOf(stationOn) //find the index of the starting station
        let stationOffIndex = this.lines[line].indexOf(stationOff) //find the index of the desitination on that line
    
        if (stationOnIndex > stationOffIndex){ //check the direction of travel, if its backwards then:
            lineArray.reverse() //reverse the array
            stationOnIndex = lineArray.indexOf(stationOn) //reset the starting index
            stationOffIndex = lineArray.indexOf(stationOff) //reset the ending index
        }
    
        lineArray = lineArray.slice(stationOnIndex + 1, stationOffIndex + 1); 
        //slice the array using the station indexes both offest by +1. 
        // The resulting array excludes the boarding station and includes the departing station.
    
        return lineArray
    }, //singleLineTrip()


    planTrip: function(lineOn, stationOn, lineOff, stationOff){


        if (lineOn === lineOff || stationOn === 'Union Square' || stationOff === 'Union Square'){ 
            //check if the trip is declared as a single line or if it starts or ends at the interchange.

            this.tripDetails.legOneLine = lineOn
            this.tripDetails.legOneArr = this.singleLineTrip(lineOn, stationOn, stationOff);
            this.tripDetails.stopCount = this.tripDetails.legOneArr.length
    
            console.log(`    
            "You must travel through the following stops on the ${this.tripDetails.legOneLine} 
            line: ${this.tripDetails.legOneArr.join(', ')}."
            "${this.tripDetails.stopCount} stops in total."`)
            
        } else{
    
            this.tripDetails.legOneLine = lineOn;
            this.tripDetails.legTwoLine = lineOff;
            this.tripDetails.legOneArr = this.singleLineTrip(lineOn, stationOn, 'Union Square');
            this.tripDetails.legTwoArr = this.singleLineTrip(lineOff, 'Union Square', stationOff);
            this.tripDetails.stopCount = this.tripDetails.legOneArr.length + this.tripDetails.legTwoArr.length

            console.log(`    
            "You must travel through the following stops on the ${this.tripDetails.legOneLine}
            line: ${this.tripDetails.legOneArr.join(', ')}."
            "Change at Union Square."
            "Your journey continues on the ${this.tripDetails.legTwoLine} line and you will travel 
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

