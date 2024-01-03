import fs from "fs";

console.log("At the start....");

fs.readFile("./dat.txt","utf8",(err,data)=>{
  if(err)
    console.log(err);
  else
    console.log(data);  
});
console.log("At the end.....");