const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Hong Kong', (error, data) => {
    console.log('Error', error)
    console.log('GeoCode:', data)
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Weather forecast:", data);
});