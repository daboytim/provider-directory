'use strict';

describe('providerList', function() {

  beforeEach(module('providerList'));

  // Test the controller
  describe('ProviderListController', function() {

    it('should create a `providers` model with 3 providers', inject(function($componentController) {
      var ctrl = $componentController('providerList');

      expect(ctrl.providers.length).toBe(3);
    }));
  });
});
