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

    var homePage = window.location = $location.protocol()+'://' + $location.host()+':'+$location.port()+ "/#/home";

    $scope.loggedIn = false;

     $scope.loginData = {
      username: "",
      password: ""
    };

    $scope.loginUser = function(){
      console.log($scope.loginData);

      service.login($scope.loginData).then(function(){
           window.location = homePage;
      });
      $scope.loggedIn = true;
    };

    $scope.logoutUser = function(){
      service.logout();
      $scope.loggedIn = false;
    };
  });
