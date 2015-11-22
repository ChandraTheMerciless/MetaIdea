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
    
    service.getCount = function(className) {
        var Class = Parse.Object.extend(className);
        var query = new Parse.Query(Class);
//        query.equalTo("playerName", "Sean Plott");
        var deferred = $q.defer();

        query.count({
            success: function(count) {
            // The count request succeeded. Show the count
                  deferred.resolve({data: count});
            },
            error: function(error) {
                  deferred.reject(error);
            }
        });
        return deferred.promise;

    }

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
    
    service.createComment =function(problem, comment) {
        var deferred = $q.defer();

        var Comment = Parse.Object.extend('Comment');
        var parsecomment = new Comment();
        parsecomment.set('description', comment.description)
        parsecomment.set('votes',0)
        comment.parseObject = parsecomment;
        
        parsecomment.save(null, {
          success: function(results) {
              deferred.resolve({data: results});
            // The object was saved successfully.
            var relation = problem.parseObject.relation("comment");
            relation.add(parsecomment)
            problem.parseObject.save();
          },
          error: function(myComment, error) {
            // The save failed.
            // error is a Parse.Error with an error code and description.
          }
        });

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

      Parse.User.logIn(loginData.username, loginData.password, {
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
    service.logout = function(){
      console.log("logout clicked in parse-services.js");

      Parse.User.logOut();
    };


     service.getByIdx = function (className, id, include) {
         var def = $q.defer();

        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);

        query.equalTo("objectId", id);

        //to do: make it for loop
        query.relation(include);

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

    service.getById = function (className, id, include) {
        var def = $q.defer();

        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);

        query.equalTo("objectId", id);

        //to do: make it for loop
        //query.relation(include);

        query.find({
          success: function(results) {
              //def.resolve(results);
              var r = results[0].relation(include);
                r.query().find({
                  success: function(relationShipItems){
                    def.resolve({item: results, relationship: relationShipItems});
                    //response.success(trophies); //list of trophies pointed to by that player's "trophies" column.
                  },
                  error: function(error){
                    response.error(error);
                  }
                })
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

        var promise = def.promise.then(function(results){
          var items = [];
          for (var i = 0; i < results.item.length; i++) {
            var object = results.item[i];
            var res = object._toFullJSON();
              res.parseObject = object;
            res[include] = [];
            for (let j = 0; j < results.relationship.length; j++) {
                var relationshipObject = results.relationship[j]._toFullJSON(); 
                relationshipObject.parseObject = results.relationship[j];
                res[include].push(relationshipObject);
            }
            items.push(res);
          }

          return {data: items};
        })

        return promise;
    }
    
    
    service.current = function(){
        return Parse.User.current();
    }
    
    service.getAllFromRelation= function(className, colName){
        var def = $q.defer();

        var Object = Parse.Object.extend(className);
        var query = new Parse.Query(Object);
        query.relation(colName)

        query.find({
          success: function(results) {
              //def.resolve(results);
              var r = player.relation(colName);
                r.query().find({
                  success: function(relationShipItems){
                    def.resolve({item: results, relationship: relationShipItems});
                    //response.success(trophies); //list of trophies pointed to by that player's "trophies" column.
                  },
                  error: function(error){
                    response.error(error);
                  }
                })
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
    
    service.update = function (item, property, value) {
        item.set(property, value);
        var def = $q.defer();
        var promise = def.promise;
        item.save(null, {
          success: function(results) {
              def.resolve(results);
          }
        });
        return promise;
    }

    
    
    
    return service;

});
