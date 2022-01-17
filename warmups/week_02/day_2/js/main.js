console.log('B E A C H D A Y S')

// # Beach Planner
// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.
//
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
//
// ### Hint:
// Find a way to store you data (array, object, ...)

const forecast = [
  {day: "Monday" ,
  temp: 20,
  rain: 12
},
  {day: "Tuesday",
  temp: 25,
  rain: 6
},
  {day: "Wednesday",
  temp: 27 ,
  rain: 24
},
  {day: "Thursday",
  temp: 32,
  rain: 65
},
  {day: "Friday" ,
  temp: 18 ,
  rain: 2
},
  {day: "Saturday" ,
  temp: 26,
  rain: 0
},
  {day: "Sunday",
  temp: 27,
  rain: 14
}
]

const beachPlanner = function(maxTemp, minRain, forecast){
  let beachDays =[];
  //loop through the array: if the temp > maxTemp and rain < minRain

  // forecast.forEach((daysObj) => {
  for (let i = 0; i < forecast.length; i++){
    let daysObj = forecast[i]
    console.log(daysObj)
    // console.log(daysObj.temp)
     if (daysObj.temp >= maxTemp && daysObj.rain <= minRain){
       beachDays.push(daysObj.day)
       console.log(beachDays)
     }
  }

  //if the array is empty then return something
  if (beachDays.length === 0){
    return "You shouldn't go to the beach this week"
  } else {
    //else give us the days
    return `You can go to the beach on these days: ${beachDays.join(', ')}`
  }

}

console.log(beachPlanner(24, 8, forecast))
