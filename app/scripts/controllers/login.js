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

    var homePage = $location.protocol()+'://' + $location.host()+':'+$location.port()+ "/#/home";
    var login =  $location.protocol()+'://' + $location.host()+':'+$location.port()+ "/login.html";

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
        window.location = login;
      $scope.loggedIn = false;
    };
  });
