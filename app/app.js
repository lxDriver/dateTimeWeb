'use strict';
/**
 * @ngdoc function
 * @name dateTime.app
 * @description
 * # App
 * Controller of dateTime
 */

// Declare app level module which depends on views, and components
angular.module('dateTime', [
  'ngRoute',
  'dateTime.login',
  'dateTime.dashboard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
