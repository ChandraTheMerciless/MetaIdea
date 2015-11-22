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
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
//        var currentUser = parseServices.current();
//        if (currentUser) {
//            console.log('ALLOW');
////            $location.path('/home');
//
//        } else {
//            if(next.$$route.controllerAs ==="login" || next.$$route.controllerAs ==="registration")
//            {
//
//            }
//            else {
//              // show the signup or login page
//                console.log('DENY');
//                event.preventDefault();
//                $location.path('/login');
//            }
//        }

      });

});
