var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database/database.js');
var helper = require('./helper/helper.js')
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

app.post('/data', function (req, res){
	helper.getWeatherByCityName(req.body.name, function(err, data){
		db.saveWeather(data)
	});
	res.send(req.body);
});

app.get('/data', function(req, res){
	db.Weather.find({}, function(err, data){
		res.send(data)
	})
})

app.get("/", function(req, res ){
	res.render("/index.html");
});

app.post('/drop', function(){
	db.Weather.remove({}, function(err, data){
		if (err){
			throw err
		}
		console.log("done")
	});
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

