// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation and JS data structures.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// * Your trip planner must work in *either direction*, i.e. `planTrip('N', 'Times Square', '6', '33rd')` (starting at Times Square) should work as well as the reverse trip `planTrip('6', '33rd', 'N', 'Times Square')` (starting at 33rd).

// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * 👉 **Get the program to work for a single line (in any direction) before trying to tackle multiple lines.** 👈
// * Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code. 
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
// debugger;

//list of subway stations
const threeSubway = {
    
    lineN : ['Times Square', '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
    lineL : ['8th' , '6th' , 'Union Square' , '3rd' , '1st'], 
    line6 : ['Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ],


}
    
    const planTrip = function( startLine, startStation, endLine, endStation){
       
    //1. start Line     
    let initialLine = 0;
    if(startLine === 'Line N'){
        initialLine = threeSubway.lineN
    }else if(startLine === 'Line L'){
        initialLine = threeSubway.lineL
    }else if (startLine === 'Line 6'){
        initialLine = threeSubway.line6
    };

    //2. end line 
    let finishLine = 0;
    if (endLine === 'Line N'){
        finishLine = threeSubway.lineN
    }else if(endLine === 'Line L'){
        finishLine = threeSubway.lineL
    }else if (endLine === 'Line 6'){
        finishLine = threeSubway.line6
    };

    let initialStop = initialLine.indexOf(startStation);
    let endStop = finishLine.indexOf(endStation);  

    let transferStation = "Union Square"
    let firstTransfer = initialLine.indexOf(transferStation);
    let secondTransfer = finishLine.indexOf(transferStation);

    // Scenario 1 / when iniital line is same line as the finish line 
    if(initialLine === finishLine){

        // scenario 1-1 / when the final stop is further down than the initial stop
        if (initialStop < endStop){
        stopStation = initialLine.slice((initialStop), (endStop+1));
        numberOfStops = stopStation.length;
    
            console.log(` If you are travelling from '${startStation}' to '${endStation}' on '${startLine}', your journey will have ${numberOfStops} stops: %c ${stopStation}. `, "color : green");
        
        // scenario 1-2 / when the initial stop comes before the final stop
        }else if (initialStop > endStop){
            reverseLine = initialLine.reverse()
            initialStop = initialLine.indexOf(startStation);
            endStop = finishLine.indexOf(endStation);
            stopStation = reverseLine.slice((initialStop), (endStop+1));
            numberOfStops = stopStation.length;
            
            console.log(` If you are travelling from '${startStation}' to '${endStation}' on '${startLine}', your journey will have ${numberOfStops} stops: %c ${stopStation}. `, "color : green");

        }
    // scenario 2A / when initial line is not the same as the finish line 
    }else if ( initialLine !== finishLine){

        //scenario 2A-1 / initial line !== final line & union square is further down than the initial stop 
        if(initialStop < firstTransfer){
            stopStation = initialLine.slice((initialStop), (firstTransfer));
            numberOfStops = stopStation.length;

        //Scenario 2A-2 / initial line !== final line & union square comes before the initial stop 
        }else if( initialStop > firstTransfer){
            stopStation1 = initialLine.slice((firstTransfer), (initialStop));
            numberOfStops1 = stopStation1.length;
        } 
        
        //Scenario 2B-1 
        if(endStop < secondTransfer){
            stopStation2 = finishLine.slice((endStop), (secondTransfer));
            numberOfStops2 = stopStation2.length;
        
        //Scenario 2B-2
        }else if(endStop > secondTransfer){
            stopStation3 = finishLine.slice((secondTransfer+1), (endStop+1));
            numberOfStops3 = stopStation3.length;  
        }

        //if situation 2A-1 & 2B-1
        if(initialStop < firstTransfer && endStop < secondTransfer){
            numberOfStops4 = numberOfStops + numberOfStops2;
    
            console.log(` If you are travelling from '${startStation}' on '${startLine}' to '${endStation}' on '${endLine}', your journey will have ${numberOfStops4} stops: ${stopStation} on ${startLine}, transfer at ${transferStation} and continue the journey with ${stopStation2} on ${endLine}.`);

        //if situation 2B-1 & 2B-2
        }else if(initialStop > firstTransfer && endStop > secondTransfer){
            numberOfStops5 = numberOfStops1 + numberOfStops3

            console.log(` If you are travelling from '${startStation}' on '${startLine}' to '${endStation}' on '${endLine}', your journey will have ${numberOfStops5} stops : ${stopStation1} on ${startLine}, transfer at ${transferStation} and continue the journey with ${stopStation3} on ${endLine}.`);
        }

        
    
           

    }

    

    
    




    

}//planTrip function


planTrip('Line N', '8th', 'Line 6' , 'Astor Place');
planTrip('Line N', '34th', 'Line 6' , '33rd');
planTrip('Line N', '34th', 'Line N' , 'Union Square');
planTrip('Line N', 'Union Square', 'Line N' , '34th');





