'use strict';
/**
 * @ngdoc function
 * @name dateTime.controller: DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of dateTime
 */

angular.module('dateTime.dashboard', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    });
}])
 
// Home controller
.controller('DashboardCtrl', ['$scope','$location', '$firebaseAuth', function($scope,$location,$firebaseAuth) {
    
}]);