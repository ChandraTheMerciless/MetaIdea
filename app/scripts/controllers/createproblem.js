'use strict';

/**
 * @ngdoc function
 * @name metaideaApp.controller:CreateproblemCtrl
 * @description
 * # CreateproblemCtrl
 * Controller of the metaideaApp
 */
angular.module('metaideaApp')
  .controller('CreateproblemCtrl', function (service, $scope, $location) {
  
  $scope.problem = {
    description: ''
  };
  
  $scope.createProblem = function (){
    service.createProblems($scope.problem).then(function(response){
        toastr.success('Your data has been submitted!');
        $location.path( "/problem/" + response.data.id );

    });
    
  }
  
});
