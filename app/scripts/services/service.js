'use strict';

/**
 * @ngdoc service
 * @name metaideaApp.service
 * @description
 * # service
 * Service in the metaideaApp.
 */
angular.module('metaideaApp')
  .service('service', function ($q) {
    var pageSize = 20;
    var service = {};
   
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
       creator: 'asdas'
      },
      {
        description: 'Squid before they sold out hashtag DIY small batch fanny pack. Food truck single-origin coffee portland iPhone, semiotics whatever disrupt bespoke flannel banjo. Pop-up distillery leggings godard, tilde hoodie kombucha pitchfork typewriter etsy banh mi kitsch ennui tacos.', 
        creator: 'asdas'
      } 
    ]
  }
  
    service.getProblems = function(problemList){
    var deferred = $q.defer();
        deferred.resolve({data: problems});
        return deferred.promise;
  }
    
  service.createProblems = function(newProblem){
    console.log("Called service.js file from Create New page");
  }
  
  service.editProblem = function(problemId){
    console.log("save button detected from server");
    var deferred = $q.defer();
        deferred.resolve({data: problem});
        return deferred.promise;
  }
  
  service.getProblem = function(problemId){
    var deferred = $q.defer();
        deferred.resolve({data: problem});
        return deferred.promise;
  }


    return service;
  });
