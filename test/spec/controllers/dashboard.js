'use strict';

describe('Controller: DashboardCtrl', function () {
  var DashboardCtrl,scope, $q;

    beforeEach(module('metaideaApp'));

    var service = {
        getProblemCount : function(problem){
            var def = $q.defer();
            return promise;
    }};

    beforeEach(inject(function ($controller, $rootScope, _$q_) {
        $q = _$q_;
        spyOn(service, 'getProblemCount').andReturn($q.when({data: 5}));
        scope = $rootScope.$new();
        DashboardCtrl = $controller('DashboardCtrl', {
            $scope: scope,
            service: service
        });
    }));


  it('should initialize correctly', function () {
    expect(scope.problemsCount).toBe(0);
  });

    it('should show the correct no of problems', function(){
        expect(service.getProblemCount).toHaveBeenCalled();
    });
});
