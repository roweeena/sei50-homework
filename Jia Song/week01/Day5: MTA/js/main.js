const MTA = {
  trainLines: {
    // T2: [
    //   "Circular quay", "Wynward", "Town hall", "Central", "Newtown", "Ashfield", "Strathfield"
    // ],
    // T4: [
    //   "Bondi junction", "Kings Cross", "Martin Place", "Town hall", "Museum", "Wolli Creek", "Husrtville"
    // ],
    // T9: [
    //   "Hornsby", "Gordon", "Chatswood", "Town hall", "Rhodes", "Epping"
    // ],

    N: [
      "Times Square", "34th", "28th", "23rd", "Union Square", "8th"
    ],
    L: [
      "8th", "6th", "Union Square", "3rd", "1st"
    ],
    "6": [
      "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"
    ]
  },

  // property to count how many stops they need to pass.
  stationCount: 0,


  findStationIndex: function(line, station) {
    // check if the line is exist.
    if((line in this.trainLines) === false) {
      console.log(`%cERROR: There is no ${line} line.`, `color:red`);
      return false;
    }

    // if the line is exist, find index of the station in the line.
    const index = this.trainLines[line].indexOf(station);

    if(index !== -1) {
      return index;
    }

    // if there isn't the station, return false value.
    console.log(`%cERROR: There is no ${station} on line ${line}.`, `color:red`);
    return false;
  },


  goForward: function(line, startIndex, endIndex) {
    let arr = [];

    // iterate from startIndex+1 to endIndex.
    // add 1 to startIndex to avoid going to the station they departed at first.
    for(let i=startIndex+1; i<=endIndex; i++) {
      // push all stations to "arr" array.
      arr.push(this.trainLines[line][i]);
      // count every station they need to pass.
      this.stationCount++;
    }

    return arr.join(", ");
  },

  // basically doing the same thing as "goForward" method, but iterate loop opposite way
  goBackward: function(line, startIndex, endIndex) {
    let arr = [];

    // if train is going backward, "i" in loop should be decreased.
    // minus 1 to startIndex to avoid going to the station they just departed.
    for(let i=startIndex-1; i>=endIndex; i--) {
      arr.push(this.trainLines[line][i]);
      this.stationCount++;
    }

    return arr.join(", ");
  },


  takeTrain: function(line, startStation, targetStation) {
    const startIndex = this.findStationIndex(line, startStation);
    const endIndex = this.findStationIndex(line, targetStation);

    // if there was error to find index, return false to "printTrip" method.
    if(startIndex === false || endIndex === false) {
      return false;
    }

    // if they are going backward, 
    if(startIndex > endIndex) {
      return this.goBackward(line, startIndex, endIndex);
    } else {
      return this.goForward(line, startIndex, endIndex);
    }
  },


  planTrip: function(startLine, startStation, targetLine, targetStation) {
    // print trip
    console.log(
      `%c----------- From ${startStation} on line ${startLine} to ${targetStation} on line ${targetLine} -----------`,
      `color: orange; background: black; padding: 10px;`
    );
    

    if(startLine === targetLine) {
    // if they don't need to transfer

      const stations = this.takeTrain(startLine, startStation, targetStation);

      // if there was error, return null to not print console.
      if(stations === false) {
        return null;
      }

      this.drawTrain();
      console.log(`
        %cYou must travel through the following stops on the ${startLine} line: ${stations}.`,
        `font-weight: bold; margin: 5px;`
      );

    } else {
    // if they need to transfer

      // let transferPoint = "Town hall";
      let transferPoint = "Union Square";

      // they need to go transferPoint first
      const stationsBeforeTransfer = this.takeTrain(startLine, startStation, transferPoint);
      // and then transfer to the targetLine from transferPoint
      const stationsAfterTransfer = this.takeTrain(targetLine, transferPoint, targetStation);

      // catch error
      if(stationsBeforeTransfer === false || stationsAfterTransfer === false) {
        return null;
      }

      this.drawTrain();
      console.log(`
        %cYou must travel through the following stops on the ${startLine} line: ${stationsBeforeTransfer}.
        Change at ${transferPoint} station.
        Your journey continues through the following stops: ${stationsAfterTransfer}.`,
        `font-weight: bold; margin: 5px;`
      );
    }

    // print total stops.
    console.log(`
      %c${this.stationCount} stops in total.`, 
      `color: green; font-weight: bold`
    )

    // initialise counter for next function execution .
    this.stationCount = 0;
  },

  drawTrain: function() {
    console.log(`%c
    ___________________________________________
    ________   ______________________>__
    []_[]||[| |]||[]_[]_[]|||[]_[]_[]||[|
    ===o-o==/_\==o-o======o-o======o-o==/______
    :::::::::::::::::::::::::::::::::::::::::::
   `, "font-weight: bold");
  }
}

// MTA.planTrip('T9', 'Hornsby', 'T2', 'Ashfield');
// MTA.planTrip('T9', 'Hornsby', 'T9', 'Epping');
// MTA.planTrip('T9', 'Epping', 'T9', 'Hornsby');


// forward direct trip test
MTA.planTrip('N', 'Times Square', 'N', '8th');
// backward direct trip test
MTA.planTrip('N', '8th', 'N', 'Times Square');
// forward transfer trip test
MTA.planTrip('N', 'Times Square', '6', '33rd');
// backward transfer trip test
MTA.planTrip('6', '33rd', 'N', 'Times Square');
// wrong station test
MTA.planTrip('L', 'Epping', 'T9', 'Hornsby');