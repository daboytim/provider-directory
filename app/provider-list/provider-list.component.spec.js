'use strict';

describe('providerList', function() {

  beforeEach(module('providerList'));

  // Test the controller
  describe('ProviderListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('providerList');
    }));

    it('should create a `providers` model with 6 providers', function() {
      expect(ctrl.providers.length).toBe(6);
    });

    it('should set a default value for the orderProp model', function() {
      expect(ctrl.orderProp).toBe('specialty');
    });

    it('should set a default value for the orderDirection model', function() {
      expect(ctrl.orderDirection).toBe('Descending');
    });
  });
});
