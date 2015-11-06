'use strict';

/**
 * @ngdoc service
 * @name budgetApp.service
 * @description
 * # service
 * Service in the budgetApp.
 */
angular.module('budgetApp')
  .service('service', function ($q) {
    var pageSize = 20;
    var service = {};
   
  
  var problem = {
    title: 'asdasdas', 
    description: 'descsafcsdf asd', 
    votes: 5246,
    comments: [
      { description: 'comme', creator: 'asdas'},
      { description: 'comme', creator: 'asdas'} 
    ]
  }
  
  service.getProblem = function(problemId){
    var deferred = $q.defer();
        deferred.resolve({data: problem});
        return deferred.promise;
  }


    return service;
  });
