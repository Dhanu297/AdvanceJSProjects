class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const storeItems = [
  new Item("Apple", 1.5),   // item number 0
  new Item("Bread", 2.0),   // item number 1
  new Item("Milk", 3.0)     // item number 2
];


// calculateTotal([0, 2], [3, 1]); 
// Item 0 → Apple → $1.50 × 3 = $4.50
// Item 2 → Milk → $3.00 × 1 = $3.00
// Output = 7.5
//calculateTotal ([0,1,2,3,4],[2,3])

function calculateTotal(items, quantities) {
//your code goes here 
    if (items.length>3 && items.length!=quantities.length) 
    {   
        console.log("Not a valid item or quanitity");
        return;
    }
    let index =0;
    let itemTotal = 0;
    let total =0;
    //check items in store 
    items.forEach(element => {
        if(element>items.length)
        {
             console.log("Item is not in store");
            return;
        }
        //console.log(storeItems[element].name);
        itemTotal = storeItems[element].price* quantities[index];
        console.log(itemTotal);
        total += itemTotal;
        index++
    });
    console.log("Your total bill is : " + total);
}

calculateTotal([2,3],[4,2]);