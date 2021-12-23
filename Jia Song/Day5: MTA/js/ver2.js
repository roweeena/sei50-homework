// Version 2: used built-in methods instead of loop

const MTA = {
  trainLines: {
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

  transferPoint: "Union Square",

  // check if input is valid, and return station's index
  findStationIndex: function(line, station) {
    // check if the line is exist.
    if((line in this.trainLines) === false) {
      console.log(`%cERROR: There is no ${line} line.`, `color:red`);
      return false;
    }

    // if the line is exist, find index of the station in the line.
    const index = this.trainLines[line].indexOf(station);

    if(index === -1) {
      // if there isn't the station, return false value.
      console.log(`%cERROR: There is no ${station} on line ${line}.`, `color:red`);
      return false;
    }

    return index;
  },

  // it returns array of stations they passed
  getStations: function(line, startStation, targetStation) {
    const startIndex = this.findStationIndex(line, startStation);
    const endIndex = this.findStationIndex(line, targetStation);

    // catch error
    if(startIndex === false || endIndex === false) {
      return false;
    }

    if(startIndex < endIndex) {
      // add 1 to avoid going startStation again
      return this.trainLines[line].slice(startIndex+1, endIndex+1);
    } else {
      // reverse array if they are going backwards
      // since slice method doesn't return last item, there is no need to add 1 here
      return this.trainLines[line].slice(endIndex, startIndex).reverse();
    }
  },


  transfer: function(startLine, startStation, targetLine, targetStation) {
    const stationsBeforeTransfer = this.getStations(startLine, startStation, this.transferPoint);
    const stationsAfterTransfer = this.getStations(targetLine, this.transferPoint, targetStation);

    if(stationsBeforeTransfer === false || stationsAfterTransfer === false) {
      return null;
    }

    console.log(`
      %cYou must travel through the following stops on the ${startLine} line: ${stationsBeforeTransfer.join(', ')}.
      Change at ${this.transferPoint} station to the line ${targetLine}.
      Your journey continues through the following stops: ${stationsAfterTransfer.join(', ')}.
      ${stationsBeforeTransfer.length + stationsAfterTransfer.length} stops in total.`,
      `font-weight: bold; margin: 5px;`
    );
  },


  goDirectly: function(line, startStation, targetStation) {
    const stations = this.getStations(line, startStation, targetStation);

    if(stations === false) {
      return null;
    }

    console.log(`
      %cYou must travel through the following stops on the ${line} line: ${stations.join(', ')}.
      ${stations.length} stops in total.`,
      `font-weight: bold; margin: 5px;`
    );
  },


  planTrip: function(startLine, startStation, targetLine, targetStation) {
    // print trip
    console.log(
      `%c----------- From ${startStation} on the line ${startLine} to ${targetStation} on the line ${targetLine} -----------`,
      `color: orange; background: black; padding: 10px;`
    );
    
    if(startLine === targetLine) {
      this.goDirectly(startLine, startStation, targetStation);
    } else {
      this.transfer(startLine, startStation, targetLine, targetStation);
    }
  }
}

MTA.planTrip('N', 'Times Square', 'N', '23rd');
MTA.planTrip('N', '23rd', 'N', 'Times Square');
MTA.planTrip('N', 'Times Square', '6', '33rd');
MTA.planTrip('6', '33rd', 'N', 'Times Square');
MTA.planTrip('L', 'Epping', 'T9', 'Hornsby');