import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price:PriceBracket)
{
  switch(price)  
  {
    case PriceBracket.Low: return 10; break;

    case PriceBracket.Medium: return 20; break;

    case PriceBracket.High: return 30; break;
  }
  return 0;
}

// Add your getOrders() function below:

function getOrders(price:PriceBracket,orders: Order[][] )
{
  let filteredOrders:Order[][]=[];
  orders.forEach((item:Order[])=>
  {
    let result = item.filter((item:Order)=>item.price<= getMaxPrice(price));
    filteredOrders.push(result);
  });
  return filteredOrders;
} 
// Add your printOrders() function below:
function printOrders(restaurants:Restaurant[],orders: Order[][] )
{
  restaurants.forEach((restarunt:Restaurant,index:number)=>
  {
    if(orders[index].length>0)
    {
      console.log( restarunt.name + "#" + index);
      orders[index].forEach((order:Order,cnt:number)=>
      {
        console.log(`- Order ${cnt}: $${order.price}` );
      });
    }
  });
}
// Main
 const eligibleOrders = getOrders(PriceBracket.Low, orders);
 //console.log(eligibleOrders);
 printOrders(restaurants, eligibleOrders);
