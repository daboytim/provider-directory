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

    it('should be possible to control provider order via drop-down menu', function() {
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var orderAscending = element(by.css('input[id="Ascending"]'));
      var firstNameOption = orderSelect.element(by.css('option[value="first_name"]'));
      var firstNameColumn = element.all(by.repeater('provider in $ctrl.providers').column('provider.first_name'));

      firstNameOption.click();

      function getNames() {
        return firstNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      expect(getNames()).toEqual([
        'Wijoyo, Bimo',
        'Harris, Mike',
        'Carlson, Mike',
        'Witting, Mike',
        'Rose, Nate',
        'Juday, Tobin'
      ]);

      orderAscending.click();

      expect(getNames()).toEqual([
        'Juday, Tobin',
        'Rose, Nate',
        'Witting, Mike',
        'Carlson, Mike',
        'Harris, Mike',
        'Wijoyo, Bimo'
      ]);
    });

    it('should be possible to add a new provider to the model and update the view', function() {
      var lastName = element(by.model('provider.last_name'));
      var firstName = element(by.model('provider.first_name'));
      var emailAddress = element(by.model('provider.email_address'));
      var specialty = element(by.model('provider.specialty'));
      var practiceName = element(by.model('provider.practice_name'));
      var addButton = element(by.css('button[id="addButton"]'));
      var providerList = element.all(by.repeater('provider in $ctrl.providers'));

      expect(providerList.count()).toBe(6);

      lastName.sendKeys('Boytim');
      firstName.sendKeys('Derek');
      emailAddress.sendKeys('boytim.2@gmail.com');
      specialty.sendKeys('Orthopedics');
      practiceName.sendKeys('Derek Heals')

      addButton.click();

      expect(providerList.count()).toBe(7);
    });

    it('should be possible to remove a provider from the model and update the view', function() {
      var aCheckbox = element(by.css('input[type="checkbox"]'));
      var removeButton = element(by.css('button[id="removeButton"]'));
      var providerList = element.all(by.repeater('provider in $ctrl.providers'));

      expect(providerList.count()).toBe(6);

      aCheckbox.click();
      removeButton.click();

      expect(providerList.count()).toBe(5);
    });

    it('should be possible to remove multiple providers from the model and update the view', function() {
      var checkboxes = element.all(by.css('input[type="checkbox"]'));
      var removeButton = element(by.css('button[id="removeButton"]'));
      var providerList = element.all(by.repeater('provider in $ctrl.providers'));

      expect(providerList.count()).toBe(6);

      checkboxes.get(0).click();
      checkboxes.get(2).click();
      checkboxes.get(3).click();
      removeButton.click();

      expect(providerList.count()).toBe(3);
    });

  });

});
