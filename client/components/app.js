angular.module('app')
.controller('AppCtrl', function($http) {
	this.ShowWeather =(cityname) =>{
		$http({
			method: 'POST',
			url: '/data',
			data: {name: cityname || "London"},
			headers: {'Content-Type': 'application/json'}
		});
	}
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});