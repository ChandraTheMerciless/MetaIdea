'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
<<<<<<< HEAD
  .controller('LoginCtrl', function ($scope, $routeParams, service, $location) {
=======
  .controller('LoginCtrl', function ($scope, $routeParams, service) {
  
  //edit code to have service return whether current user is in local storage to determine whether variable is true or false

    $scope.loggedIn = false;

>>>>>>> e5821e7ca0bc90a24510bcbbddf974c14cf9082b
    $scope.loginData = {
      username: "",
      password: ""
    };

    $scope.loginUser = function(){
      console.log($scope.loginData);
      service.login($scope.loginData).then(function(){
<<<<<<< HEAD
            $location.path('/home');

=======
        
>>>>>>> e5821e7ca0bc90a24510bcbbddf974c14cf9082b
      });
      $scope.loggedIn = true;
    };

    $scope.logoutUser = function(){
      service.logout();

      $scope.loggedIn = false;
    };
  });
