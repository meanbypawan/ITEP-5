import fs from "fs";

let writeStream = fs.createWriteStream("./abc.txt");

writeStream.write("Hello....");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("Operation success...");
});

writeStream.on("error",(err)=>{
    console.log(err);
});