'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:ProblemsCtrl
 * @description
 * # ProblemsCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('ProblemsCtrl', function (service, $scope, $routeParams) {

    var problemList = $routeParams;
    
//    $http.get("../service.js").success(function(response){
      service.getProblems(problemList).then(function(response){
        $scope.problems = response.data;
      })
  
  });
