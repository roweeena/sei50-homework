//MTA
//Only 2 things to solve the problem, and the rest is easy.
//Find index of  stops on both arrays if transfering 
//Check if the train needs to go forwards or backwards and that's it.

///////Reminder: SHOW MESSAGES IN A BETTER WAY.
const mta = {
    //Array of lines
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "Mascot", "Airport"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st", "North Sydney", "Central"],
    lineSix:["Grand Central", "33rd", "28th", "23rd", "North Sydney", "Union Square", "Astor Place","Green Square", "Town Hall"],
    intersection: "Union Square", //In case the intersaction change

    //Check if Multi trip and/or single trip
    whereTo:function(lineFrom, stopFrom, lineTo, stopTo){
       if(lineFrom !== lineTo){
           return this.multiTrip(lineFrom, stopFrom, lineTo, stopTo);
       }
       return  this.singleTrip(lineFrom, stopFrom, stopTo);
    },

    //We get the possible line stops and direction of train
    getLinesStops:function(line, stopFrom, stopTransfer = this.intersection){
        const index1 = this["line"+line].indexOf(stopFrom);
        const index2 = this["line"+line].indexOf(stopTransfer ); 
        let direction;
        //We check if we are going backwards or forwards, I reverse the array if we are going backwards. 
        direction = index1 < index2 ? this["line"+line].slice(index1, index2) : this["line"+line].slice(index2,index1).reverse();
        return direction;
    },

    //We show the stops for the single trip
    singleTrip: function(lineFrom, stopFrom, stopTo){
        const travel1 = this.getLinesStops(lineFrom, stopFrom, stopTo);
        totalStops = travel1.length
        return `You must travel trough the fallowing stops in line ${lineFrom}
                \n ${travel1.join("\n ")} 
                \n Last Stop: ${stopTo}
                \n Total stops ${totalStops}`;
    },

    //We show the stops for the multi trip including transfers
    multiTrip: function(lineFrom, stopFrom, lineTo, stopTo){
        const travel1 = this.getLinesStops(lineFrom, stopFrom);
        const travel2 = this.getLinesStops(lineTo, stopTo).reverse();
        const totalStops = travel1.length  + travel2.length
        return  `You must travel trough the fallowing stops in line ${lineFrom}
                \n ${travel1.join("\n ")} 
                \n Change at ${this.intersection} to Line ${lineTo} 
                \n Your journey continues through the following stops:
                \n ${travel2.join("\n ")}
                \n Last Stop: ${stopTo}
                \n Total stops ${totalStops}`       
    }
}         
console.log(mta.whereTo("N", "Times Square","Six","Grand Central"));