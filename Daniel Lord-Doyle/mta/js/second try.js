console.log('MTA Homework Loaded!')

const mta = {

    // list of all stops
    stops: {
        n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        l: ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }, // end of mta.stops

    findIndex: function (line, stop,) {
        return this.stops[`${line}`].indexOf(`${stop}`);
    }, // end of findIndex function

    giveStopList: function (line1, stop1, line2, stop2) {

        firstStop = this.findIndex(line1, stop1);
        secondStop = this.findIndex(line2, stop2);
        listOfStopsInArray = this.stops[line1].slice(firstStop, (secondStop + 1))
        presentableList = listOfStopsInArray.join(', ')
        return `Use the ${line1.toUpperCase()} line and use these stops: ${presentableList}`
    }, // end of giveStopList

    giveStopListUntilUnionSquare: function (line, stop) {

        firstStop = this.findIndex(line, stop);
        secondStop = this.findIndex(line, `Union Square`);
        listOfStopsInArray = this.stops[line].slice(stop, (secondStop + 1))
        presentableList = listOfStopsInArray.join(', ')
        return `First use the ${line.toUpperCase()} line and use these stops: ${presentableList}`
    }, // end of giveStopListUntilUnionSquare

    reverseLineOrder: function (line) {
        this.stops[`${line}`].reverse();
    }, // rend of reverseLineOrder


    planTrip: function (line1, stop1, line2, stop2) {

        // if line1 === line2
        if (line1 === line2) {

            // same line and order is correct
            if (this.findIndex(line1, stop1) < this.findIndex(line2, stop2)) {
                return this.giveStopList(line1, stop1, line2, stop2)
            } else {

                // same line, but we need to reverse the order of stops
                this.reverseLineOrder(line1)
                return this.giveStopList(line1, stop1, line2, stop2)
            }

            // if a change of line is required
        } else {

            // now we need to just get the index of stop1 on line1 and Union Square
            console.log(this.giveStopListUntilUnionSquare(line1, stop1));
            if (this.findIndex(line2, 'Union Square') < this.findIndex(line2, stop2)) {
                return this.giveStopList(line2, 'Union Square', line2, stop2)
            } else {
                this.reverseLineOrder(line2)
                console.log(`Then: ` + `${this.giveStopList(line2, 'Union Square', line2, stop2)}`)
            }

        }
    }, // end of planTrip function
} // end of mta object

mta.planTrip('n', 'Times Square', '6', 'Astor Place')