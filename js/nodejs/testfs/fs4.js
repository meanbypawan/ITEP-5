import fs from "fs";
import promptSync from "prompt-sync";
let prompt = promptSync();
fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err)
      console.log(err);
    else{
        console.log("Enter Data..");
        let dataString = prompt();
        if(!data.includes(dataString)){
            fs.appendFile("./data.txt","\n"+dataString,(err)=>{
                err ? console.log(err) : console.log("Operation success...");
            });
        }
        else 
          console.log("Data is already available...");
    }  
});
