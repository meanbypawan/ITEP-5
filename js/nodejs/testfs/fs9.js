// http,url,path
import fs from "fs";
const readFirstFile = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./first.txt",(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
}
const readSecondFile = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./second.txt",(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
}

Promise.all([readFirstFile(),readSecondFile()])
.then((result)=>{
    fs.writeFile("./combined.txt",result[0]+"\n"+result[1],(err)=>{
        err ? console.log(err) : console.log("Operation success....");
    })
})
.catch(err=>{
    console.log("Operation failed...");
});


