'use strict';

/**
 * @ngdoc service
 * @name weatherReportApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherReportApp.
 */
angular.module('weatherReportApp')
  .service('weatherService',['$http', '$log', '$q', 'aapConstants',function ($http, $log, $q, aapConstants) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var apiKey = aapConstants.apiKey;
    var apiBaseUrl = aapConstants.apiBaseUrl; 

    return {
    	getWeatherDataBasedOnCity : function(city){
    		var deferred = $q.defer();
    		var tempUrl = apiBaseUrl+'forecast?q='+city+'&APPID='+apiKey+'&cnt='+4+'&lang=en&mode=json&units=metric'
    		var url = encodeURI(tempUrl);
      			$http.get(url)
    			     .then(function(data) { 
      			      deferred.resolve(data);
      			   })
               .catch(function(response) {
                    console.error('Error occurred:', response.status, response.data);
                    deferred.reject(response);
                })
               .finally(function() {
                    console.log("Task Finished.");
                });
		    return deferred.promise;
    	}
    }

  }]);
