'use strict';

/**
 * @ngdoc function
 * @name weatherReportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherReportApp
 */
angular.module('weatherReportApp')
  .controller('MainCtrl',['$scope',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Protractor'
    ];
  }]);
