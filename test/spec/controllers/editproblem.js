'use strict';

describe('Controller: EditproblemCtrl', function () {

  // load the controller's module
  beforeEach(module('metaideaApp'));

  var EditproblemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditproblemCtrl = $controller('EditproblemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditproblemCtrl.awesomeThings.length).toBe(3);
  });
});
