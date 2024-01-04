import fs from "fs";
try{
  let readStream = fs.createReadStream("./data.txt");
  let writeStream = fs.createWriteStream("./abc.txt",{flags:'a'});

  readStream.pipe(writeStream);
}
catch(err){
    console.log(err);
}  