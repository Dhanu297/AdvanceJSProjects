/* console.log("1");
var a= "zero"
setTimeout(()=>
{
    console.log("2");
    a = "one"
}
,1000);
console.log("3");
console.log(a);
*/


console.log(`1. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`2. ${new  Date().getSeconds()}`);
},10);
console.log(`3. ${new Date().getSeconds()}`);
console.log(`4. ${new Date().getSeconds()}`);
console.log(`5. ${new Date().getSeconds()}`);
setTimeout(()=>{
    console.log(`6. ${new Date().getSeconds()}`);
},0);
console.log(`7. ${new Date().getSeconds()}`);
console.log(`8. ${new Date().getSeconds()}`);
console.log(`9. ${new Date().getSeconds()}`);
console.log(`10. ${new Date().getSeconds()}`);