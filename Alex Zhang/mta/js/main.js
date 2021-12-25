const mta = {

    subwayLines:{
        N:["Times Square","34th","28th","23rd","Union Square","8th"],
        L:["8th","6th","Union Square","3rd","1st"],
        SIX:["Grand Central","33rd","28th","23rd","Union Square", "Astor Place"]
    },

    findStartIndex: function(station, line){
        if(line in this.subwayLines){
            let indexOfStart=this.subwayLines[line].indexOf(station);
            return indexOfStart;
        }
    },

    findEndIndex: function(station, line){
        if(line in this.subwayLines){
            let indexOfEnd=this.subwayLines[line].indexOf(station);
            return indexOfEnd;
        }
    },
  
    noChange:function(startStation,startLine,endStation,endLine){
        let startIndex=this.findStartIndex(startStation,startLine);
        let endIndex=this.findEndIndex(endStation,endLine);
        let stops=this.subwayLines[startLine].slice(startIndex+1,endIndex+1);
        if(startIndex<endIndex){
            console.log(`You must travel through the following stops on the line
            ${startLine}: ${stops}`);          
        }

        if (startIndex>endIndex){
            stops=this.subwayLines[startLine].slice(endIndex,startIndex);
            console.log(`You must travel through the following stops on the line ${startLine}: ${stops.reverse()}`);
        }
        let stopsCount=stops.length;
            console.log(`${stopsCount} stops in total.`);
    },

    wrongStationAndLine: function(startStation,startLine,endStation,endLine){
        if (startLine in this.subwayLines === false || endLine in this.subwayLines===false){
        
        return true;
        }
        else{
            if(startLine==="N"){
                if(this.subwayLines["N"].includes(startStation)===false){
                    return true;
                }
            
            }
            if(endLine==="N"){
                if(this.subwayLines["N"].includes(endStation)===false){
                    return true;
                }
            }
            if(startLine==="L"){
                if(this.subwayLines["L"].includes(startStation)===false){
                    return true;
                }
            
            }
            if(endLine==="L"){
                if(this.subwayLines["L"].includes(endStation)===false){
                    return true;
                }
            }
            if(startLine==="SIX"){
                if(this.subwayLines["SIX"].includes(startStation)===false){
                    return true;
                }
            
            }
            if(endLine==="SIX"){
                if(this.subwayLines["SIX"].includes(endStation)===false){
                    return true;
                }
            }
        }
    },

    planTrip: function(startStation,startLine,endStation,endLine){
        //Wrong line or station
       let wrongStationAndLine=this.wrongStationAndLine(startStation,startLine,endStation,endLine);
       if (wrongStationAndLine===true){
            console.log("Please enter the correct subway line or subway stations.")
       }
       //corret line and stations
       else{
           //need to change line
            if(startLine!==endLine){
                let newEndLine=this.subwayLines[endLine];
                let newStartLine=this.subwayLines[startLine];
                let totalStops=0;
                //going forward
                let startIndex=this.findStartIndex(startStation,startLine);
                let startLineStops=[];
                //start line going forward
                if(newStartLine.indexOf(startStation)<newStartLine.indexOf("Union Square")){
                    let startLineStops=newStartLine.slice(startIndex+1,newStartLine.indexOf("Union Square"));
                    console.log(`You must travel through the following stops on the ${startLine} line: ${startLineStops} `);
                    //update total stops numbers
                    totalStops+=startLineStops.length;
                }
                //start line reverse
                if(newStartLine.indexOf(startStation)>newStartLine.indexOf("Union Square")){
                    let startLineStops=newStartLine.slice(newStartLine.indexOf('Union Square')+1,startIndex);
                    startLineStops=startLineStops.reverse();
                    console.log(`You must travel through the following stops on the ${startLine} line: ${startLineStops}`);
                    totalStops+=startLineStops.length;

                }
                //update total stops numbers;
                totalStops+=startLineStops.length;
                console.log("Change at Union Square.");
                //end line going foward
                if(newEndLine.indexOf(endStation)>newEndLine.indexOf("Union Square")){
                    let endLineStops=newEndLine.slice(newEndLine.indexOf("Union Square")+1,newEndLine.indexOf(endStation)+1);
                    console.log(`Your journey continues through the following stops: ${endLineStops}.`);
                    totalStops+=endLineStops.length;
                }
                //end line reverse;
                if(newEndLine.indexOf(endStation)<newEndLine.indexOf("Union Square")){
                    let endLineStops = newEndLine.slice(newEndLine.indexOf(endStation),newEndLine.indexOf("Union Square")).reverse();
                    console.log(`Your journey continues through the following stops: ${endLineStops}`);
                    totalStops+=endLineStops.length;               
                }
                console.log(`${totalStops+1} stops in total.`);

            }
            //no need to change line
            if(startLine == endLine){
                this.noChange(startStation,startLine,endStation,endLine);
            }
        }

    },

}
 