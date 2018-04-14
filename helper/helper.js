const request = require('request');
const config = require('../config.js');

let getWeatherByCityName = (cityName, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=7f2df14e0a531ed8ee69b8f42c2b73dc',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var info = JSON.parse(body);
  // console.log(info)
  callback(error, info); // Print the HTML for the Google homepage.
});
}



module.exports.getWeatherByCityName = getWeatherByCityName;