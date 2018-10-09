'use strict';

describe('Service: aapConstants', function () {

  // load the service's module
  beforeEach(module('weatherReportApp'));

  // instantiate service
  var aapConstants;
  beforeEach(inject(function (_aapConstants_) {
    aapConstants = _aapConstants_;
  }));

  it('should do something', function () {
    expect(!!aapConstants).toBe(true);
  });

});
