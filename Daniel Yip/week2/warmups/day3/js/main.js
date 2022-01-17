console.log("hi");

// # Beach Planner
// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.

// ### Example:
// With the following forecast:
// ```
// Monday: the temperature is 20 and there is 12mm of rain
// Tuesday: the temperature is 25 and there is 6mm of rain
// Wednesday: the temperature is 27 and there is 24mm of rain
// Thursday: the temperature is 32 and there is 65mm of rain
// Friday: the temperature is 18 and there is 2mm of rain
// Saturday: the temperature is 26 and there is 0mm of rain
// Sunday: the temperature is 27 and there is 14mm of rain
// ```
// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program should be: Tuesday and Saturday

// ### Hint:
// Find a way to store you data (array, object, ...)


const thisWeekForcast = {
    Monday : { temp: 20, rain: 12,},
    Tuesday : { temp: 25, rain: 6,},
    Wednesday : { temp: 27, rain: 24,},
    Thursday : { temp: 32, rain: 65,},
    Friday : { temp: 18, rain: 2,},
    Saturday : { temp: 26, rain: 0,},
    Sunday : { temp: 27, rain: 14,},
}

const nextWeekForcast = {
    Monday : { temp: 99, rain: 0,},
    Tuesday : { temp: 25, rain: 0,},
    Wednesday : { temp: 27, rain: 0,},
    Thursday : { temp: 32, rain: 0,},
    Friday : { temp: 99, rain: 0,},
    Saturday : { temp: 26, rain: 0,},
    Sunday : { temp: 27, rain: 0,},
}


// // TESTING A for...in STATMENT 
// for (const key in forcast){
//     // console.log( key, forcast[key])
//     if (forcast[key].temp >= 24 && forcast[key].rain <= 8){
//         console.log(key)
//     }
// }


// // ADDING A key value pair TO TRACK THE BEACH DAYS
// for (const key in forcast){
//     // console.log( key, forcast[key])
//     if (forcast[key].temp >= 24 && forcast[key].rain <= 8){
//         forcast[key].beachToday = true
//         console.log(key, forcast[key])
//     }
// }


const checkForcast = function(minTemp, maxRain, forcast){
    const beachDays = []
    for (const day in forcast){
        if (forcast[day].temp >= minTemp && forcast[day].rain <= maxRain){
            beachDays.push(day)
        }
    }
    if (!beachDays.length){
        console.log(`Bring an umbrella, it's gonna be a wet one. There are no good beach days...`)
    } else {
        console.log(`This week the good days to go the the beach are ${beachDays.join(', ')}.`)
    }
}

checkForcast(24, 8, thisWeekForcast);

checkForcast(24, 8, nextWeekForcast)