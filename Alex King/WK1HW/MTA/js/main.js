console.log(`MTA Exercise: BUT EVERY LINE LOOPS`)

// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation and JS data structures.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// prints the journey and no of stops !! 

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// * Your trip planner must work in *either direction*, i.e. `planTrip('N', 'Times Square', '6', '33rd')` (starting at Times Square) should work as well as the reverse trip `planTrip('6', '33rd', 'N', 'Times Square')` (starting at 33rd).

// we need arrays for each line in an obj. The arrays don't matter how they're sorted, but the stops matter, so an array matters.

const mtaTripPlanner = {
    trainLines: {
        N:[
        "Time Square",
        "34th",
        "28th", //different from 6
        "23rd",
        "Union Square",
        "8th", //different from l
        ],

        L:[
        "8th", //different from n 
        "6th",
        "Union Square",
        "3rd",
        "1st",
        ],

        6:[
        "Grand Central",
        "33rd",
        "28th", //different from 6
        "23rd", // different from n
        "Union Square",
        "Astro Place",
        ],
    },//closing trainLines
    tripPlan: function(currentPos, firstLineId, desiredPos, secondLineId){
        //Constants 
        let whereAt = line[firstLineId].indexOf(currentPos); 
        let whereTo = line[secondLineId].indexOf(desiredPos);
        // console.log(`You are ${whereAt} (${currentPos}) and want to go to ${whereTo} (${desiredPos})`);
        let whereUnionSquare = line[firstLineId].indexOf("Union Square")
        let whereUnionSquareTwo = line[secondLineId].indexOf("Union Square")
        // console.log(`Union Square is located at position ${whereUnionSquare}`)
        //Needs to be 2 parts... finding your way to Union Square in firstLineNo, then from unionSquare in secondLineNo
        // make loop that counts up and one that counts down. Whichever reaches Union Square first is the order taken 
        
        // let distFromUnionSqr = whereAt - whereUnionSquare;
        // console.log(Math.abs(distFromUnionSqr)); this will not work because we this simply finds the distance. We don't have enough information on which direction is shortest 
        // let lineId = line[firstLineId]
        // // console.log(lineId)
        // console.log(lineId[3])


        ///////   -   -   -   -   -   -   -   -   -   -   -   -
        //// turn to a function so you don't keep rewriting!  -   -   -   -   -   -   -
            let lineId = (line[firstLineId])
            let lineIdTwo = (line[secondLineId])
        if (firstLineId===secondLineId){
            console.log('only one line needed')
            // let goBack=false;
            let fwrdStops = [];
            let bkwdStops = [];
            
            // let bkwdStops = stopsToZero.concat(stopsToDest);

            //if bkwdStops.length > fwrdStops.length ... 
                // else ... 

            // console.log(lineId[3])
            fwrdDistFromDest = 0
            for (let i=whereAt; i<line[firstLineId].length; i++){ // when going through our loops, we need to find where union square is in the current pos array // match i w whereUnionSqr 
                // console.log(line.lineId[1]) // we don't know what firstLineId is referring to 
                if ([i]==whereTo){ //&& distFromDest>0
                    // console.log(`Your destination is ${fwrdDistFromDest} stations away`);
                    break;
                } else {
                    fwrdDistFromDest++
                    fwrdStops.push(lineId[i])
                }
            }
            bkwdDistFromDest = 0
            for (let i=whereAt; i>=0; i--){ 
                if ([i]==0){
                    bkwdStops.push(lineId[0])
                    // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                    break;
                } else {
                    bkwdDistFromDest++
                    bkwdStops.push(lineId[i])
                }
            }
            if (whereAt<whereTo){
                for (let i=(line[firstLineId].length-1); i>0; i--){
                    if ([i]==whereTo){
                        // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                        
                        break;
                    } else {
                        bkwdDistFromDest++
                        bkwdStops.push(lineId[i])
                    }
                }
            } // closes from length to target countdown 
            
            // console.log(`going forwards: `+fwrdStops)
            console.log(fwrdStops)
            // console.log(`going backwards: `+bkwdStops)
            console.log(bkwdStops)
            
            if (fwrdStops.length<=bkwdStops.length){
                console.log(`Your journey is ${fwrdStops.length} stops long. On line ${firstLineId} at ${currentPos}, travel from ${fwrdStops.join(', then, ')} to arrive at station ${desiredPos}`)
               // (`At Union Square, on line ${secondLineId}, travel from ${fwrdStopsNewLine.join(', then ')} to arrive at ${desiredPos}`)
            } else if (fwrdStops.length>bkwdStops.length) {
                console.log(`Your journey is ${bkwdStops.lengrth} stops long. On line ${firstLineId} at ${currentPos}, travel from ${bkwdStops.join(', then, ')} to arrive at ${desiredPos} on ${firstLineId}`)
            }
            // let bkwdDistFromDest=0
            //we need an if statement for if the station is before or after ... if currentPos
            // if (whereAt<whereTo){
            //     console.log('%cline is before',`color:plum`)

            // }else {
            //     for (let i=whereAt; i<line[firstLineId].length; i--){ //if stop comes after ONLY ... infinite loop if before
            //         // console.log(line.lineId[1]) // we don't know what firstLineId is referring to 
            //         if ([i]==whereTo){ //&& distFromDest>0
            //             console.log(`%cUnion Square is ${bkwdDistFromDest} stations away``color:plum`);
            //             break;
            //         } else{
            //             bkwdDistFromDest++
            //             bkwdStops.push(lineId[i])
            //         }
            //     }
    
        } // closing if same line
        else {
            console.log('change over is required')
           //TO UNION SQUARE ON firstLineId 
            let fwrdStops = [];
            let bkwdStops = [];
            fwrdDistFromDest = 0
            for (let i=whereAt; i<line[firstLineId].length; i++){ // when going through our loops, we need to find where union square is in the current pos array // match i w whereUnionSqr 
                // console.log(line.lineId[1]) // we don't know what firstLineId is referring to 
                if ([i]==whereUnionSquare){ //&& distFromDest>0
                    // console.log(`Your destination is ${fwrdDistFromDest} stations away`);
                    break;
                } else {
                    fwrdDistFromDest++
                    fwrdStops.push(lineId[i])
                }
                // console.log(fwrdDistFromDest)
            }
            bkwdDistFromDest = 0
            for (let i=whereAt; i>=0; i--){ 
                if ([i]==0){
                    bkwdStops.push(lineId[0])
                    // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                    break;
                } else {
                    bkwdDistFromDest++
                    bkwdStops.push(lineId[i])
                }
            }
            if (whereAt<whereTo){
                for (let i=(line[firstLineId].length-1); i>0; i--){
                    if ([i]==whereUnionSquare){
                        // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                        
                        break;
                    } else {
                        bkwdDistFromDest++
                        bkwdStops.push(lineId[i])
                    }
                } // TO UNION SQUARE on firstLineId 
            } // closes from length to target countdown 
            // ON NEW LINE  _    _    _    _    _    _    _    _ 
            let fwrdStopsNewLine = [];
            let bkwdStopsNewLine = [];
            fwrdDistFromDestNewLine = 0
            for (let i=whereUnionSquareTwo; i<line[secondLineId].length; i++){ // when going through our loops, we need to find where union square is in the current pos array // match i w whereUnionSqr 
                // console.log(line.lineId[1]) // we don't know what firstLineId is referring to 
                if ([i]==whereTo){ //&& distFromDest>0
                    // console.log(`Your destination is ${fwrdDistFromDest} stations away`);
                    break;
                } else {
                    fwrdDistFromDestNewLine++
                    fwrdStopsNewLine.push(lineIdTwo[i])
                }
                // console.log(fwrdDistFromDest)
            }
            bkwdDistFromDestNewLine = 0
            for (let i=whereUnionSquareTwo; i>=0; i--){ 
                if ([i]==0){
                    bkwdStopsNewLine.push(lineIdTwo[0])
                    // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                    break;
                } else {
                    bkwdDistFromDestNewLine++
                    bkwdStopsNewLine.push(lineIdTwo[i])
                }
            }
            if (whereUnionSquare<whereTo){
                for (let i=(line[secondLineId].length-1); i>0; i--){
                    if ([i]==whereTo){
                        // console.log(`Your destination is ${bkwdDistFromDest} stations away`)
                        
                        break;
                    } else {
                        bkwdDistFromDestNewLine++
                        bkwdStopsNewLine.push(lineIdTwo[i])
                    }
                } // TO UNION SQUARE on firstLineId 
            }
            // console.log(`going forwards: `+fwrdStops)
            console.log(fwrdStops)
            // console.log(`going backwards: `+bkwdStops)
            console.log(bkwdStops)

            console.log(fwrdStopsNewLine)
            console.log(bkwdStopsNewLine)


            // first line statements 
            if (whereAt===whereUnionSquare){
                console.log(`No line transfer required`)
            }
            else if (fwrdStops.length<=bkwdStops.length){
                console.log(`Change over at Union Square required. Your journey to Union Square is  ${bkwdStops.length} stops long. Take line ${firstLineId} from station ${currentPos} and travel from ${fwrdStops.join(', then, ')} to arrive at station "Union Square" where you'll change over to line ${secondLineId}`)
            } else if (fwrdStops.length>bkwdStops.length) {
                console.log(`Change over at Union Square required. Your journey to Union Square is ${bkwdStops.length} stops long. Take line ${firstLineId} from ${currentPos} and travel from ${bkwdStops.join(', then ')} to arrive at ${desiredPos} on ${firstLineId}`)
            }
            // get to union square on firstLineId 
            
            // second line statements 
            if (whereUnionSquareTwo===whereTo){
                console.log(`You are already at "Union Square"`)
            }
            else if (fwrdStopsNewLine.length<=bkwdStopsNewLine.length){
                console.log(`From Union Square, your journey is ${fwrdStopsNewLine.length} stops long. On line ${secondLineId}, travel from ${fwrdStopsNewLine.join(', then ')} to arrive at ${desiredPos}`)
            } else if (fwrdStopsNewLine.length>bkwdStopsNewLine.length){
                console.log(`From Union Square, your journey is ${bkwdStopsNewLine.length} stops long. On line ${secondLineId}, travel from ${bkwdStopsNewLine.join(`, then, `)} to arrive at ${desiredPos}`)
            }



        } // closing is different line
    } // closing tripPlan
} // closing mtaTripPlanner
const line = mtaTripPlanner.trainLines 


 
// find array that has the destination. 
    //indexOf union square 
// iterate through station that you are in until you find union square (all lines can go backwards) <== loop (mtaTripPlanner.)
// once you have left array (found union square)
// how do you print total number of stops? <== output loop into array and count? is there a simpler way?  
// Assuming the trains can go both ways, how do you calculate the shortest path? <== create a forward and backward loop and break when i=union square 


//bonus add another line that doesn't connect at union square
//bonus add a stop that will require multiple change overs ==> station with change over that only connects to station that connects with union square 
//bonus make drop down menu of current location and desired destination 
//bonus make a map of the lines (maybe like a simple web intersecting) that lights up the path needed (highlights the output from tripPlan)




// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * 👉 **Get the program to work for a single line (in any direction) before trying to tackle multiple lines.** 👈
// * Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code. 
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

