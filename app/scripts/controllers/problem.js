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
        service.vote(item, item.votes).then(function() {
            toastr.success('Your vote has been submitted!');
        })
    }
    
    $scope.newComment = {votes : 0}
    
    $scope.addComment = function(){
        $scope.problem.comments.push($scope.newComment)
        service.createComment($scope.problem, $scope.newComment).then(function() {
            toastr.success('Comment has been saved');
        });
        $scope.newComment = {votes : 0}
    }
    
    $scope.editMode = false;
  
    $scope.editText = function(item){
      item.editMode = true;
    }
    
    $scope.saveText = function(item){
      item.editMode = false;
      service.updateDescription(item, $scope.problem.description).then(function(){
          toastr.success('Your changes have been saved!');
      });
    }
    
  });
