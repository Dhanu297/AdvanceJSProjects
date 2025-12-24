const cookBeanSouffle = require('./HostParty.js');

// Write your code below:
async function hostDinnerParty() {
 try {
   let resolveValue = await cookBeanSouffle();
   console.log(`${resolveValue} is served!`);
   
 } catch (error) {
   // Catches any errors in the try block
   console.log(error);
   console.log('Ordering a pizza!');
 }
}

hostDinnerParty();




