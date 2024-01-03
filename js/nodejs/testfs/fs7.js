import fs from "fs";

fs.readFile("./first.txt","utf8",(err,firstFileData)=>{
  if(!err){
    fs.readFile("./second.txt","utf8",(err,secondFileData)=>{
      if(!err){
        try{
          fs.writeFileSync("./combined.txt",firstFileData+"\n"+secondFileData);
          console.log("Operation success...");
        }
        catch(err){
            console.log(err);
        }
       }
    });
  }
});