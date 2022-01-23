'use strict';

angular.
module('coffeeDetail').
component('coffeeDetail',{
    templateUrl: 'coffee-detail/coffee-detail.template.html',
    controller: [ '$http',  '$routeParams',function CoffeeDetailController($http, $routeParams){

        var self = this;

        $http.get('coffees/' + $routeParams.coffee.toLowerCase() + '.json').then(function(response) {
            self.coffee = response.data;
          });
        }

    ]
})