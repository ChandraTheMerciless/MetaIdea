'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:EditproblemCtrl
 * @description
 * # EditproblemCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('EditproblemCtrl', function (service, $scope, $routeParams) {
    var problemId = $routeParams.id;
    service.getProblem(problemId).then(function(response){
      $scope.problem = response.data;
    });
    
    $scope.editMode = false;
    
    $scope.editText = function(item){
      console.log("click");
      item.editMode = true;
    };
    
    $scope.saveText = function(item){
      item.editMode = false;
      service.editProblem($scope.problem);
    }
  });
