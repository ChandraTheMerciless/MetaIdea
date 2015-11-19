'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('RegistrationCtrl', function ($scope, service, $routeParams) {
    $scope.newUser = {
      name: "",
      email:"",
      department:"",
      password:""
    };

    $scope.newUserReg = function(){
        service.register($scope.newUser).then(function(){
            alert('user created successfully');
        });
    };

    $scope.

    $scope.validPwds=true;

    $scope.verifyPasswords = function(item){
      //will add code to validate passwords matching
      item.validPwds=false;
    };
  });
