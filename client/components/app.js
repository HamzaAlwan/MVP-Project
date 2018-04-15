angular.module('app')
.controller('AppCtrl', function($http) {
	this.ShowWeather =(cityname) =>{
		$http({
			method: 'POST',
			url: '/data',
			data: {name: cityname || "London"},
			headers: {'Content-Type': 'application/json'}
		});
	},

		$http({
			method: 'GET',
			url: '/data'
		}).then(function Done(res) {
        	this.Cities = res.data;
        	console.log(this.Cities)
     },   function Err(res) {
       		 this.Cities = res.statusText;
		});
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});