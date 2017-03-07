'use strict';

// Register `providerList` component, along with its associated controller and template
angular.
  module('providerList').
  component('providerList', {
    templateUrl: 'provider-list/provider-list.template.html',
    controller: ['$http',
      function ProviderListController($http) {
        var self = this;
        self.orderProp = 'specialty';
        self.orderDirection = 'Descending';
        $http.get('providers/existingProviders.json').then(function(response) {
          self.providers = response.data;
        });
      }
    ]
  });
