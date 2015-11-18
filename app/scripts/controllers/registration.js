'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  //put this line back in when parse and service are set up
  //.controller('RegistrationCtrl', function (service, $scope, $routeParams) {
  .controller('RegistrationCtrl', function ($scope, $routeParams) {
    $scope.newUser = function(){

    };

    $scope.validPwds=true;

    $scope.verifyPasswords = function(item){
      //will add code to validate passwords matching
      item.validPwds=false;
    };
  });
