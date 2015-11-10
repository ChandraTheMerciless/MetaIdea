'use strict';

/**
 * @ngdoc overview
 * @name metaideaApp
 * @description
 * # metaideaApp
 *
 * Main module of the application.
 */
angular
  .module('metaideaApp', [
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
      .when('/createproblem', {
        templateUrl: 'views/createproblem.html',
        controller: 'CreateproblemCtrl',
        controllerAs: 'createproblem'
      })
      .when('/editproblem', {
        templateUrl: 'views/editproblem.html',
        controller: 'EditproblemCtrl',
        controllerAs: 'editproblem'
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
