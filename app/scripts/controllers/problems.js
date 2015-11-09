'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:ProblemsCtrl
 * @description
 * # ProblemsCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('ProblemsCtrl', function (service, $scope, $routeParams) {

    var problemList = $routeParams;
    
//    $http.get("../service.js").success(function(response){
      service.getProblems(problemList).then(function(response){
        $scope.problems = response.data;
      })
  
  });
