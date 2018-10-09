'use strict';

// spec.js
describe('Protractor Demo App', function() {

	var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  it('should redirect to the weather forcast tab', function() {
    browser.get('http://localhost:9000/#/home');

    element(by.id('redirect')).click();
    //browser.sleep(3000);
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('#/cityWeather');
  });

  it('should search the weather forcast', function() {
    browser.get('http://localhost:9000/#/cityWeather');
    element(by.model('city')).sendKeys('Bettiah');
    browser.waitForAngular();
    element(by.id('doForcast')).click();
   browser.waitForAngular();
    expect(element(by.model('showReport')));
  });

});



