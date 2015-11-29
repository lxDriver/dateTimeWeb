/**
 * Main.js by lxDriver
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('dateTime', [
    'ngRoute',
    'firebase'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", {templateUrl: "partials/login.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});

app.controller('TimeCtrl', function() {
    var self = this;
    
    self.setStart = function() {
        self.start = new Date();    
    }
    
    self.setStop = function() {
        self.stop = new Date();    
    }
    
    self.difference = function() {
        return self.stop - self.start;
    }
});