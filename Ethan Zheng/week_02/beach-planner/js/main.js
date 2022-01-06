console.log("Beach Planner");

const beach = {
    forecast: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],

    getForecast: function (temp, rain) {
        const goodDays = [];
        for (let i = 0; i < this.forecast.length; i++) {
            const randomTemp = this.randomNumber(temp, (temp + 10));
            const randomRain = this.randomNumber(0, rain);
            console.log(this.forecast[i] + `: the temperature is ${randomTemp} and there is ${randomRain}mm of rain`);
            if (randomTemp >= 24 && randomRain <= 8) {
                goodDays.push(this.forecast[i]);
            }
        }
        if (goodDays.length < 1) {
            console.log("There are no good days");
            return;
        } else {
            console.log(goodDays.join(" and "));
            return goodDays.join(" and ");
        } 
    },


    randomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

beach.getForecast(20, 10);

beach.getForecast(50, 50);

beach.getForecast(12, 34);
