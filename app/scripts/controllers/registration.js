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
    
    console.log(Parse.User.current())
    $scope.newUser = {
      name: "",
      email:"",
      department:"",
      password:""
    };
  
  $scope.verifyPassword = {
    password: ""
  };

    $scope.newUserReg = function(){
        $scope.verifyPasswords();
        service.register($scope.newUser).then(function(){
            alert('user created successfully');
        });
    };

    $scope.validPwds=true;

    $scope.verifyPasswords = function(){
      console.log($scope.newUser.password);
      console.log($scope.verifyPassword.password);
      
      var pwd = $scope.newUser.password;
      var verifyPwd = $scope.verifyPassword.password;
      
      if(pwd == verifyPwd){
        $scope.validPwds=true;
      } else {
        $scope.validPwds=false;
      };
    };
  });
