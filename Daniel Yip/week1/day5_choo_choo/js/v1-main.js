console.log('this is V1')

const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ["Grand Central", "33rd", "28th", "23rd", 'Union Square', "Astor Place"];

// CHECKS THE TYPE OF TRIP AND RUNS THE APPROPRIATE FUNCTION
const planTrip = function(lineOn, stationOn, lineOff, stationOff){
    let stopCount
    let totalTripArray

    // check if trip is a single line journey
    if (lineOn === lineOff){
        totalTripArray = singleLineTrip(lineOn, stationOn, stationOff);
        stopCount = totalTripArray.length;

        console.log(`    
        It is ${stopCount} stops to get from ${stationOn} to ${stationOff}.
        You will travel through ${totalTripArray}`)

    } else{
        totalTripArray = multiLineTrip(lineOn, stationOn, lineOff, stationOff);

        stopCount = totalTripArray.length;

        console.log(`
        It is ${stopCount} stops to get from ${stationOn} to ${stationOff}.
        You will have to change at Union Square.
        You will travel through ${totalTripArray.join(', ')}`)
    }

} //planTrip()


// RETURNS AN ARRAY WITH A SINGLE LINE TRIP IN THE CORRECT ORDER
const singleLineTrip = function(line, stationOn, stationOff){

    let lineArray = line.slice();

    let stationOnIndex = stationIndex(stationOn, line)

    let stationOffIndex = stationIndex(stationOff, line)

    if (stationOnIndex > stationOffIndex){
        lineArray.reverse()
        stationOnIndex = stationIndex(stationOn, lineArray)
        stationOffIndex = stationIndex(stationOff, lineArray)
    }

    lineArray = lineArray.slice(stationOnIndex, stationOffIndex);

    return lineArray;
}

// RETURNS A SINGLE ARRAY WITH A MULTI LINE TRIP IN THE CORRECT ORDER
const multiLineTrip = function(lineOn, stationOn, lineOff, stationOff){
    
    const legOneArray = singleLineTrip(lineOn, stationOn, 'Union Square');
    
    const legTwoArray = singleLineTrip(lineOff, 'Union Square', stationOff);

    return legOneArray.concat(legTwoArray);
}

//RETURN ARRAY INDEX FOR A STATION
const stationIndex = function(station, line){

    const index = line.indexOf(station);

    return index

} //findStationIndex()


// // RETURN ARRAY INDEX FOR 'UNION SQUARE' INTERCHANGE
// const interchangeIndex = function(line){

//     const index = line.indexOf('Union Square');

//     console.log(`The index of Union Square is ${index}`);

//     return index

// } // interchangeIndex()


// // RETURN THE DISTANCE BETWEEEN STATIONS
// const distanceBetweenStations = function(firstStation, secondStation){

//     let distance = firstStation - secondStation;

//     if (distance < 0) {
//         distance = distance * -1;     
//     }

//     return distance;
// };  //distanceBetweenStations()


planTrip(lineN, '34th', line6, 'Astor Place');

planTrip(lineN, '34th', lineN, 'Times Square');




