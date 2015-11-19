'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('LoginCtrl', function ($scope, $routeParams, service) {
    $scope.loggedIn = false;

    $scope.loginData = {
      username: "",
      password: ""
    };

    $scope.loginUser = function(){
      console.log($scope.loginData);

      service.login($scope.loginData).then(function(){


        $scope.loggedIn = false;
      });
    };

    $scope.logoutUser = function(){
      service.logout();

      $scope.loggedIn = true;
    };
  });
