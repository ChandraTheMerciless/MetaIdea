'use strict';

describe('Controller: ProblemsCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetApp'));

  var ProblemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProblemsCtrl = $controller('ProblemsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProblemsCtrl.awesomeThings.length).toBe(3);
  });
});
