'use strict';

describe('Controller: CreateproblemCtrl', function () {

  // load the controller's module
  beforeEach(module('metaideaApp'));

  var CreateproblemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateproblemCtrl = $controller('CreateproblemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateproblemCtrl.awesomeThings.length).toBe(3);
  });
});
