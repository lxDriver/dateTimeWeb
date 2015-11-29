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
    var firebasePath = "https://lxdatetime.firebaseio.com/";
    var firebaseObj = new Firebase(firebasePath); 

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


    // find a suitable name based on the meta info given by each provider
    var getName = function(authData) {
      switch(authData.provider) {
         case 'password':
           return authData.password.email.replace(/@.*/, '');
         case 'twitter':
           return authData.twitter.displayName;
         case 'facebook':
           return authData.facebook.displayName;
      }
    }

    var firebaseUsers = firebasePath + "users/";

        // Tests to see if /users/<userId> has any data. 
    var checkIfUserExists = function(userId) {
        var usersRef = new Firebase(firebaseUsers);
        usersRef.child(userId).once('value', function(snapshot) {
            var exists = (snapshot.val() !== null);
            
            if(exists) {
                console.log("User does exist.");
            } else {
                console.log("User does not exist.");
            }
            return exists;
        });
    }

    firebaseObj.onAuth(function(authData) {
        var isUser = checkIfUserExists(authData.uid);
        console.log("onAuth");
        if (authData && !isUser) {
            // save the user's profile into the database so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            firebaseObj.child("users").child(authData.uid).set({
              provider: authData.provider,
              name: getName(authData)
            });
        } 
        if (authData) {
            console.log("existing user forwarded");
            $location.path('/dashboard');
        }
    });
    
}]);