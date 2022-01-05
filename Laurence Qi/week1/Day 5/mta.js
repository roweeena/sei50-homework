const lines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    Six: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
// given the following parameters, determine the route from start to the destination station print each movement, Print line changes, print remaining stations. 
const planTrip = (startLine, startStation, stopLine, stopStation) => {
    // Confirm if all parameters are inside of the objects. 
    // debugger;
    const goToDestination = (currentLine, start, stop) => {
        //Find the index of the startStation and stopStation
        let i = currentLine.indexOf(start);
        let j = currentLine.indexOf(stop);
        const increment = j - i >= currentLine.length - j + i ? 1 : -1; //determine if train goes forwards or backwards

        while (currentLine[i] !== stop) {
            console.log(currentLine[i]);
            i += increment;

            //TODO: compress into one line
            if( increment === 1 ) {
                if (i === currentLine.length) { i = 0 }; // when you go to end of array go back to beginning. 
            }
            else {
                if (i === -1) { i = currentLine.length }
            }
        }
    }
    
    let currentLine = lines[startLine];// find the position in the array where starting station is. 
    console.log(`starting at line "${startLine}" and the starting station is "${startStation}"`)

    //Station on same line. 
    if (startLine === stopLine) {
        goToDestination(currentLine, startStation, stopStation);
    }
    else{
        goToDestination(currentLine, startStation, 'Union Square');
        console.log(`Switching to line "${stopLine}"`);
        
        currentLine = lines[stopLine];
        goToDestination(currentLine, 'Union Square', stopStation);
    }

    console.log(`You have arrived at your destination "${stopStation}"`);
}

planTrip('N', '34th', 'L', '8th');
// console.log("\n Next Trip \n");
// planTrip('N', '28th', 'N', 'Times Square');
