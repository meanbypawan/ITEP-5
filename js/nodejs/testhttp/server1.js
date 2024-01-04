import http from "http";

const server = http.createServer((request,response)=>{
    if((request.url == "/home" || request.url == '/') && request.method == "GET"){
        response.write("Home Page");
    }
    else if((request.url == '/about') && request.method=="GET"){
        response.write("About Page");
    }      
    else if(request.url == '/contact' && request.method=="GET"){
        response.write("Contact Page");
    }
    response.end();
});

server.listen(3000,()=>{
    console.log("Server Started")
});