'use strict';

/**
 * @ngdoc service
 * @name aqarApp.parse
 * @description
 * # parse
 * Service in the aqarApp.
 */
angular.module('metaideaApp')
  .service('parseServices', function ($http, $q) {
    Parse.initialize("koEFPqcIz7Gofau3n9l3vUofPuulaLzpK97atJar", "XD89jziE9YErMS9glQOWY8H5ZBMBmnO5P8WIboE8");
    
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
    
    
    var service = {};

    service.getItemById = function(className, id) {
    	var def = $q.defer();	
    	var query = new Parse.Query(className);
    	query.get(id).then(function(result){
    		def.resolve(result);
		});

		var promise = def.promise.then(function(results){
			return results._toFullJSON()
		})

		return promise;
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



    return service;
  });


  