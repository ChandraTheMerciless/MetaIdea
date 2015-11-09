'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:ProblemCtrl
 * @description
 * # ProblemCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
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
    
    $scope.submitComment = function(){
      console.log($scope.problem.commentNew);
      
//      $http.post("../service.js", $scope.problem)
//        .success(function(response){
//          console.log("success?");
//        })
    }
    
  });
