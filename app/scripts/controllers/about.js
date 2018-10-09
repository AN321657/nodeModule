'use strict';

/**
 * @ngdoc function
 * @name weatherReportApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherReportApp
 */
angular.module('weatherReportApp')
  .controller('AboutCtrl',['$scope','$http', '$log', '$q','weatherService',function ($scope,$http, $log, $q,weatherService) {
    
  	$scope.showReport = false;
  	$scope.message = false;
	
	$scope.getForecastByCity = function(count,city){
		if(count>0){
			$scope.message = false;
			weatherService.getWeatherDataBasedOnCity(count,city).then(function(result){
				$scope.forecastData = result.data;
				$scope.showReport = true;
			}, function(reason) {
			  alert('Failed: ' + reason.statusText);
			}, function(update) {
			  alert('Got notification: ' + update);
			});

		}else{
			$scope.message = 'Number of days should be greater than 0';
		}

	}

	$scope.getIconImageUrl = function(iconName) {
	      return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
	    };

	$scope.parseDate = function (time) {
	  return new Date(time * 1000);
	};





  }]);
