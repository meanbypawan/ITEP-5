const f1 = async ()=>{
    //throw new Error("Oops! something went wrong...");
    return 100;
}

f1().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log("Inside catch....");
    console.log(err);
});