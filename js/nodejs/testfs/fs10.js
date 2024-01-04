import fs from "fs";

let readStream = fs.createReadStream("./data.txt");

// data, end, error

let data = "";
readStream.on("data",(chunk)=>{
   data = data + chunk; 
});

readStream.on("end",()=>{
    console.log("Data end..");
    console.log(data);
});

readStream.on("error",(err)=>{
    console.log(err);
});