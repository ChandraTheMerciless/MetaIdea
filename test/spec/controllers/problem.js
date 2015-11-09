'use strict';

describe('Controller: ProblemCtrl', function () {

  // load the controller's module
  beforeEach(module('budgetApp'));

  var ProblemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProblemCtrl = $controller('ProblemCtrl', {
      $scope: scope
      
      // place here mocked dependencies
    });
  }));

  it('should call the function on click submit', function () {
    $scope.submitComment();
    
    //expect(ProblemCtrl.awesomeThings.length).toBe(3);
  });
});
