'use strict';

/**
 * @ngdoc function
 * @name weatherReportApp.controller:CityweatherCtrl
 * @description
 * # CityweatherCtrl
 * Controller of the weatherReportApp
 */
angular.module('weatherReportApp')
  	.controller('CityweatherCtrl',['$scope','$http', '$log', '$q','weatherService',function ($scope,$http, $log, $q,weatherService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  	$scope.showReport = false;
  	$scope.message = false;
	
	$scope.getForecastByCity = function(city){
		if(city != null && city != undefined && city != ""){
			$scope.message = false;
			weatherService.getWeatherDataBasedOnCity(city).then(function(result){
				$scope.forecastData = result.data;
				$scope.showReport = true;
			}, function(reason) {
			  alert('Failed: ' + reason.statusText);
			}, function(update) {
			  alert('Got notification: ' + update);
			});

		}else{
			$scope.message = 'Please Enter a valid place';
		}

	}

	$scope.getIconImageUrl = function(iconName) {
	      return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
	    };

	$scope.parseDate = function (time) {
	  return new Date(time * 1000);
	};




  }]);
