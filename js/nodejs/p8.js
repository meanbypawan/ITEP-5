let firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("A");
        },1000);
    });
}

let middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("B");
            reject("B");
        },500);
    });
}
let lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("C");
        },900);
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then((resolvedValue)=>{
    console.log(resolvedValue);
})
.catch((rejectedValue)=>{
    console.log(rejectedValue);
})