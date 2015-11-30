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
    'ui.router',
    'ngRoute',
    'ngAnimate'
]).config(function($stateProvider, $urlRouterProvider) {

    console.log("config");
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '/',
        templateUrl: '/views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });
});
