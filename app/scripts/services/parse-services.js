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

    service.createProblems = function(item){
          var Problem = Parse.Object.extend("Problem");
          var problem = new Problem();
          problem.set("title", item.title);
          problem.set("description", item.description);
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

    service.getAll= function(className){
        var def = $q.defer();


        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);

        query.find({
          success: function(results) {
            def.resolve(results);
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        var promise = def.promise.then(function(results){
          var items = []
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            items.push(object._toFullJSON());
          }

          return {data: items};
        })

        return promise;
    }

    service.register = function(user) {
        var def = $q.defer();

        user.signUp(null, {
          success: function(user) {
                def.resolve(user);
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
        });

        return def.promise;
    };

    service.login = function(loginData) {
      var def = $q.defer();

      loginData.logIn(loginData.username, loginData.password, {
        success: function(loginData) {
          def.resolve(loginData);
          console.log("Success to login?");
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      })

      return def.promise;
    };

    service.getById = function (className, id, include) {
        var def = $q.defer();

        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);

        query.equalTo("objectId", id);

        //to do: make it for loop
        query.include(include);

        query.find({
          success: function(results) {
            def.resolve(results);
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        var promise = def.promise.then(function(results){
          var items = []
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            var res = object._toFullJSON();
            res[include] = object.valueOf(include)._toFullJSON()
            items.push(res);
          }

          return {data: items};
        })

        return promise;
    }
    service.current = function(){
        return Parse.User.current();
    }
    
    service.getAllFromPointer= function(className, colName){
        var def = $q.defer();

        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);
        query.include(colName)

        query.find({
          success: function(results) {
            def.resolve(results);
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        var promise = def.promise.then(function(results){
          var items = []
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            items.push(object.get(colName)._toFullJSON());
          }

          return items;
        })

        return promise;
    }


    return service;

});
