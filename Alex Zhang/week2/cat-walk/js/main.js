const forecast={
temperature:[20,25,27,32,18,26,27],
rain:[12,6,24,65,2,0,14]
};
let storeRain=[];
let storeTemperature=[];
const planner=function(minTemperature,maxRain){
    for(let i=0;i<forecast.temperature.length;i++){
        if (minTemperature<forecast.temperature[i]){
            storeTemperature.push(i);
        }
    }
    console.log(storeTemperature);   

    for(let j=0;j<forecast.rain.length;j++){
        if(maxRain>forecast.rain[j]){
            storeRain.push(j);
        }
    }
    console.log(storeRain);

};
