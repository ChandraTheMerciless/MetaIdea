'use strict';

describe('Controller: ProblemCtrl', function () {

  // load the controller's module
  beforeEach(module('metaideaApp'));

  var ProblemCtrl,$q,
    scope;
  
  var service = {
    getProblem:function(problem){
      var def = $q.defer();
      return promise;
  },
    updateDescription:function(item, description){
      var def = $q.defer();
      return promise;
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, service, $routeParams, _$q_) {
    $q = _$q_;
    spyOn(service, 'getProblem').andReturn($q.when('ss'));
    spyOn(service, 'updateDescription').andReturn($q.when('ss'));
    spyOn(service, 'createComment').andReturn($q.when('ss'));
    
    
    scope = $rootScope.$new();
      ProblemCtrl = $controller('ProblemCtrl', {
      $scope: scope,
      controller: $controller,
      service: service,
      routeParams: $routeParams
    });
  }));

  it('should expect edit mode to be false on initialization', function () {
    
    expect(scope.editMode).toBe(false);

  });
  
  it('should expect editText function to change local editMode to true', function(){
    var item = {editMode : false};
    scope.editText(item);
    expect(item.editMode).toBe(true);
  });
  
  
  it('should expect saveText function to change local editMode to false', function(){
    var item = {editMode : true};
    scope.problem = {description:"data"};
    scope.saveText(item);
    expect(item.editMode).toBe(false);
  })
  
  it('should expect createComment in service to be called on addComment', function(){
    scope.problem = {comments : []};
//    spyOn();
    
    scope.addComment();
    
    expect(service.createComment).toHaveBeenCalled;
    
    
  })
  
});
