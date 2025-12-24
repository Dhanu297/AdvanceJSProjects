const {checkInventory} = require('./Library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

//Fail and Success
//checkInventory(order).then(handleSuccess, handleFailure); 

// Catch the Handler
/* checkInventory(order)
.then(handleSuccess)
.catch(handleFailure); */
// Chain promises

