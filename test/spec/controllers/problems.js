'use strict';

describe('Controller: ProblemsCtrl', function () {

  // load the controller's module
  beforeEach(module('metaideaApp'));

  var ProblemsCtrl,$q,
    scope;

    var service = {
        getProblems : function(){
            var def = $q.defer();
            return promise;
        }};


    beforeEach(inject(function ($controller, $rootScope, _$q_) {
        $q = _$q_;
        spyOn(service, 'getProblems').andReturn($q.when({data: []}));
        scope = $rootScope.$new();
        ProblemsCtrl = $controller('ProblemsCtrl', {
            $scope: scope,
            service: service
        });
    }));

  it('should should show a list of problems', function () {
      expect(service.getProblems).toHaveBeenCalled();
  });
});
