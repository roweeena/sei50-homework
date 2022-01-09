// 3 subway line: N Line, L Line, 6 Line
// Only intersecting station: "Union Square"
// Program to work in either direction of the subway line
//1.Figure out which line to take
//2.List the stops between Start/Final destination
//3.Count the number of stops in the plantrip

//Output: (multiple lines)
// 1. Subway line 1 to take
// 2. list of station names in subway line 1
// 3. intersection: Change at Union Square Station
// 4. list of station names in subway line 2
// 5. Total of stops to reach final destinations


//1. Storing 3 subway lines and their respective stations
//Object-nested arrays for each line
const mrt={
    line_N: ['Time Square','34th','28th','23rd','Union Square','8th'],
    line_L: ['8th','6th','Union Square','3rd','1st'],
    line_6: ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
    
};

//direct access to the stations in each array
const lineN = mrt.line_N; 
const lineL = mrt.line_L;
const line6 = mrt.line_6;


//return subway line to take for the trip--
console.log(`SUBWAY LINE TO TAKE()--------------------------------`)
const getSingleSubwayLine = function (start,end){
    let lineResult = [];

    if (lineN.includes(start) && lineN.includes(end)){//If both start/last stop is included in a subway line it will return that specific array
    console.log("Take: Line N");
    lineResult = lineN

    } else if (lineL.includes(start) && lineL.includes(end)) {
    console.log("Take: Line L");
    lineResult = lineL

    } else if (line6.includes(start) && line6.includes(end)){
    console.log("Take: Line 6");
    lineResult = line6
    }
    // if both start/end stations doesn't belong to a single line, it will be an 
    //empty array--> later used for planTrip()
    return lineResult // returning an array of the subway line to be used for singleTrip()
};//getSingleSubwayLine()-- which subway line to take

getSingleSubwayLine("28th","Union Square");
getSingleSubwayLine("8th","1st");
getSingleSubwayLine("Grand Central","23rd")




///////////SINGLE TRIP PLAN-ANY LINE
console.log(`START singleTrip()-----------------------------------`)
const singleTrip = function (start,last){
    let lineToTake= getSingleSubwayLine (start,last);
    const firstStop = lineToTake.indexOf(start);
    const lastStop = lineToTake.indexOf(last); 
    const allstops = lineToTake.slice(firstStop+1,lastStop+1);// +1 to start print on the next station
    //and also include the last station
    const totalstops= allstops.length;
    
    if(firstStop < lastStop){// direction of the print depends if the index of firstStop is higher/lower than lastStop
       
        console.log(`Travel through the following stops: ${allstops}`);// prints stations in one line
        console.log(`${totalstops} stops in total.`);
        return totalstops;
      
    } else { 
        const reverseDirection = lineToTake.slice(lastStop ,firstStop);/////check the console.log of the correct stations names, need a plus 1? like allstops?
        
        console.log(`Travel through the following stops: ${reverseDirection.reverse()}`);
        console.log(`${reverseDirection.length} stops in total.`);
        return reverseDirection.length;
    } 

};// totalStops2()

singleTrip("28th","8th");
console.log(`------------------------------------`)
singleTrip("8th","28th");
console.log(`------------------------------------`)
singleTrip("1st","8th");
console.log(`------------------------------------`)
singleTrip("Union Square", "Grand Central");



//plantrip = Single/Multi Trip
console.log(`START planTrip()------------------------------------`)
const planTrip = function (startStation,endStation){

    const subwayLineResult = getSingleSubwayLine(startStation,endStation);

    const transferStation = "Union Square";
    if(subwayLineResult.length === 0){
        
        console.log(`%cYour trip from ${startStation} to ${endStation}`,`color:orange`);
        firstTrip = singleTrip(startStation,transferStation);// returning totalstops from singletrip()
        
        console.log(`%cThen change station at: ${transferStation}`,`color:orange`);
        secondTrip = singleTrip(transferStation,endStation);
    
        console.log(`Total stops in your Trip: ${firstTrip+secondTrip}`);
    } else {
        singleTrip(startStation,endStation)
    }

};// planTrip

planTrip("Time Square" , "Astor Place");
console.log(`------------------------------------`)
planTrip("Astor Place" , "Time Square");
console.log(`------------------------------------`)
planTrip("6th","33rd");
console.log(`------------------------------------`)
planTrip("8th","28th");

//planTrip("8th","8th")--> won't work with same station names-- doesn't know its from 2 different line-- Will have to add
//additional statements to for this case









