'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:ProblemCtrl
 * @description
 * # ProblemCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('ProblemCtrl', function (service, $scope, $routeParams) {
    var problemId = $routeParams.id;
    service.getProblem(problemId).then(function(response){
      $scope.problem = response.data;
    })
  
    $scope.voteUp = function(){
      $scope.problem.votes++;
//      service.updateProblem
    }
    
    $scope.voteDown = function(){
      $scope.problem.votes--;
    //      service.updateProblem
    }
    
  });
