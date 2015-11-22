'use strict';

describe('Controller: DashboardCtrl', function () {
  var DashboardCtrl,scope;


//    // load the controller's module
//    beforeEach(module('metaideaApp'));
//    
//    beforeEach(angular.mock.inject(function($rootScope, $http, $location, $timeout, $controller, $injector, parseServices){
//        scope = $rootScope.$new();
//        http = $http;
//        location = $location;
//        timeout = $timeout;
//        service = $injector.get('services'); //not sure the name, you may try 'ConfigService' as well.
//
//        $controller('DashboardCtrl', {$scope: scope, $http: http, $location: location, $timeout: timeout, configService: service});
//    }));
//
//    
 

//
//  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardCtrl.awesomeThings.length).toBe(3);
  });
});
