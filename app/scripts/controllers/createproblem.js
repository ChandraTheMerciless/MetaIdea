'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:CreateproblemCtrl
 * @description
 * # CreateproblemCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('CreateproblemCtrl', function (service, $scope, $routeParams) {
  
  $scope.problem = {
    description: ''
  };
  
  $scope.createProblem = function (){
    console.log($scope.problem);
    service.createProblems($scope.problem);
    
  }
  
});
