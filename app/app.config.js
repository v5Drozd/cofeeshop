'use strict';

angular.
  module('coffeeVendingShop').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
       when('/coffee', {
        template: '<coffee-list></coffee-list>'
       }).
       when('/coffee/:coffee', {
        template: '<coffee-detail></coffee-detail>'
      }).
        otherwise('/otherwise');
    }
  ]);
