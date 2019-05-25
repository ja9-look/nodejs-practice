const request = require('request');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
    const url =
      "https://api.darksky.net/forecast/5cc303ebaef3a974b9fde002a27c0f14/" + latitude + "," + longitude + "?units=si";

      request ({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 
                response.body.daily.data[0].summary +
                " It is currently " +
                response.body.currently.temperature +
                " degrees out. There is a " +
                response.body.currently.precipProbability +
                "% chance of rain."
            );
        }
      })
}


module.exports = forecast;