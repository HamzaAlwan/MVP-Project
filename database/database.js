var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Weather');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var WeatherSchema = mongoose.Schema({
  CityName: {type: String, unique: true},
  Weather: String,
  Temperature: Number,
  WindSpeed: Number,
  Humidity: Number
});

var Weather = mongoose.model("Weather", WeatherSchema);

var saveWeather = function (data){
    if (!data.name){
      return console.error("Error")
    }
    obj = {CityName: data.name, Weather: data.weather[0].description,Temperature: data.main.temp, WindSpeed: data.wind.speed, Humidity: data.main.humidity}
    var weather = new Weather(obj)
    weather.save(function (err, data) {
    if (err) return console.error(err);
      console.log("DB Has been saved")
  });
}


module.exports.saveWeather = saveWeather;