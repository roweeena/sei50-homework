console.log('MTA Homework Loaded!')

const mta = {
    
    // list of all stops
    stops: {
        n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        l: ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }, // end of mta.stops

    
    findIndex: function (line, stop,) {
        return this.stops[line].indexOf(stop);
    }, // end of findIndex function


    giveStopList: function (line1, stop1, line2, stop2) {

        // find the index of the first and second stops and create a presentable list of those stops
        firstStop = this.findIndex(line1, stop1);
        secondStop = this.findIndex(line2, stop2);
        listOfStopsInArray = this.stops[line1].slice(firstStop, (secondStop + 1))
        presentableList = listOfStopsInArray.join(', ')

        return `Get on the ${line1.toUpperCase()} line and use these stops: ${presentableList}`
    }, // end of giveStopList


    giveStopListUntilUnionSquare: function (line, stop) {

        // similar to giveStopList but specifically for Union Square to allow changes easier. Probably not the most elegant way to do it!
        firstStop = this.findIndex(line, stop);
        secondStop = this.findIndex(line, 'Union Square'); 
        listOfStopsInArray = this.stops[line].slice(stop, (secondStop + 1))
        presentableList = listOfStopsInArray.join(', ')

        console.log(`First use the ${line.toUpperCase()} line and use these stops: ${presentableList}`)
    }, // end of giveStopListUntilUnionSquare


    reverseLineOrder: function (line) { 
        this.stops[`${line}`].reverse();
    }, // end of reverseLineOrder
    
    
    planTrip: function (line1, stop1, line2, stop2) {


        if (line1 === line2) {


            // same line and order is correct 
            if (this.findIndex(line1, stop1) < this.findIndex(line2, stop2)) {
                console.log(`${this.giveStopList(line1, stop1, line2, stop2)}`)
            } else {
                // same line, but we need to reverse the order of stops
                this.reverseLineOrder(line1)
                console.log(`${this.giveStopList(line1, stop1, line2, stop2)}`)
            }

        
        } else {

            // the request is to go from one line to the other. start by giving them their way to Union Square, then deal with the rest of the trip
            this.giveStopListUntilUnionSquare(line1, stop1);


            if (this.findIndex(line2, 'Union Square') < this.findIndex(line2, stop2)) {

                // if they need to change lines BUT the order is still correct we can simply give them the remaining directions from 
                // Union Square to their 2nd stop
                console.log('You need to change lines at Union Square.')
                console.log(`${this.giveStopList(line2, 'Union Square', line2, stop2)}`)


            } else {

                // we are simply reversing the array here to get people from Union Square to their second stop
                this.reverseLineOrder(line2)
                console.log('You need to change lines at Union Square.')
                console.log(`${this.giveStopList(line2, 'Union Square', line2, stop2)}`)
            }
        }
    }, // end of planTrip function


} // end of mta object


console.log(mta.planTrip('n', 'Times Square', '6', 'Astor Place'))