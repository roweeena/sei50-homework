
////////////////////////////////////////////////////////////TEST-- to delete
//Total Stations in the MRT
const totalStations= lineN.length + lineL.length + line6.length-2;
//-2 because of the 2 repeating intersecting Station "Union Square"
console.log(`Total stations in the MRT: ${totalStations}`);

//acessing index of each subway line station (test)
console.log("index position is: " + lineN.indexOf('28th'));// prints index number of the station in the array


//reverse array test ()
const testArray = [1,2,3,4,5,6];
console.log(testArray);


const reverseArray = testArray.reverse();
console.log(reverseArray);




//testing single trip line N////////METHOD 1
const totalStops = function (start1,end2){
    const firstStop = lineN.indexOf(start1);
    const lastStop = lineN.indexOf(end2);
    for(let i = firstStop; i <= lastStop; i++)
    {allStops = lineN[i];
    console.log(allStops)} 
};
totalStops("28th","8th");// prints the station is a loop, separate lines


//------------------------------------------

///////////SINGLE TRIP PLAN -ANY LINE
console.log(`START singleTrip()-----------------------------------`)
const singleTrip = function (start,last){
    let lineToTake= subwayLine (start,last);
    const firstStop = lineToTake.indexOf(start);
    const lastStop = lineToTake.indexOf(last); 
    const allstops = lineToTake.slice(firstStop,lastStop);// +1 to include the last station
    const totalstops= allstops.length;
    
    if(firstStop < lastStop){// direction of the print depends if the index of firstStop is higher/lower than lastStop
        //console.log(`start index: ${firstStop} last index: ${lastStop}`) test index position
        console.log(`You must travel through the following stops: ${allstops}`);// prints stations in one line
        console.log(`${totalstops} stops in total.`);
      
    } else if (firstStop > lastStop) { 
        const reverseDirection = lineToTake.slice(lastStop ,firstStop);
        //console.log(`start index: ${firstStop} last index: ${lastStop}`);
        console.log(`You must travel through the following stops: ${reverseDirection.reverse()}`);
        console.log(`${reverseDirection.length} stops in total.`);
    } else {
        console.log(lineToTake);
        return false;
    }

};// totalStops2()

//singleTrip("28th","8th");
// singleTrip("8th","28th");
// singleTrip("8th","Time Square");
// singleTrip("Time Square","Grand Central");
// singleTrip("Grand Central","Union Square");
// singleTrip("Union Square", "Grand Central");
// console.log(`End of singleTrip()-------------------------------------`)


// //Multiline
console.log(`START multiTrip()------------------------------------`)
const multiLine1 = function (startStation,endStation){

    const intersectionStation = "Union Square";
    const firstLine = singleTrip(startStation,intersectionStation);
    const secondLine = singleTrip(intersectionStation,endStation);
    

    if (firstLine === false){
    const firstStops = lineToTake.slice(startStation,intersectionStation);
   // const subwayLineName = lineToTake.key
    console.log(`First, you must travel through: ${firstStops}`)

    }




    // console.log(`First line to take: ${firstLine}`);
    // console.log(`Second line to take: ${secondLine}`)


//    const intersectionStop2 = lineN.filter(value => line6.includes(value));
//    console.log(`repeated stations in MRT: ${intersectionStop2}`)


};// multiLine1()
multiLine1("Time Square" , "Astor Place");
singleTrip("Time Square" , "Astor Place");

// //////////////SINGLE TRIP--TEST--LINE N ONLY
// console.log(`Start singleTrip2(LINE N)/////////////////////////////////////////`)
// const singleTrip2 = function (start2,last2){
//     const firstStop = lineN.indexOf(start2);
//     const lastStop = lineN.indexOf(last2); 
//     const allstops = lineN.slice(firstStop,lastStop+1);// +1 to include the last station
//     const totalstops2= allstops.length
    
//     if(firstStop < lastStop){
//         console.log(`Your trip from ${start2} to ${last2}:`)
//         console.log(`start index: ${firstStop} last index: ${lastStop}`)
//         console.log(`You must travel through the following stops: ${allstops2}`);// prints stations in one line
//         console.log(`${totalstops2} stops in total.`);
      
//     } else if (firstStop > lastStop) {
//         const reverseDirection = lineN.slice(lastStop ,firstStop);
//         console.log(`You must travel through the following stops: ${reverseDirection.reverse()}`);
//         console.log(`${reverseDirection.length} stops in total.`);
//         console.log(`start index: ${firstStop} last index: ${lastStop}`)
        
//     }

// };// totalStops2()

// singleTrip2("28th","8th");
// singleTrip2("8th","28th");
// singleTrip2("8th","Time Square");



//-------------------backup 1
//1. Storing 3 subway lines and their respective stations
//Object-nested arrays for each line
const mrt={
    line_N: ['Time Square','34th','28th','23rd','Union Square','8th'],
    line_L: ['8th','6th','Union Square','3rd','1st'],
    line_6: ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
    
};


//direct access to the stations in each array
const subwayLines = Object.keys(mrt);
//console.log(`The subway lines are: ${subwayLines}`);// list of the keys- subway line names

const lineN = mrt.line_N;
//console.log(`Stations in N Line are: ${lineN}`);// access to the list of stations in N line

const lineL = mrt.line_L;
//console.log(`Stations in L Line are: ${lineL}`);// access to the list of stations in L line

const line6 = mrt.line_6;// access to the list of stations in line 6 
//console.log(`Stations in Line 6 are: ${line6}`);


//return subway line to use-- figure out which line to take based on the start/end destination inputed// returning function type
console.log(`SUBWAY LINE TO TAKE()--------------------------------`)
const getSingleSubwayLine = function (start,end){
    let lineResult = [];
    let lineResultName = "";
    if (lineN.includes(start) & lineN.includes(end)){//If both start/last stop is included in a subway line it will return that specific array
    //console.log("Take: Line N");// test
    lineResult = lineN
    lineResultName= "Line N"
    } else if (lineL.includes(start) & lineL.includes(end)) {
    //console.log("Take: Line L");
    lineResult = lineL
    lineResultName ="Line L"
    } else if (line6.includes(start) & line6.includes(end)){
    //console.log("Take: Line 6");
    lineResult = line6
    lineResultName ="Line 6"
    }

    console.log(`Take Subway line : ${lineResultName}`);
    return lineResult // returning an array of the subway line
};//getSingleSubwayLine()-- which subway line to take
getSingleSubwayLine("28th","Union Square");
getSingleSubwayLine("8th","1st");
getSingleSubwayLine("Grand Central","23rd")




///////////SINGLE TRIP PLAN -ANY LINE//void function
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
      
    } else if (firstStop > lastStop) { 
        const reverseDirection = lineToTake.slice(lastStop ,firstStop);/////check the console.log of the correct stations names, need a plus 1? like allstops?
        
        console.log(`Travel through the following stops: ${reverseDirection.reverse()}`);
        console.log(`${reverseDirection.length} stops in total.`);
    } 

};// totalStops2()

singleTrip("28th","8th");
//singleTrip("8th","28th");
// singleTrip("8th","Time Square");
// singleTrip("Time Square","Grand Central");
// singleTrip("Grand Central","Union Square");
// singleTrip("Union Square", "Grand Central");
// console.log(`End of singleTrip()-------------------------------------`)


//plantrip = Single/Multi Trip
console.log(`START multiTrip()------------------------------------`)
const planTrip = function (startStation,endStation){

    const singleLine = getSingleSubwayLine(startStation,endStation);

    if(singleLine.length === 0){
    const intersectionStation = "Union Square";
    console.log(`Your trip from ${startStation} to ${endStation}`);
    singleTrip(startStation,intersectionStation);
    console.log(`Then change station at: ${intersectionStation}`);
    singleTrip(intersectionStation,endStation);
    } else {
        singleTrip(startStation,endStation)
    }
    

//     if (firstLine === false){
//     const firstStops = lineToTake.slice(startStation,intersectionStation);
//    // const subwayLineName = lineToTake.key
//     console.log(`First, you must travel through: ${firstStops}`)

//     }




    // console.log(`First line to take: ${firstLine}`);
    // console.log(`Second line to take: ${secondLine}`)


//    const intersectionStop2 = lineN.filter(value => line6.includes(value));
//    console.log(`repeated stations in MRT: ${intersectionStop2}`)


};// multiLine1()
planTrip("Time Square" , "Astor Place");
//planTrip("Astor Place" , "Time Square");

