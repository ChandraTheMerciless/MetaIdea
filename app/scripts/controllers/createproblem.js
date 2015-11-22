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
    service.createProblems($scope.problem).then(function(response){
        alert(response);
    });
    
  }
  
});
