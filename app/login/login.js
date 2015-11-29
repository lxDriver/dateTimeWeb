'use strict';
/**
 * @ngdoc function
 * @name dateTime.controller: LoginCtrl
 * @description
 * # dateTime.LoginCtrl
 * Controller of dateTime
 */

angular.module('dateTime.login', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
    });
}])
 
// Home controller
.controller('LoginCtrl', ['$scope','$location', '$firebaseAuth', function($scope,$location,$firebaseAuth) {
    
    var firebaseObj = new Firebase("https://lxdatetime.firebaseio.com"); 
    
    var loginObj = $firebaseAuth(firebaseObj);
    
    $scope.user = {};
    
    $scope.SignIn = function(event) {
        event.preventDefault();  // To prevent form refresh
        
        console.log('Authentication started');
        
        var username = $scope.user.email;
        var password = $scope.user.password;
        
        
        
        loginObj.$authWithPassword({
                email: username,
                password: password
            })
            .then(function(user) {
                // Success callback
                console.log('Authentication successful');
                $location.path('/dashboard');
            }, function(error) {
                // Failure callback
                console.log('Authentication failure');
            });
    }    
}]);