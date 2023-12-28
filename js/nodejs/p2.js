/**
 class Promise{
 }
   // resolve(), reject()
   let p = new Promise((resolve,reject)=>{

   }); 
*/

let p = new Promise((resolve,reject)=>{
   //resolve();
   reject();
});

p.then(()=>{
   console.log("Promise is resolved \n Then callback is executed..");
})
.catch(()=>{
    console.log("Promise is rejected \n Catch callback is executed...");
});











