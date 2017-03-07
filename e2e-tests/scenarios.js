'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('ProviderList Application', function() {

    describe('providerList', function() {

        beforeEach(function() {
        browser.get('index.html');
        });

        it('should filter the providers list as a user types into the search box', function() {
        var providerList = element.all(by.repeater('provider in $ctrl.providers'));
        var query = element(by.model('$ctrl.query'));

        expect(providerList.count()).toBe(6);

        query.sendKeys('mike');
        expect(providerList.count()).toBe(3);

        query.clear();
        query.sendKeys('harris');
        expect(providerList.count()).toBe(1);
        });

    });
});
