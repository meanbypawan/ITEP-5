import fs from "fs";

try{
    let firstFileData = fs.readFileSync("./first.txt"); // 5min
    let secondFileData = fs.readFileSync("./second.txt"); // 5min
    fs.writeFileSync("./combined.txt",firstFileData+"\n"+secondFileData);
    console.log("Operation success....");
}
catch(err){
    console.log(err);
}