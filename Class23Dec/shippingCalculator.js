const shipmentcost=require("./shippingCost.js");
console.log(shipmentcost);
console.log(shipmentcost.rate.stanard);
let cost = shipmentcost.rate.stanard +shipmentcost.rate.perDistance+50;
console.log("Shipping COst is = " +cost );