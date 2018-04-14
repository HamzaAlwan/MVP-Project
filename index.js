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
		console.log(data)
		db.saveWeather(data)
	})
	console.log(req.body);
	res.send(req.body);
});

app.get("/", function(req, res ){
	res.render("/index.html");
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

