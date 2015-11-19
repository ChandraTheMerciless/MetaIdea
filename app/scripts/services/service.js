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

    var problems = [
    {
      id: 1,
      title: 'Problem 1',
      author: 'Black Widow'
    },
    {
      id: 2,
      title: 'Problem 2',
      author: 'Nemo'
    },
    {
      id: 3,
      title: 'Problem 3',
      author: 'Iron Man'
    },
    {
      id: 4,
      title: 'Problem 4',
      author: 'Thor'
    },
    {
      id: 5,
      title: 'asdasdas',
      author: 'Loki'
    }
  ]

  var problem = {
    title: 'asdasdas',
    description: 'Squid before they sold out hashtag DIY small batch fanny pack. Food truck single-origin coffee portland iPhone, semiotics whatever disrupt bespoke flannel banjo. Pop-up distillery leggings godard, tilde hoodie kombucha pitchfork typewriter etsy banh mi kitsch ennui tacos.',
    votes: 5246,
    comments: [
      {
       description: 'Squid before they sold out hashtag DIY small batch fanny pack. Food truck single-origin coffee portland iPhone, semiotics whatever disrupt bespoke flannel banjo. Pop-up distillery leggings godard, tilde hoodie kombucha pitchfork typewriter etsy banh mi kitsch ennui tacos.',
       creator: 'asdas',
           votes: 0
      },
      {
        description: 'Squid before they sold out hashtag DIY small batch fanny pack. Food truck single-origin coffee portland iPhone, semiotics whatever disrupt bespoke flannel banjo. Pop-up distillery leggings godard, tilde hoodie kombucha pitchfork typewriter etsy banh mi kitsch ennui tacos.',
        creator: 'asdas',
          votes: 7
      }
    ]
  };





   service.editProblem = function(problemId){
    console.log("save button detected from server");
    var deferred = $q.defer();
        deferred.resolve({data: problem});
        return deferred.promise;
  };

  service.login = function(loginData){
    console.log("login btn hit");
    //var deferred = $q.defer();
    //deferred.resolve({data: problem});
    //return deferred.promise;
    return parseServices.login(loginData);
  };

  service.logout = function(){
    console.log("logout btn hit in service.js");
    return parseServices.logout();
  };

    //service.login = function(loginData){
    //  console.log("Login reached service.js?");
    //  return parseServices.login(loginData);
    //};




    return service;
  });
