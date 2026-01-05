"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
            break;
        case orders_1.PriceBracket.Medium:
            return 20;
            break;
        case orders_1.PriceBracket.High:
            return 30;
            break;
    }
    return 0;
}
// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders.forEach(function (item) {
        var result = item.filter(function (item) { return item.price <= getMaxPrice(price); });
        filteredOrders.push(result);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    restaurants.forEach(function (restarunt, index) {
        if (orders[index].length > 0) {
            console.log(restarunt.name + "#" + index);
            orders[index].forEach(function (order, cnt) {
                console.log("- Order ".concat(cnt, ": $").concat(order.price));
            });
        }
    });
}
// Main
var eligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
//console.log(eligibleOrders);
printOrders(restaurants_1.restaurants, eligibleOrders);
