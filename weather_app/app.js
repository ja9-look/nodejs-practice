const request = require('request');
const darkSkyURL = 'https://api.darksky.net/forecast/5cc303ebaef3a974b9fde002a27c0f14/37.8267,-122.4233?units=si';
const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiamE5bG9vayIsImEiOiJjanVpZ3RuZjIxMjJxNDRvM2F4aWdlczU5In0.ZJFn9-Ej2zhjhk3ELkilPQ&limit=1'

request({ url: darkSkyURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    }
    else if (response.body.error) {
        console.log('Unable to find location')
    }
    else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
})

request({ url: mapBoxURL, json:true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service')
    } 
    else if (!response.body.features[0]) {
        console.log('Unable to find location')
    }
    else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(`Longitude: `, longitude)
        console.log(`Latitude: `, latitude)
    }
})