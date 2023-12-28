const removingGarbage = ()=>{
    console.log("Removing Garbase in progress....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Garbage Removed.....");
        },4000);
    });
}

const roomCleaning = ()=>{
    console.log("Room Cleaning in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Room not Cleaned...");
        },2500);
    });
}

Promise.all([removingGarbage(),roomCleaning()])
.then((result)=>{
    console.log(result[0] +"\n"+result[1]);
    console.log("\nI love ice-cream");
})
.catch((rejectedValue)=>{
    console.log(rejectedValue);
    console.log("\nI hate ice-cream");
});
