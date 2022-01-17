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
const forecasts =[
    {Day: "Monday", Temperature: 20, rain: 12},
    {Day: "Tuesday", Temperature: 26, rain: 6},
    {Day: "Wednesday", Temperature: 27, rain: 24},
    {Day: "Thursday", Temperature: 32, rain: 65},
    {Day: "Friday", Temperature: 18, rain: 2},
    {Day: "Saturday", Temperature: 26, rain: 0},
    {Day: "Sunday", Temperature: 27, rain: 14},
]



const beachDay = function(day){
    for (let i = 0; i < forecasts.length; i++){
        // console.log(forecasts[i].Day)
        let currentForecast = forecasts[i]
        // if (currentForecast.Temperature >= 24 && currentForecast.rain >=8 ){
        //     console.log(`On ${currentForecast.Day}, it will be ${currentForecast.Temperature}. A great day for the beach`)
        // }
        if (day === currentForecast.Day && currentForecast.Temperature >= 24 && currentForecast.rain <=8 ){
            console.log(`%cOn ${currentForecast.Day}, it will be ${currentForecast.Temperature} degrees with only ${currentForecast.rain}mm of rain. A great day for the beach!`, 'color:aqua; font-weight:bold; font-size:20px; font-style:italic')
            // let canGo = {goodDay:true}
            // currentForecast.merge(forecasts, canGo);
        
        }   
        else if (day === currentForecast.Day && !(currentForecast.Temperature >= 24 && currentForecast.rain <=8)){
        console.log(`%cOn ${currentForecast.Day}, it will be ${currentForecast.Temperature} degrees with ${currentForecast.rain}mm of rain. A terrible day for the beach!`, 'color:crimson; font-size:20px')
        }
    }

}
beachDay();
beachDay("Monday");
beachDay("Tuesday");
beachDay("Wednesday");
beachDay("Thursday");
beachDay("Friday");
beachDay("Saturday");
beachDay("Sunday");


// Given example:
// const beachPlanner = function(maxTemp, minRain, forecast){
//     let beachDays = [];

//     forecast.forEach(forecasts) => {
//         if (daysObj)
//     }
// }