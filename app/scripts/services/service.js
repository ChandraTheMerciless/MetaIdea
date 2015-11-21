'use strict';

/**
 * @ngdoc service
 * @name metaideaApp.service
 * @description
 * # service
 * Service in the metaideaApp.
 */
angular.module('metaideaApp')
  .service('service', function ($q, parseServices) {

    var service = {};

    service.createProblems = function(problem){
        return parseServices.createProblems(problem);
    }

    service.getProblems = function(){
        return parseServices.getAll("Problem");
    }

    service.getProblem = function(problemId){
        return parseServices.getById("Problem", problemId, "comments");
    }

    service.register = function(user){
         var parseUser = new Parse.User();
        parseUser.set("username", user.name);
        parseUser.set("password", user.password);
        parseUser.set("department", user.department);
        parseUser.set("email", user.email);
        
        return parseServices.register(parseUser);
    }

    var pageSize = 20;
 

   service.editProblem = function(problemId){
    console.log("save button detected from server");
    var deferred = $q.defer();
        deferred.resolve({data: problem});
        return deferred.promise;
  };

  service.login = function(loginData){
    console.log("login btn hit");
    return parseServices.login(loginData);
  };

    return service;
  });
