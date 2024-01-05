import http from "http";
import url from "url";

const server = http.createServer((request,response)=>{
    //console.log(request.url);
    let parsedUrl = url.parse(request.url,true);
    console.log(parsedUrl);
    if((parsedUrl.pathname == "/home" || parsedUrl.pathname.url == '/') && request.method == "GET"){
        response.write("Home Page");
    }
    else if((parsedUrl.pathname == '/about') && request.method=="GET"){
        response.write("About Page");
    }      
    else if(parsedUrl.pathname == '/contact' && request.method=="GET"){
        response.write("Contact Page");
    }
    else if(parsedUrl.pathname == "/add"){
        let a = parsedUrl.query.a*1;
        let b = parsedUrl.query.b*1;
        
        response.write("<h1>Addition : "+(a+b)+"</h1>");
    }
    response.end();
});

server.listen(3000,()=>{
    console.log("Server Started")
});