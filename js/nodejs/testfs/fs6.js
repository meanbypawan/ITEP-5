import fs from "fs";

let data = "NodeJs application is highly scalable..";

try{
  fs.appendFileSync("./data.txt",data);
  console.log("Operation success.....");
}
catch(err){
  console.log(err);
}