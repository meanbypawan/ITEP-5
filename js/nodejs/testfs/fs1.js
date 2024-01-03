import fs from "fs";

console.log("At the start...");

fs.writeFile("./data.txt","NodeJs application is asynchronous by default",(err)=>{
    err ? console.log(err) : console.log("Operation success");
});

console.log("At the end...");
