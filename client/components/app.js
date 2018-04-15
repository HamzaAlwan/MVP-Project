angular.module('app')
.controller('AppCtrl', function($scope, $http) {
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
        	$scope.Cities = res.data;
        	console.log($scope.Cities)
     },   function Err(res) {
       		 $scope.Cities = res.statusText;
		});
})
.component('app', {
  bindings: {
  	Cities: '<'
  },
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});