import http from "http";
import url,{fileURLToPath} from "url";
import fs from "fs";
import path from "path";

http.createServer((request,response)=>{
    let parsedUrl = url.parse(request.url,true);
    
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);
    
    console.log(parsedUrl.pathname);

    if(parsedUrl.pathname=="/" || parsedUrl.pathname=="/home"){
       let indexFilePath =  path.join(__dirname+"/views/index.html");
       let fileContent = fs.readFileSync(indexFilePath);
       response.write(fileContent);
       response.end();
    }
    else if(parsedUrl.pathname=="/about"){
        let aboutFilePath = path.join(__dirname+"/views/about.html");
        let fileContent = fs.readFileSync(aboutFilePath);
        response.write(fileContent);
        response.end();
    }
    else if(parsedUrl.pathname=="/contact"){
        let contactFilePath = path.join(__dirname+"/views/contact.html");
        let fileContent = fs.readFileSync(contactFilePath);
        response.write(fileContent);
        response.end();
        
    }
    else if(parsedUrl.pathname.match('\.css')){
        let cssFilePath = path.join(__dirname+parsedUrl.pathname);
        let readStream = fs.createReadStream(cssFilePath);
        readStream.pipe(response);
    }
}).listen(3000,()=>{
    console.log("Server Started...")
});







