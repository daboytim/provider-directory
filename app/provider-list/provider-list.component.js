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
        self.checkedProviders = [];
        self.orderProp = 'specialty';
        self.orderDirection = 'Descending';
        $http.get('providers/existingProviders.json').then(function(response) {
          self.providers = response.data;
        });

        self.addProvider = function(provider) {
          self.providers.push(angular.copy(provider));
        };

        self.removeCheckedProviders = function() {
          for (var i=0; i<self.providers.length; i++) {
            var provider = self.providers[i];
            if (provider.hasOwnProperty('checked') && provider.checked) {
              self.providers.splice(i, 1);
              i--; //since we are removing an element from the array we don't want the index to increase for the next iteration
            }
          }
        };

      }
    ]
  });
