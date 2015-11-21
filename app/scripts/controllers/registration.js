'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('RegistrationCtrl', function ($scope, service, $routeParams, $location) {

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

      service.register($scope.newUser).then(function(user){
            console.log('user created successfully');
            $location.path('/login');
//            service.login(user).then(function(){
//                $location.path('/home');
//            });

        });
    };

    $scope.

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
