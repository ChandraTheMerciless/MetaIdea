'use strict';

/**
 * @ngdoc overview
 * @name budgetApp
 * @description
 * # budgetApp
 *
 * Main module of the application.
 */
angular
  .module('budgetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angucomplete-alt',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/problems', {
        templateUrl: 'views/problems.html',
        controller: 'ProblemsCtrl',
        controllerAs: 'problems'
      })
      .when('/problem/:id', {
        templateUrl: 'views/problem.html',
        controller: 'ProblemCtrl',
        controllerAs: 'problem'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
