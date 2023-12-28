let p = new Promise((resolve,reject)=>{
   resolve("Promise is resolved...");
   //reject("Prmoise is rejected....");
});

p.then((resolvedValue)=>{
  console.log("Inside Then Callback  : "+resolvedValue);
})
.catch((rejectedValue)=>{
    console.log("Inside Catch Callback : "+rejectedValue);
});











