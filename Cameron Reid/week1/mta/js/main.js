
const lineN = ["Times Square", "Union Square", "34th", "28thLN", "23rdLN", "8thLN"];
const lineL = ["8thLL", "6th", "Union Square", "3rd", "1st"];
const line6  = ["Grand Central", "33rd", "28thL6", "23rdL6", "Union Square", "Astor Place"];


const sameLine = function(station, start, end){
    let counter = 0;
    let stationStops = [];
    startPoint = station.indexOf(start);
    endPoint = station.indexOf(end);

        if(startPoint < endPoint){ 
            for(let i = startPoint; i <= endPoint; i++ ){
                stationStops.push(station[i]);
                counter ++;
            } //end of forLoop
            
            console.log(`You have ${counter} stops on your trip and you will pass through these stations: ${stationStops.join(", ")}.`); 
        }

        else {
            for(let i = startPoint; i >= endPoint; i --){
                stationStops.push(station[i]);
                counter ++;
            }
            console.log(`You have ${counter} stops on your trip and you will pass through these stations: ${stationStops.join(", ")}.`);
        }
}; //end of sameLine()


const firstPart = function(station, startPoint, startUnion){ //this builds the first leg of the journey up to and including the change at Union Square
        if(startPoint < startUnion){ //checks if the end point index is less than Union square 
            for(let i = startPoint; i <= startUnion; i ++){
                stationStopsFirstLine.push(station[i]);
                counterStart ++; 
            } 
            stationStopsFirstLine.reverse(); // reverses the array so it displayes the correct order
            return stationStopsFirstLine, counterStart;
        } 
        else {
            for(let i = startPoint; i >= startUnion; i--){
                stationStopsFirstLine.push(station[i]);
                counterStart ++; 
        }
        return stationStopsFirstLine, counterStart;
    }
}; //end of firstPart()

const secondPart = function(station, endPoint, endUnion){ // builds the second part of the journey starting AFTER Union Square
        if(endPoint < endUnion){ //checks if the end point index is less than Union square
            for(let i = endPoint; i < endUnion; i ++){
                stationStopsSecondLine.push(station[i]);
                counterEnd ++;
            } 
            stationStopsSecondLine.reverse(); // reverses the array so it displayes the correct order
            return stationStopsSecondLine, counterEnd; //returns the reversed array and how many times the loop ran
        } 
        else {
            for(let i = endPoint; i > endUnion; i--){
                stationStopsSecondLine.push(station[i]);
                counterEnd ++; 
        }
        return stationStopsSecondLine, counterEnd; //returns the array and counter
    }
}; //end of secondPart()

const setUpJourney = function(startLine, platformStart, endLine, platformEnd){ // builds the variables and sets values to begin bulding the different line function
    //create variables and assign the value of "empty" to them
    counterStart = 0;
    counterEnd = 0;
    finalCounter = 0;
    stationStopsSecondLine = [];
    stationStopsFirstLine = [];

    startPoint = startLine.indexOf(platformStart); //coverts the start point to a number
    endPoint = endLine.indexOf(platformEnd); // converts end point to a number
    startUnion = startLine.indexOf("Union Square") //you get the idea
    endUnion = endLine.indexOf("Union Square")
}; //end of setUpJourney()

const buildTrip = function(startLine, endLine){
    firstPart(startLine, startPoint, startUnion)//calls this function line 31
    secondPart(endLine, endPoint, endUnion) // call this function after first line is done line 49
    finalCounter = counterStart + counterEnd; //concats the 2 counter values
}; //end of buildTrip()

const differentLine = function(startLine, platformStart, endLine, platformEnd){
    setUpJourney(startLine, platformStart, endLine, platformEnd); //call the function to set up variables line 67

    if(startLine === lineN && endLine === lineL || startLine === lineL && endLine === lineN){
        buildTrip(startLine, endLine) //takes the start and end lines and calls the buildTrip function Line 80
    }
    if(startLine === lineN && endLine === line6|| startLine === line6 && endLine === lineN){
        buildTrip(startLine, endLine)
    }
    if(startLine === lineL && endLine === line6 || startLine === line6 && endLine === lineL){
        buildTrip(startLine, endLine)
    }
    console.log(`You have ${finalCounter} stops on your trip and you will pass through these stations: ${stationStopsFirstLine.join(", ")} ${stationStopsSecondLine.join(", ")}.`); //Logs the result in the console if the lines are different

}; // end differentLine()

const planTrip = function(startLine, platformStart, endLine, platformEnd){
    if( startLine === endLine ){
        sameLine(startLine, platformStart, platformEnd) //calls the same line function with the arguments line 7
    } 
    else {
        differentLine(startLine, platformStart, endLine, platformEnd); //calls the different line function line 86
    } //end of if

}; //end of planTrip()

// const lineN = ["Times Square",  "Union Square", "34th", "28thLN", "23rdLN", "8thLN"];
// const lineL = ["8thLL", "6th", "Union Square", "3rd", "1st"];
// const line6  = ["Grand Central", "33rd", "28thL6", "23rdL6", "Union Square", "Astor Place"];

//Multi line
console.log(`%cTrip 1 - Multi Line`, "color: red; font-size: 16px");
planTrip(lineN, "8thLN", lineL, "8thLL");

console.log(`%cTrip 2 - Multi Line`, "color: red; font-size: 16px");
planTrip(lineL, "8thLL", lineN, "34th");

console.log(`%cTrip 3 - Multi Line`, "color: red; font-size: 16px");
planTrip(lineL, "1st", line6, "33rd");

console.log(`%cTrip 4 - Multi Line`, "color: red; font-size: 16px");
planTrip(line6, "Grand Central", lineL, "6th");

console.log(`%cTrip 5 - Multi Line`, "color: red; font-size: 16px");
planTrip(lineN, "Times Square", line6, "Grand Central");

console.log(`%cTrip 6 - Multi Line`, "color: red; font-size: 16px")
planTrip(line6, "Astor Place", lineN, "28thLN");


//Same line
console.log(`%cTrip 1 - Single Line`, "color: green; font-size: 16px")
planTrip(lineN, "34th", lineN, "8thLN");

console.log(`%cTrip 2 - Single Line`, "color: green; font-size: 16px")
planTrip(lineN, '8thLN', lineN, "34th");

console.log(`%cTrip 3 - Single Line`, "color: green; font-size: 16px")
planTrip(lineL, "6th", lineL, "3rd");

console.log(`%cTrip 4 - Single Line`, "color: green; font-size: 16px")
planTrip(lineL, "3rd", lineL, "6th");

console.log(`%cTrip 5 - Single Line`, "color: green; font-size: 16px")
planTrip(line6, "Grand Central", line6, "Union Square")

console.log(`%cTrip 6 - Single Line`, "color: green; font-size: 16px")
planTrip(line6, "Union Square", line6, "Grand Central")
