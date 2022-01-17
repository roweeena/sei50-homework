console.log(`MTA Exercise: What was actually asked for... oops`)
// WHY ARE THERE TWO VERSIONS, ALEX? 
// THERE ARE TWO VERSIONS BECAUSE I THOUGHT ALL THE LINES CONNECTED IN A CIRCLE!
// WHY DID YOU THINK THAT??? 
// I HAVE NO IDEA. I CAN'T READ MAYBE. COMPLETED BOTH VERSIONS IN ONE SITTING (2h30min). I'm hungry

// Could turn a lot of this stuff into functions 
// Code very messy
// Very hard to read what's going on 
// Indenting can be a lot better
// Not bad for 2h30min though... right? 

// 18th Dec 2021


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
        let whereUnionSquare = line[firstLineId].indexOf("Union Square")
        let whereUnionSquareTwo = line[secondLineId].indexOf("Union Square")
        let lineId = (line[firstLineId])
        let lineIdTwo = (line[secondLineId])

        if (firstLineId===secondLineId){
            let fwrdStops = [];
            let bkwdStops = [];
            fwrdDistFromDest = 0
            for (let i=whereAt; i<line[firstLineId].length; i++){ // when going through our loops, we need to find where union square is in the current pos array // match i w whereUnionSqr 
                // console.log(line.lineId[1]) // we don't know what firstLineId is referring to 
                if ([i]==whereTo){ 
                    break;
                } else {
                    fwrdDistFromDest++
                    fwrdStops.push(lineId[i])
                }
            }
            bkwdDistFromDest = 0

            if (whereAt>whereTo){
                for (let i=(line[firstLineId].length-1); i>0; i--){
                    if ([i]==whereTo){
                        break;
                    } else {
                        bkwdDistFromDest++
                        bkwdStops.push(lineId[i])
                    }
                }
            } // closes from length to target countdown 
            
            // console.log(`going forwards: `+fwrdStops)
            // console.log(fwrdStops)
            // console.log(`going backwards: `+bkwdStops)
            // console.log(bkwdStops)
            if (currentPos===desiredPos){
                console.log(`You are already where you want to go`)
            }
            else if (whereAt<whereTo){
                console.log(`Your journey is ${fwrdStops.length} stops long. On line ${firstLineId} at ${currentPos}, travel from ${fwrdStops.join(', then, ')} to arrive at station ${desiredPos}`)
               // (`At Union Square, on line ${secondLineId}, travel from ${fwrdStopsNewLine.join(', then ')} to arrive at ${desiredPos}`)
            } else {
                console.log(`Your journey is ${bkwdStops.length} stops long. On line ${firstLineId} at ${currentPos}, travel from ${bkwdStops.join(', then, ')} to arrive at ${desiredPos} on ${firstLineId}`)
            }
            
        } // closing if same line
        else {
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
            if (whereAt>whereTo){
                for (let i=(line[firstLineId].length-1); i>0; i--){
                    if ([i]==whereUnionSquare){
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
            if (whereUnionSquare<whereTo){
                for (let i=whereUnionSquareTwo; i<line[secondLineId].length; i++){ 
                    if ([i]==whereTo){ 
                        break;
                    } else {
                        fwrdDistFromDestNewLine++
                        fwrdStopsNewLine.push(lineIdTwo[i])
                    }
                }
            }
            bkwdDistFromDestNewLine = 0
            if (whereUnionSquare>whereTo){
                for (let i=whereUnionSquareTwo; i>0; i--){
                    if ([i]==whereTo){                    
                        break;
                    }  else {
                        bkwdDistFromDestNewLine++
                        bkwdStopsNewLine.push(lineIdTwo[i])
                        }
                } // closing loop
            }// TO UNION SQUARE on firstLineId 
            // first line statements 
            if (whereAt===whereUnionSquare){
                console.log(`No line transfer required`)
            }
            else if (whereAt<whereUnionSquare){
                console.log(`Change over at Union Square required. Your journey to Union Square is ${fwrdStops.length} stops long. Take line ${firstLineId} from station ${currentPos} and travel from ${fwrdStops.join(', then, ')} to arrive at station "Union Square" where you'll change over to line ${secondLineId}`)
            } else if (whereAt>whereUnionSquare) {
                console.log(`Change over at Union Square required. Your journey to Union Square is ${bkwdStops.length} stops long. Take line ${firstLineId} from ${currentPos} and travel from ${bkwdStops.join(', then ')} to arrive at station "Union Square" where you'll change over to line ${secondLineId}`)
            }
            // get to union square on firstLineId 
            
            // second line statements 
            if (whereUnionSquareTwo===whereTo){
                console.log(`You are already at "Union Square"`)
            }
            else if (whereUnionSquareTwo<whereTo){
                console.log(`From Union Square, your journey is ${fwrdStopsNewLine.length} stops long. On line ${secondLineId}, travel from ${fwrdStopsNewLine.join(', then ')} to arrive at ${desiredPos}`)
            } else if (whereUnionSquareTwo>whereTo){
                console.log(`From Union Square, your journey is ${bkwdStopsNewLine.length} stops long. On line ${secondLineId}, travel from ${bkwdStopsNewLine.join(`, then, `)} to arrive at ${desiredPos}`)
            }

            // stop counter
            if (whereAt===whereUnionSquare && whereUnionSquareTwo===whereTo){
                console.log(`Total stops: 0`);
            } else if (whereAt===whereUnionSquare && whereUnionSquareTwo<whereTo){
                console.log(`Total stops: ${fwrdStopsNewLine.length}`);
                } else if (whereAt===whereUnionSquare && whereUnionSquareTwo>whereTo){
                    console.log(`Total stops: ${bkwdStopsNewLine.length}`)
                }
            if (whereAt<whereUnionSquare && whereUnionSquareTwo<whereTo){
                console.log(`Total stops: ${fwrdStops.length += fwrdStopsNewLine.length}`);
                } else if (whereAt<whereUnionSquare && whereUnionSquareTwo>whereTo){
                console.log(`Total stops: ${fwrdStops.length += bkwdStopsNewLine.length}`);
                }
            if (whereAt>whereUnionSquare && whereUnionSquareTwo<whereTo){
                console.log(`Total stops: ${bkwdStops.length += fwrdStopsNewLine.lengths}`);
                } else if (whereAt>whereUnionSquare && whereUnionSquareTwo>whereTo){
                console.log(`Total stops: ${bkwdStops.length+= bkwdStopsNewLine.length}`)
                }
        } // closing is different line
    } // closing tripPlan
} // closing mtaTripPlanner
const line = mtaTripPlanner.trainLines 

