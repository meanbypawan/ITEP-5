const f1 = (n)=>{
    return new Promise((resolve,reject)=>{
        if(n%2==0)
          resolve("Given number is even");
        else
          reject("Given number is odd");  
    });
}

f1(11).then(resolvedValue=>{
    console.log(resolvedValue);
}).catch(rejectedValue=>{
    console.log(rejectedValue);
});