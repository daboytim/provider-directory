'use strict';

// Register `providerList` component, along with its associated controller and template
angular.
  module('providerList').
  component('providerList', {
    templateUrl: 'provider-list/provider-list.template.html',
    controller: ['$http',
      function ProviderListController($http) {
        var self = this;
        self.providers = [];
        self.orderProp = 'specialty';
        self.orderDirection = 'Descending';
        $http.get('providers/existingProviders.json').then(function(response) {
          self.providers = response.data;
        });

        self.addProvider = function(provider, form) {
          if (form.$valid) {
            self.providers.push(angular.copy(provider));
            form.$valid = false;
          }
        };

      }
    ]
  });
