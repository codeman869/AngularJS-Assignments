(function(){
    // 'use strict';

    var app = angular.module('ShoppingList',[])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckoffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckoffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckoffService.getList();

        toBuy.purchase = function(item) {
            ShoppingListCheckoffService.buy(item);
        }

    }



    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckoffService) {
        var bought = this;

        bought.items = ShoppingListCheckoffService.getBought();
    }

    function ShoppingListCheckoffService() {

        var service = this;

        var toBuy = [
            {
                name: 'Steaks',
                quantity: 2
            },

            {
                name: 'Beers',
                quantity: 24
            },
            {
                name: 'Bags of Chips',
                quantity: 4
            },
            {
                name: 'Bananas',
                quantity: 7
            },
            {
                name: 'Apples',
                quantity: 4
            }


        ];

        var bought = [];

        service.buy = function(item) {
            var location = toBuy.indexOf(item);
            toBuy.splice(location,1);
            bought.push(item);
        }


        service.getList = function() {
            return toBuy;
        }

        service.getBought = function() {
            return bought;
        }

    }

})();