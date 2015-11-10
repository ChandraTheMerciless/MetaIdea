'use strict';

/**
 * @ngdoc service
 * @name metaideaApp.parseServices
 * @description
 * # parseServices
 * Service in the metaideaApp.
 */
angular.module('metaideaApp')
  .service('parseServices', function ($q) {
    var service = {};
    
    Parse.initialize("koEFPqcIz7Gofau3n9l3vUofPuulaLzpK97atJar", "XD89jziE9YErMS9glQOWY8H5ZBMBmnO5P8WIboE8");

    
    service.createProblems = function(description){
          var Problem = Parse.Object.extend("Problem");
          var problem = new Problem();
          problem.set("description", description);
          problem.set("votes", 0);
          
          var deferred = $q.defer();
          problem.save(null, {
              success: function(results) {
                  deferred.resolve({data: results});
              }, 
              error: function(results, error) {
                  deferred.reject(error);
              }
              
          })
          return deferred.promise;
      }
    
    return service;

});
