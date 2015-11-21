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
    
      service.getProblems().then(function(response){
        $scope.problems = response.data;
        console.log(response.data);
      })
  
  });
