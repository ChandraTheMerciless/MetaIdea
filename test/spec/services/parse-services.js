'use strict';

describe('Service: parseServices', function () {

  // load the service's module
  beforeEach(module('metaideaApp'));

  // instantiate service
  var parseServices;
  beforeEach(inject(function (_parseServices_) {
    parseServices = _parseServices_;
  }));

  it('should do something', function () {
    expect(!!parseServices).toBe(true);
  });

});
