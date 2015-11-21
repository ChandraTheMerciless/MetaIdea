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
    $scope.loginData = {
      username: "",
      password: ""
    };

    $scope.loginUser = function(){
      console.log($scope.loginData);
      service.login($scope.loginData).then(function(){
            $location.path('/home');

      });
    };
  });
