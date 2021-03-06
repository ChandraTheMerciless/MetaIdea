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
    'ui.bootstrap',
    'yaru22.md'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
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
  })
.run(function ($rootScope, $location, parseServices){
    var login =  $location.protocol()+'://' + $location.host()+':'+$location.port()+ "/login.html";

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        var currentUser = parseServices.current();
        if(!currentUser){
                event.preventDefault();
                window.location = login;
        }
      });

});
