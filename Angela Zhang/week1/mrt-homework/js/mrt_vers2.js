//1. Storing 3 subway lines and their respective stations
//Object-nested arrays for each line
const mrtLines={
    N: ['Time Square','34th','28th','23rd','Union Square','8th'],
    L: ['8th','6th','Union Square','3rd','1st'],
    "6": ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
    
};


//direct access to the stations in each array
const lineN = mrtLines.N;
//console.log(`Stations in N Line are: ${lineN}`);// access to the list of stations in N line

const lineL = mrtLines.L;
//console.log(`Stations in L Line are: ${lineL}`);// access to the list of stations in L line

const line6 = mrtLines[6];// access to the list of stations in line 6 
//console.log(`Stations in Line 6 are: ${line6}`);

transferStop="Union Square";

let getLine = function(line,station){
    const lineNames= Object.keys(mrtLines).includes(line);

    if(lineNames === true){
        let lineResult = [];
       
        if (lineN.includes(station)){
        lineResult = lineN;

        } else if (lineL.includes(station)){
        lineResult = lineL
    
        } else if (line6.includes(station)){
        lineResult = line6
        } 
        console.log(lineResult);
        return lineResult;
        

    } else {
        console.log(`%c Line ${line} does not exist`,`color:red`)
    } 

}


getLine('N','Time Square');
getLine('B','Time Square');




const directTrip=function(startLine,startStation,endLine,endStation){
    const firstLine = getLine(startLine,startStation);
    const lastLine = getLine(endLine,endStation);
    
    const firstStationIndex= firstLine.indexOf(startStation);
    const lastStationIndex= lastLine.indexOf(endStation);

    let allStops= [];

    if(firstLine === lastLine){
        if(firstStationIndex<lastStationIndex){
        allStops=firstLine.slice(firstStationIndex,lastStationIndex)}
        else if(lastStationIndex<firstStationIndex){
        
        }

    } else if(firstLine !== lastLine){


    }

};
directTrip('N','Time Square','N','23rd');
//directTrip('N','Time Square','6','Grand');