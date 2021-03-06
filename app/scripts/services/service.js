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
    
    service.getProblemCount = function() {
        return parseServices.getCount('Problem');
    };

    service.createProblems = function(problem){
        return parseServices.createProblems(problem);
    };

    service.getProblems = function(){
        return parseServices.getAll("Problem");
    };

    service.getProblem = function(problemId){
        return parseServices.getById("Problem", problemId, "comments");
    };

    service.register = function(user){
         var parseUser = new Parse.User();
         parseUser.set("username", user.name);
        parseUser.set("password", user.password);
        parseUser.set("department", user.department);
        parseUser.set("email", user.email);
        return parseServices.register(parseUser);
    };

    var pageSize = 20;
 
    service.vote = function (item, votes) {
        return parseServices.update(item.parseObject, 'votes', votes);
    };
   service.updateDescription = function(item, description){
       return parseServices.update(item.parseObject, 'description', description);
   };
    
    service.createComment = function(problem, comment){
        return parseServices.createComment(problem, comment);
    };

  service.login = function(loginData){
    console.log("login btn hit");
    return parseServices.login(loginData);
  };

   service.logout = function(){
    console.log("logout btn hit in service.js");
    return parseServices.logout();
  };

     return service;
  });
