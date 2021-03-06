'use strict';

describe('Controller: CreateproblemCtrl', function () {
    // load the controller's module
    beforeEach(module('metaideaApp'));

    var CreateproblemCtrl,$q,
    scope;

    var service = {createProblems : function(problem){
        var def = $q.defer();
        return promise;
    }};

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$q_) {
        $q = _$q_;
        spyOn(service, 'createProblems').andReturn($q.when('ss'));
        scope = $rootScope.$new();
        CreateproblemCtrl = $controller('CreateproblemCtrl', {
          $scope: scope,
          service: service
          // place here mocked dependencies
        });
    }));
    

    it('should have empty description at the initialization' , function(){
        expect(scope.problem.description).toBe('');
    });
    it('should save the problem', function() {
        scope.problem = {};
        scope.createProblem();
        expect(service.createProblems).toHaveBeenCalledWith(scope.problem);
    })
});
