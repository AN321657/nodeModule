'use strict';

/**
 * @ngdoc overview
 * @name weatherReportApp
 * @description
 * # weatherReportApp
 *
 * Main module of the application.
 */
angular
  .module('weatherReportApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
  }])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cityWeather', {
        templateUrl: 'views/cityweather.html',
        controller: 'CityweatherCtrl',
        controllerAs: 'cityWeather'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
