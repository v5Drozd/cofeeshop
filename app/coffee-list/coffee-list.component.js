'use strict';

angular.
module('coffeeList').
component('coffeeList',{
    templateUrl: 'coffee-list/coffee-list.template.html',
    controller: [function CoffeeListController(){

        var self = this;
        self.orderProp = 'size';

        this.coffees = [
            {
                id:1,
                name: "Espresso",
                size: 30,
                "imageUrl": "img/coffees/espresso.jpg"

            },
            {
                id:2,
                name: "Americano",
                size: 50,
                imageUrl: "img/coffees/americano.png"
            },
      
            {
                name: "Cappuchino",
                size: 120,
                imageUrl: "img/coffees/cappuchino.jpg"
            }

        ];
    }]
})