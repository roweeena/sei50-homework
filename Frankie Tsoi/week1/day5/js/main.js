console.log('i think its working');
/*

* There are 3 subway lines:
  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
* Your trip planner must work in *either direction*, i.e. `planTrip('N', 'Times Square', '6', '33rd')` (starting at Times Square) should work as well as the reverse trip `planTrip('6', '33rd', 'N', 'Times Square')` (starting at 33rd).

#### Hints:
* Work out how you would do it on paper first! Then start to explain that process in Javascript.
* 👉 **Get the program to work for a single line (in any direction) before trying to tackle multiple lines.** 👈
* Don't worry about prompting the user for input. Hard code some test-run calls to the tip planning function to make it fast to test your code. 
* Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
* The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
* Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
*/


const subwayLines = {
  lineN: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}


const singleTrip = function(line, startStation, endStation) {
  let stationsOnLine = subwayLines[line];
  let startStationIndex = stationsOnLine.indexOf(startStation);
  let endStationIndex = stationsOnLine.indexOf(endStation);
  let stopsCount = 0;
  let stops = ' ';
      
    if (startStationIndex < endStationIndex) { // Go forward
        for (let i = startStationIndex + 0; i <= endStationIndex; i++) {
          stops += stationsOnLine[i] + ' ';
          stopsCount++;
        }
      } else { // Go backward
        for (let i = startStationIndex - 0; i >= endStationIndex; i--) {
          stops += stationsOnLine[i] + ' ';
          stopsCount++;
        }
      }
      //console.log(`is this trip working, ${stationsOnLine}`);
      return stops;
}
const logfunction = singleTrip('lineN', 'Time Square', '8th');
console.log(logfunction);



 








