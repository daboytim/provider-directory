'use strict';

describe('providerList', function() {

  beforeEach(module('providerList'));

  // Test the controller
  describe('controller', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('providers/existingProviders.json').respond([
        {"last_name": "Harris", "first_name": "Mike", "email_address": "mharris@updox.com", "specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},
          {"last_name": "Wijoyo", "first_name": "Bimo", "email_address": "bwijoyo@updox.com", "specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},
          {"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},
          {"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},
          {"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting’s Well Kids Pediatrics"},
          {"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"}
      ]);
      ctrl = $componentController('providerList');
    }));

    it('should create a `providers` model with 6 providers fetched from $http', function() {
      expect(ctrl.providers).toBeUndefined();

      $httpBackend.flush();
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
