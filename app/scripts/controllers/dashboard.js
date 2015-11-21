'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('DashboardCtrl', function ($scope, $routeParams, service) {

    $scope.likes = {
      num:0
    };
    $scope.comments = {
      num:0
    };
    $scope.openIssues = {
      num:0
    };
    $scope.closedIssues = {
      num:0
    };

    var problemList = $routeParams;

    service.getProblems().then(function(response){
      $scope.problems = response.data;
    })

  });
