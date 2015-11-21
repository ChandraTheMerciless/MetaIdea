'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('LoginCtrl', function ($scope, $routeParams, service, $location) {

  //edit code to have service return whether current user is in local storage to determine whether variable is true or false

    $scope.loggedIn = false;

    $scope.loginData = {
      username: "",
      password: ""
    };

    $scope.loginUser = function(){
      console.log($scope.loginData);

      service.login($scope.loginData).then(function(){
            $location.path('/home');
      });
      $scope.loggedIn = true;
    };

    $scope.logoutUser = function(){
      service.logout();

      $scope.loggedIn = false;
    };
  });
