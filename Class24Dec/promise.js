console.log(`1. Wake up: ${new Date().getSeconds()}`);

/* setTimeout( function shower(){
    console.log(`2.Shower: ${new Date().getSeconds()}`);
},3000);
setTimeout( function cook(){
    console.log(`3.Husband Cookk: ${new Date().getSeconds()}`);
    setTimeout(function eats(){
    console.log(`4.Me eating: ${new Date().getSeconds()}`);
     setTimeout(function getdressed(){
    console.log(`4.Me dressed: ${new Date().getSeconds()}`);
    }, 1000);
    }, 2000);
    
},5000); */

/* const myName ="Test"

const myPromise = new Promise((reseolve,reject)=>
{
    if(myName==="Test")
    {
        reseolve("Success");
    }
    else
    {
         reseolve("Check case");
    }
});

function print(reseult)
{
    console.log(reseult);
}
myPromise.then(value=>print(value)).catch(reason=>print(reason)); */


function getShower()
{
    let shower=new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve(`2.Shower: ${new Date().getSeconds()}`);
        },3000);
    });
    return shower;
}
function getCooks()
{
    let cooks=new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve(`3.Husband Cookk: ${new Date().getSeconds()}`);
        },5000);
    });
    return cooks;
}

function getBreakfast()
{
    let eat=new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve(`4.Me eating: ${new Date().getSeconds()}`);
        },2000);
    });
    return eat;
}
function getDressed()
{
    let dress=new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve(`5.Me dressed: ${new Date().getSeconds()}`);
        },1000);
    });
    return dress;
}

/* getShower().then((value)=>
{
    console.log(value);
}).catch((error)=>
{
    console.log(error);
})

getCooks().then((value)=>
{
    console.log(value);
    return getBreakfast();
}).then((value) =>
{
    console.log(value);
    return getDressed();
}).then((value) =>
{
      console.log(value);    
}).catch((err)=>
{
      console.log(err);    
}); 
 */
// async - await - syntactic sugar for promise - does not add new functionality

async function shower() {
    try {
        const shower = await getShower();
        console.log(shower);
    }   
    catch(err)
    {
        console.log(err);
    }
    
    
}

async function restOperations() {
    try {
     const cooks = await getCooks();
    console.log(cooks);
     const eat = await getBreakfast();
    console.log(eat);
     const dress = await getDressed();
    console.log(dress);
    }   
    catch(err)
    {
        console.log(err);
    }
}

shower();
restOperations();