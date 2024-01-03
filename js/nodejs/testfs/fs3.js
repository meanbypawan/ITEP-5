import fs from "fs";

fs.appendFile("./data.txt","\nNodeJs is Single Threaded",(err)=>{
    err ? console.log(err) : console.log("operation success..");
});