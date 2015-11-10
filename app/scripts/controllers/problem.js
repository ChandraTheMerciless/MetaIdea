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
      $scope.problem = response.data[0];
    })
  
    $scope.vote = function(item, value){
      item.votes = item.votes + value;
//      service.updateProblem
    }
    
    $scope.newComment = {votes : 0}
    
    $scope.addComment = function(){
        $scope.problem.comments.push($scope.newComment)
        $scope.newComment = {votes : 0}
//      console.log($scope.problem.commentNew);
      
//      $http.post("../service.js", $scope.problem)
//        .success(function(response){
//          console.log("success?");
//        })
    }
    
  });
